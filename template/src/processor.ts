import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";

import * as TornadoABI from "./abi/TornadoContract";

export const Contract = "0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF".toLowerCase();

export const processor = new EvmBatchProcessor()
	.setDataSource({
		archive: lookupArchive("eth-mainnet"),
		chain: "https://rpc.ankr.com/eth",
	})
	.setFinalityConfirmation(10)
	.setBlockRange({
		from: 17000000,
	})
	.setFields({
		log: {
			data: true,
			topics: true,
			transactionHash: true,
		},
		transaction: {
			gasUsed: true,
			value: true,
			from: true,
			to: true,
		},
	})
	.addLog({
		address: [Contract],
		topic0: [
			TornadoABI.events["Deposit"].topic,
			TornadoABI.events["Withdrawal"].topic,
		],
		transaction: true,
	});
