import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './TornadoContract.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Deposit: new LogEvent<([commitment: string, leafIndex: number, timestamp: bigint] & {commitment: string, leafIndex: number, timestamp: bigint})>(
        abi, '0xa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff196'
    ),
    Withdrawal: new LogEvent<([to: string, nullifierHash: string, relayer: string, fee: bigint] & {to: string, nullifierHash: string, relayer: string, fee: bigint})>(
        abi, '0xe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c34931'
    ),
}

export const functions = {
    changeOperator: new Func<[_newOperator: string], {_newOperator: string}, []>(
        abi, '0x06394c9b'
    ),
    nullifierHashes: new Func<[_: string], {}, boolean>(
        abi, '0x17cc915c'
    ),
    withdraw: new Func<[_proof: string, _root: string, _nullifierHash: string, _recipient: string, _relayer: string, _fee: bigint, _refund: bigint], {_proof: string, _root: string, _nullifierHash: string, _recipient: string, _relayer: string, _fee: bigint, _refund: bigint}, []>(
        abi, '0x21a0adb6'
    ),
    verifier: new Func<[], {}, string>(
        abi, '0x2b7ac3f3'
    ),
    hashLeftRight: new Func<[_left: string, _right: string], {_left: string, _right: string}, string>(
        abi, '0x38bf282e'
    ),
    FIELD_SIZE: new Func<[], {}, bigint>(
        abi, '0x414a37ba'
    ),
    levels: new Func<[], {}, number>(
        abi, '0x4ecf518b'
    ),
    operator: new Func<[], {}, string>(
        abi, '0x570ca735'
    ),
    isKnownRoot: new Func<[_root: string], {_root: string}, boolean>(
        abi, '0x6d9833e3'
    ),
    commitments: new Func<[_: string], {}, boolean>(
        abi, '0x839df945'
    ),
    denomination: new Func<[], {}, bigint>(
        abi, '0x8bca6d16'
    ),
    currentRootIndex: new Func<[], {}, number>(
        abi, '0x90eeb02b'
    ),
    updateVerifier: new Func<[_newVerifier: string], {_newVerifier: string}, []>(
        abi, '0x97fc007c'
    ),
    isSpentArray: new Func<[_nullifierHashes: Array<string>], {_nullifierHashes: Array<string>}, Array<boolean>>(
        abi, '0x9fa12d0b'
    ),
    deposit: new Func<[_commitment: string], {_commitment: string}, []>(
        abi, '0xb214faa5'
    ),
    getLastRoot: new Func<[], {}, string>(
        abi, '0xba70f757'
    ),
    roots: new Func<[_: bigint], {}, string>(
        abi, '0xc2b40ae4'
    ),
    ROOT_HISTORY_SIZE: new Func<[], {}, number>(
        abi, '0xcd87a3b4'
    ),
    isSpent: new Func<[_nullifierHash: string], {_nullifierHash: string}, boolean>(
        abi, '0xe5285dcc'
    ),
    zeros: new Func<[_: bigint], {}, string>(
        abi, '0xe8295588'
    ),
    ZERO_VALUE: new Func<[], {}, bigint>(
        abi, '0xec732959'
    ),
    filledSubtrees: new Func<[_: bigint], {}, string>(
        abi, '0xf178e47c'
    ),
    nextIndex: new Func<[], {}, number>(
        abi, '0xfc7e9c6f'
    ),
}

export class Contract extends ContractBase {

    nullifierHashes(arg0: string): Promise<boolean> {
        return this.eth_call(functions.nullifierHashes, [arg0])
    }

    verifier(): Promise<string> {
        return this.eth_call(functions.verifier, [])
    }

    hashLeftRight(_left: string, _right: string): Promise<string> {
        return this.eth_call(functions.hashLeftRight, [_left, _right])
    }

    FIELD_SIZE(): Promise<bigint> {
        return this.eth_call(functions.FIELD_SIZE, [])
    }

    levels(): Promise<number> {
        return this.eth_call(functions.levels, [])
    }

    operator(): Promise<string> {
        return this.eth_call(functions.operator, [])
    }

    isKnownRoot(_root: string): Promise<boolean> {
        return this.eth_call(functions.isKnownRoot, [_root])
    }

    commitments(arg0: string): Promise<boolean> {
        return this.eth_call(functions.commitments, [arg0])
    }

    denomination(): Promise<bigint> {
        return this.eth_call(functions.denomination, [])
    }

    currentRootIndex(): Promise<number> {
        return this.eth_call(functions.currentRootIndex, [])
    }

    isSpentArray(_nullifierHashes: Array<string>): Promise<Array<boolean>> {
        return this.eth_call(functions.isSpentArray, [_nullifierHashes])
    }

    getLastRoot(): Promise<string> {
        return this.eth_call(functions.getLastRoot, [])
    }

    roots(arg0: bigint): Promise<string> {
        return this.eth_call(functions.roots, [arg0])
    }

    ROOT_HISTORY_SIZE(): Promise<number> {
        return this.eth_call(functions.ROOT_HISTORY_SIZE, [])
    }

    isSpent(_nullifierHash: string): Promise<boolean> {
        return this.eth_call(functions.isSpent, [_nullifierHash])
    }

    zeros(arg0: bigint): Promise<string> {
        return this.eth_call(functions.zeros, [arg0])
    }

    ZERO_VALUE(): Promise<bigint> {
        return this.eth_call(functions.ZERO_VALUE, [])
    }

    filledSubtrees(arg0: bigint): Promise<string> {
        return this.eth_call(functions.filledSubtrees, [arg0])
    }

    nextIndex(): Promise<number> {
        return this.eth_call(functions.nextIndex, [])
    }
}
