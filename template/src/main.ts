import { TypeormDatabase } from "@subsquid/typeorm-store";
import { decodeHex } from "@subsquid/evm-processor";
import * as TornadoABI from "./abi/TornadoContract";
import { Deposit, Withdrawal } from "./model";
import { processor, Contract } from "./processor";

export const concatID = (hash: string, logindex: number) => {
	const buffer = Buffer.alloc(4);
	buffer.writeInt32LE(logindex, 0);
	const result = `${hash}${buffer.toString("hex")}`;
	return result;
};

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
	const deposit: Deposit[] = [];
	const withdrawal: Withdrawal[] = [];

	for (const c of ctx.blocks) {
		for (const e of c.logs) {
			if (e.address === Contract) {
				if (e.topics[0] === TornadoABI.events["Deposit"].topic) {
					const { commitment, leafIndex, timestamp } = TornadoABI.events[
						"Deposit"
					].decode(e);
					deposit.push(
						new Deposit({
							id: concatID(e.transactionHash, e.logIndex),
							commitment: decodeHex(commitment),
							from: decodeHex(e?.transaction!.from),
							leafIndex: BigInt(leafIndex),
							timestamp,
							value: BigInt(e?.transaction!.value),
							blockNumber: BigInt(e.block?.height),
							blockTimestamp: BigInt(e.block?.timestamp),
							transactionHash: decodeHex(e.transactionHash),
						})
					);
				} else if (e.topics[0] === TornadoABI.events["Withdrawal"].topic) {
					const { to, nullifierHash, relayer, fee } = TornadoABI.events[
						"Withdrawal"
					].decode(e);
					withdrawal.push(
						new Withdrawal({
							id: concatID(e.transactionHash, e.logIndex),
							blockNumber: BigInt(e?.block?.height),
							blockTimestamp: BigInt(e?.block?.timestamp),
							fee,
							nullifierHash: decodeHex(nullifierHash),
							relayer: decodeHex(relayer),
							to: decodeHex(to),
							transactionHash: decodeHex(e.transactionHash),
						})
					);
				}
			}
		}
	}
	await ctx.store.upsert(deposit);
	await ctx.store.upsert(withdrawal);
});
