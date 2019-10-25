
export const contractDetails = [
	{
		"constant": false,
		"inputs": [],
		"name": "advisingBankConfirm",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "advisingBankInit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "carrierSign",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "exerciseBillOfExchange",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "exporterConfirm",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_billofExchange",
				"type": "bytes32"
			},
			{
				"name": "_certInsurance",
				"type": "bytes32"
			}
		],
		"name": "exporterDoc",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "exporterInit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_billofLading",
				"type": "bytes32"
			},
			{
				"name": "_invoice",
				"type": "bytes32"
			},
			{
				"name": "_carrier",
				"type": "address"
			}
		],
		"name": "exporterShipment",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "LoCHash",
				"type": "bytes32"
			}
		],
		"name": "importerAmend",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "importerConfirm",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "importerConfirmBoE",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "importerFinalAccept",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "issuingBankConfirm",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "importerAddr",
				"type": "address"
			},
			{
				"name": "issuingBankAddress",
				"type": "address"
			},
			{
				"name": "shipmentVal",
				"type": "uint256"
			},
			{
				"name": "LoCHash",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "advisingBank",
				"type": "address"
			}
		],
		"name": "advisingBankSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "exporter",
				"type": "address"
			}
		],
		"name": "exporterSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "paymentAmt",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "holderAddr",
				"type": "address"
			}
		],
		"name": "BOESet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "newHolder",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "certInsurance",
				"type": "bool"
			}
		],
		"name": "BOEExercised",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "certified",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "sig",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "status",
				"type": "string"
			}
		],
		"name": "CertificationDone",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "exporterAuth",
				"type": "bool"
			}
		],
		"name": "exportAuthSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "advisingBank",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "exporter",
				"type": "bool"
			}
		],
		"name": "advisingBankAuthSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "issuingBank",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "advisingBank",
				"type": "bool"
			}
		],
		"name": "issuingBankAuthSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "exporter",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "advisingBank",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "issuingBank",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "LetterOfCreditProof",
				"type": "bytes32"
			}
		],
		"name": "importerSetNewLoC",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "importer",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "issuingBank",
				"type": "bool"
			}
		],
		"name": "importerAuthSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "boe",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "certInsurance",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "txStatus",
				"type": "string"
			}
		],
		"name": "exporterDocSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "BillofLading",
				"type": "bool"
			}
		],
		"name": "importerConfirmBoESet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "invoice",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "BillofLading",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "carrier",
				"type": "address"
			}
		],
		"name": "exporterShipmentSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "BillofLading",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "invoice",
				"type": "bool"
			}
		],
		"name": "carrierSignSet",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "advisingBank",
		"outputs": [
			{
				"name": "Address",
				"type": "address"
			},
			{
				"name": "auth",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BillofLading",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "certified",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "boe",
		"outputs": [
			{
				"name": "holder",
				"type": "address"
			},
			{
				"name": "optionPrice",
				"type": "uint256"
			},
			{
				"name": "certified",
				"type": "bool"
			},
			{
				"name": "hash",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "certInspection",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "certified",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "certInsurance",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "certified",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "exporter",
		"outputs": [
			{
				"name": "Address",
				"type": "address"
			},
			{
				"name": "auth",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLoCHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOTP",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "importer",
		"outputs": [
			{
				"name": "Address",
				"type": "address"
			},
			{
				"name": "auth",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "invoice",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "certified",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "issuingBank",
		"outputs": [
			{
				"name": "Address",
				"type": "address"
			},
			{
				"name": "auth",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "txStatus",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]