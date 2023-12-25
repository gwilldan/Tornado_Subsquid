export const ABI_JSON = [
    {
        "type": "function",
        "name": "changeOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_newOperator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "nullifierHashes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes",
                "name": "_proof"
            },
            {
                "type": "bytes32",
                "name": "_root"
            },
            {
                "type": "bytes32",
                "name": "_nullifierHash"
            },
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "address",
                "name": "_relayer"
            },
            {
                "type": "uint256",
                "name": "_fee"
            },
            {
                "type": "uint256",
                "name": "_refund"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "verifier",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "hashLeftRight",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_left"
            },
            {
                "type": "bytes32",
                "name": "_right"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "FIELD_SIZE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "levels",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "operator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isKnownRoot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_root"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "commitments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "denomination",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "currentRootIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "updateVerifier",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_newVerifier"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isSpentArray",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "_nullifierHashes"
            }
        ],
        "outputs": [
            {
                "type": "bool[]",
                "name": "spent"
            }
        ]
    },
    {
        "type": "function",
        "name": "deposit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_commitment"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getLastRoot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "roots",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ROOT_HISTORY_SIZE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isSpent",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_nullifierHash"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "zeros",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ZERO_VALUE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "filledSubtrees",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nextIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": ""
            }
        ]
    },
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_verifier"
            },
            {
                "type": "uint256",
                "name": "_denomination"
            },
            {
                "type": "uint32",
                "name": "_merkleTreeHeight"
            },
            {
                "type": "address",
                "name": "_operator"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Deposit",
        "inputs": [
            {
                "type": "bytes32",
                "name": "commitment",
                "indexed": true
            },
            {
                "type": "uint32",
                "name": "leafIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Withdrawal",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "nullifierHash",
                "indexed": false
            },
            {
                "type": "address",
                "name": "relayer",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            }
        ]
    }
]
