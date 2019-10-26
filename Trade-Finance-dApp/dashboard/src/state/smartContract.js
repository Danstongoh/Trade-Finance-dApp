import Web3 from 'web3';
import { contractDetails } from './contractJSON';
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var accounts = ["0xce7ffb3b50da50e6831155a3e8fdc07fea5b25e4", "0x27b2f32be5591435c5df926af2bb70a10e43ef61", "0xf9087bceb2aec9c6cc9fd1b7ba633ca43c614e40", "0xea2810ee8d0f55929bf812cb157a72b5166d891d", "0xa600acdd67c3b4a899a10ce131d82ae8d5d57d12","0xf6f9f75f6c504777d9d2e402852e75eab110c9af", "0x42d055d57bf9b5e6dacfaed96fa49015107eea4a"];

export var letterofcredit = new web3.eth.Contract(contractDetails, 
   {
     from: accounts[0], 
     data: '0x6080604052604080519081016040528060006001026000191681526020016000151581525060066000820151816000019060001916905560208201518160010160006101000a81548160ff0219169083151502179055505050604080519081016040528060006001026000191681526020016000151581525060086000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555050506040805190810160405280600060010260001916815260200160001515815250600a6000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555050506040805190810160405280600060010260001916815260200160001515815250600c6000820151816000019060001916905560208201518160010160006101000a81548160ff02191690831515021790555050506040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250601260008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555050506040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250601360008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555050506040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250601460008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555050506040805190810160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250601560008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff0219169083151502179055505050608060405190810160405280601260000160149054906101000a900460ff16151515158152602001601360000160149054906101000a900460ff16151515158152602001601460000160149054906101000a900460ff16151515158152602001601560000160149054906101000a900460ff1615151515815250601690600462000448929190620009e8565b503480156200045657600080fd5b506040516080806200391b8339810180604052810190808051906020019092919080519060200190929190805190602001909291908051906020019092919050505060c0604051908101604052806040805190810160405280601481526020017f50656e64696e6720436f6e6669726d6174696f6e00000000000000000000000081525081526020016040805190810160405280601a81526020017f416c6c2050617274696573206861766520636f6e6669726d656400000000000081525081526020016040805190810160405280601481526020017f50656e64696e6720424f4520707572636861736500000000000000000000000081525081526020016040805190810160405280601481526020017f5374616e62647920666f72207368697070696e6700000000000000000000000081525081526020016040805190810160405280600781526020017f536869707065640000000000000000000000000000000000000000000000000081525081526020016040805190810160405280600981526020017f436f6c6c6563746564000000000000000000000000000000000000000000000081525081525060029060066200061692919062000a95565b5060a0604051908101604052806040805190810160405280601881526020017f556e617574686f7269736564205472616e73616374696f6e00000000000000008152508152602001606060405190810160405280602d81526020017f56616c75652068617320746f206265207365742062656c6f772074686520536881526020017f69706d656e742056616c75652e000000000000000000000000000000000000008152508152602001606060405190810160405280603781526020017f56616c75652068617320746f20626520736574206174206c656173742038302581526020017f206f662074686520536869706d656e742056616c75652e0000000000000000008152508152602001606060405190810160405280602381526020017f53656e742076616c756520646f6573206e6f7420657175616c20424f4520566181526020017f6c7565000000000000000000000000000000000000000000000000000000000081525081526020016040805190810160405280601281526020017f5472616e73616374696f6e204661696c656400000000000000000000000000008152508152506003906005620007cf92919062000afc565b50620007f882670de0b6b3a7640000620009a66401000000000262002b51176401000000009004565b600481905550600260008154811015156200080f57fe5b90600052602060002001600190805460018160011615610100020316600290046200083c92919062000b63565b50806005816000191690555083601260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082601360000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016004548152602001600015158152602001600060010260001916815250600e60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020160006101000a81548160ff021916908315150217905550606082015181600301906000191690559050505050505062000d50565b6000806000841415620009bd5760009150620009e1565b8284029050828482811515620009cf57fe5b04141515620009dd57600080fd5b8091505b5092915050565b82805482825590600052602060002090601f0160209004810192821562000a825791602002820160005b8382111562000a5157835183826101000a81548160ff021916908315150217905550926020019260010160208160000104928301926001030262000a12565b801562000a805782816101000a81549060ff021916905560010160208160000104928301926001030262000a51565b505b50905062000a91919062000bf1565b5090565b82805482825590600052602060002090810192821562000ae9579160200282015b8281111562000ae857825182908051906020019062000ad792919062000c24565b509160200191906001019062000ab6565b5b50905062000af8919062000cab565b5090565b82805482825590600052602060002090810192821562000b50579160200282015b8281111562000b4f57825182908051906020019062000b3e92919062000c24565b509160200191906001019062000b1d565b5b50905062000b5f919062000cab565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000b9e578054855562000bde565b8280016001018555821562000bde57600052602060002091601f016020900482015b8281111562000bdd57825482559160010191906001019062000bc0565b5b50905062000bed919062000cdc565b5090565b62000c2191905b8082111562000c1d57600081816101000a81549060ff02191690555060010162000bf8565b5090565b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000c6757805160ff191683800117855562000c98565b8280016001018555821562000c98579182015b8281111562000c9757825182559160200191906001019062000c7a565b5b50905062000ca7919062000cdc565b5090565b62000cd991905b8082111562000cd5576000818162000ccb919062000d04565b5060010162000cb2565b5090565b90565b62000d0191905b8082111562000cfd57600081600090555060010162000ce3565b5090565b90565b50805460018160011615610100020316600290046000825580601f1062000d2c575062000d4d565b601f01602090049060005260206000209081019062000d4c919062000cdc565b5b50565b612bbb8062000d606000396000f300608060405260043610610149576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b3a623e1461014e5780630f5c06f01461015857806313f1de18146101d0578063173917b41461020e57806336df02a71461024057806339b2a2df1461027e5780634bbbe0cc146102885780634bef249e146102ea578063500424721461033c578063629323011461034657806364615cc2146103a85780636d52a55a1461040a578063818eca4a1461046c57806384ce5a5914610476578063895ae279146104ac578063c1682364146104ea578063c2e827ce1461057a578063c9970cea146105ad578063d95d366c146105b7578063dbab7660146105c1578063dfff67d9146105f7578063e28f123a14610626578063eb998e8b14610630578063f31f9a8e14610654578063f93296821461065e575b600080fd5b61015661069c565b005b34801561016457600080fd5b5061016d6109c3565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183151515158152602001826000191660001916815260200194505050505060405180910390f35b3480156101dc57600080fd5b506101e5610a0e565b604051808360001916600019168152602001821515151581526020019250505060405180910390f35b61023e60048036038101908080356000191690602001909291908035600019169060200190929190505050610a2d565b005b34801561024c57600080fd5b50610255610d27565b604051808360001916600019168152602001821515151581526020019250505060405180910390f35b610286610d46565b005b34801561029457600080fd5b5061029d610f3f565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b61033a60048036038101908080356000191690602001909291908035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f7e565b005b6103446112aa565b005b34801561035257600080fd5b5061035b61144b565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b3480156103b457600080fd5b506103bd61148a565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b34801561041657600080fd5b5061041f6114c9565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390f35b610474611508565b005b6104aa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611767565b005b3480156104b857600080fd5b506104c16119ae565b604051808360001916600019168152602001821515151581526020019250505060405180910390f35b3480156104f657600080fd5b506104ff6119cd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053f578082015181840152602081019050610524565b50505050905090810190601f16801561056c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561058657600080fd5b5061058f611a6b565b60405180826000191660001916815260200191505060405180910390f35b6105b5611b64565b005b6105bf611e25565b005b6105f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ffe565b005b34801561060357600080fd5b5061060c612201565b604051808215151515815260200191505060405180910390f35b61062e61237e565b005b61065260048036038101908080356000191690602001909291905050506125ca565b005b61065c612801565b005b34801561066a57600080fd5b50610673612a86565b604051808360001916600019168152602001821515151581526020019250505060405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff16601460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146003600081548110151561070057fe5b906000526020600020019015156107cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156107c05780601f10610795576101008083540402835291602001916107c0565b820191906000526020600020905b8154815290600101906020018083116107a357829003601f168201915b50509250505060405180910390fd5b50600e60020160009054906101000a900460ff16151561087d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001807f496d706f72746572206861732079657420746f207369676e2042696c6c206f6681526020017f2045786368616e6765000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b33600e60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600860010160006101000a81548160ff021916908315150217905550600260038154811015156108ef57fe5b906000526020600020016001908054600181600116156101000203166002900461091a929190612aa5565b507f889902d67128d56f9f13cc842956f3e3f925cc0e53d33b2c364daf8e8e7e1741600e60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860010160009054906101000a900460ff16604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a1565b600e8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020160009054906101000a900460ff16908060030154905084565b600a8060000154908060010160009054906101000a900460ff16905082565b3373ffffffffffffffffffffffffffffffffffffffff16601560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161460036000815481101515610a9157fe5b90600052602060002001901515610b60576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610b515780601f10610b2657610100808354040283529160200191610b51565b820191906000526020600020905b815481529060010190602001808311610b3457829003601f168201915b50509250505060405180910390fd5b50601260000160149054906101000a900460ff161515610be8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f416c6c20706172746965732068617665206e6f7420636f6e6669726d6564000081525060200191505060405180910390fd5b81600e60030181600019169055508060086000018160001916905550600280815481101515610c1357fe5b9060005260206000200160019080546001816001161561010002031660029004610c3e929190612aa5565b507f26a8cde80e9586f9ae56eb783b12fd188007cf6234ad5228aa3b486804c122ef600e600301546008600001546001604051808460001916600019168152602001836000191660001916815260200180602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610d135780601f10610ce857610100808354040283529160200191610d13565b820191906000526020600020905b815481529060010190602001808311610cf657829003601f168201915b505094505050505060405180910390a15050565b600c8060000154908060010160009054906101000a900460ff16905082565b3373ffffffffffffffffffffffffffffffffffffffff16601260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161460036000815481101515610daa57fe5b90600052602060002001901515610e79576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b50509250505060405180910390fd5b50600c60010160009054906101000a900460ff161515610f01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f43617272696572206861732079657420746f207369676e00000000000000000081525060200191505060405180910390fd5b60026005815481101515610f1157fe5b9060005260206000200160019080546001816001161561010002031660029004610f3c929190612aa5565b50565b60158060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b3373ffffffffffffffffffffffffffffffffffffffff16601560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161460036000815481101515610fe257fe5b906000526020600020019015156110b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156110a25780601f10611077576101008083540402835291602001916110a2565b820191906000526020600020905b81548152906001019060200180831161108557829003601f168201915b50509250505060405180910390fd5b50600e60020160009054906101000a900460ff16151561115f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001807f496d706f72746572206861732079657420746f207369676e2042696c6c206f6681526020017f2045786368616e6765000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b816006600001816000191690555082600c6000018160001916905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260048154811015156111cb57fe5b90600052602060002001600190805460018160011615610100020316600290046111f6929190612aa5565b507fadfe110c995f7f370a397c4547c1f1b999b2c66f7c14fe7706caf9457503ed1d600660000154600c600001546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405180846000191660001916815260200183600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1505050565b3373ffffffffffffffffffffffffffffffffffffffff16601560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146003600081548110151561130e57fe5b906000526020600020019015156113dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156113ce5780601f106113a3576101008083540402835291602001916113ce565b820191906000526020600020905b8154815290600101906020018083116113b157829003601f168201915b50509250505060405180910390fd5b506001601560000160146101000a81548160ff0219169083151502179055507fe093c589ca320a8724054914dc8c098250ab33d637cca639c000607b3c8422a8601560000160149054906101000a900460ff16604051808215151515815260200191505060405180910390a1565b60128060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b60138060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b60148060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b3373ffffffffffffffffffffffffffffffffffffffff16601460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146003600081548110151561156c57fe5b9060005260206000200190151561163b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382528381815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561162c5780601f106116015761010080835404028352916020019161162c565b820191906000526020600020905b81548152906001019060200180831161160f57829003601f168201915b50509250505060405180910390fd5b50601560000160149054906101000a900460ff1615156116c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4578706f72746572206861736e277420636f6e6669726d65640000000000000081525060200191505060405180910390fd5b601560000160149054906101000a900460ff16156116fa576001601460000160146101000a81548160ff0219169083151502179055505b7f5cf5ca476c058b0f041b58e7d6456c0c35875339f915d80a2376c547eea58fbc601460000160149054906101000a900460ff16601560000160149054906101000a900460ff166040518083151515158152602001821515151581526020019250505060405180910390a1565b3373ffffffffffffffffffffffffffffffffffffffff16601460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614600360008154811015156117cb57fe5b9060005260206000200190151561189a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382528381815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561188b5780601f106118605761010080835404028352916020019161188b565b820191906000526020600020905b81548152906001019060200180831161186e57829003601f168201915b50509250505060405180910390fd5b5080601560000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600e60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f6a3a2e7da448b079507bfdd70a36fa7b30bf8dc3e95a0fcadf5ec77c0f8959ec601560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60068060000154908060010160009054906101000a900460ff16905082565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a635780601f10611a3857610100808354040283529160200191611a63565b820191906000526020600020905b815481529060010190602001808311611a4657829003601f168201915b505050505081565b600060011515611a79612201565b15151460036000815481101515611a8c57fe5b90600052602060002001901515611b5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015611b4c5780601f10611b2157610100808354040283529160200191611b4c565b820191906000526020600020905b815481529060010190602001808311611b2f57829003601f168201915b50509250505060405180910390fd5b50600554905090565b3373ffffffffffffffffffffffffffffffffffffffff16601260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161460036000815481101515611bc857fe5b90600052602060002001901515611c97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015611c885780601f10611c5d57610100808354040283529160200191611c88565b820191906000526020600020905b815481529060010190602001808311611c6b57829003601f168201915b50509250505060405180910390fd5b50601360000160149054906101000a900460ff161515611d45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001807f4578706f727465722f4164766973696e6742616e6b2f49737375696e6742616e81526020017f6b206861736e277420636f6e6669726d6564000000000000000000000000000081525060400191505060405180910390fd5b601360000160149054906101000a900460ff1615611db8576001601260000160146101000a81548160ff02191690831515021790555060026001815481101515611d8b57fe5b9060005260206000200160019080546001816001161561010002031660029004611db6929190612aa5565b505b7f3e6d2247c0985618558849c7bdfa4e9806eecd2b225412b37fa110e27bcebc9f601260000160149054906101000a900460ff16601360000160149054906101000a900460ff166040518083151515158152602001821515151581526020019250505060405180910390a1565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161460036000815481101515611e8557fe5b90600052602060002001901515611f54576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015611f455780601f10611f1a57610100808354040283529160200191611f45565b820191906000526020600020905b815481529060010190602001808311611f2857829003601f168201915b50509250505060405180910390fd5b506001600c60010160006101000a81548160ff0219169083151502179055506001600660010160006101000a81548160ff0219169083151502179055507f625d101310014ff8d97a1e4a02bc4abe918bf939180255d0193eea6692ef215a600c60010160009054906101000a900460ff16600660010160009054906101000a900460ff166040518083151515158152602001821515151581526020019250505060405180910390a1565b3373ffffffffffffffffffffffffffffffffffffffff16601360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146003600081548110151561206257fe5b90600052602060002001901515612131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156121225780601f106120f757610100808354040283529160200191612122565b820191906000526020600020905b81548152906001019060200180831161210557829003601f168201915b50509250505060405180910390fd5b5080601460000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f564849c091f47c3cecb1531a877fa60dc912abb2cffc1b9cef30adaf49bdd3b8601460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000601360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806122b25750601260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061230d5750601560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806123685750601460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15612376576001905061237b565b600090505b90565b3373ffffffffffffffffffffffffffffffffffffffff16601260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614600360008154811015156123e257fe5b906000526020600020019015156124b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156124a25780601f10612477576101008083540402835291602001916124a2565b820191906000526020600020905b81548152906001019060200180831161248557829003601f168201915b50509250505060405180910390fd5b506000600102600e60030154600019161415151561255d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001807f42696c6c206f662045786368616e676520686173206e6f74206265656e20637281526020017f656174656400000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6001600e60020160006101000a81548160ff0219169083151502179055507f4e8d3ae65d2806f17ef885339bc49a7fc5616fefadd0f46ffbdbb6116ab3ba1c600e60020160009054906101000a900460ff16604051808215151515815260200191505060405180910390a1565b3373ffffffffffffffffffffffffffffffffffffffff16601260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146003600081548110151561262e57fe5b906000526020600020019015156126fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156126ee5780601f106126c3576101008083540402835291602001916126ee565b820191906000526020600020905b8154815290600101906020018083116126d157829003601f168201915b50509250505060405180910390fd5b506000601560000160146101000a81548160ff0219169083151502179055506000601460000160146101000a81548160ff0219169083151502179055506000601360000160146101000a81548160ff02191690831515021790555080600581600019169055507f2b98151fbde799597999f5b4d2dde6b675cc77c67568b23f21711207573861ef601560000160149054906101000a900460ff16601460000160149054906101000a900460ff16601360000160149054906101000a900460ff1660055460405180851515151581526020018415151515815260200183151515158152602001826000191660001916815260200194505050505060405180910390a150565b3373ffffffffffffffffffffffffffffffffffffffff16601360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146003600081548110151561286557fe5b90600052602060002001901515612934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156129255780601f106128fa57610100808354040283529160200191612925565b820191906000526020600020905b81548152906001019060200180831161290857829003601f168201915b50509250505060405180910390fd5b50601460000160149054906101000a900460ff1615156129e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001807f4578706f727465722f4164766973696e6742616e6b206861736e277420636f6e81526020017f6669726d6564000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b601460000160149054906101000a900460ff1615612a19576001601360000160146101000a81548160ff0219169083151502179055505b7fdc5bdde425f3029095639e861b095c372997e45d03b42265fcfcc59312acfa3e601360000160149054906101000a900460ff16601460000160149054906101000a900460ff166040518083151515158152602001821515151581526020019250505060405180910390a1565b60088060000154908060010160009054906101000a900460ff16905082565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612ade5780548555612b1b565b82800160010185558215612b1b57600052602060002091601f016020900482015b82811115612b1a578254825591600101919060010190612aff565b5b509050612b289190612b2c565b5090565b612b4e91905b80821115612b4a576000816000905550600101612b32565b5090565b90565b6000806000841415612b665760009150612b88565b8284029050828482811515612b7757fe5b04141515612b8457600080fd5b8091505b50929150505600a165627a7a7230582014c031c8f17e71deceb0b0648e072c4ea6a67644f805b17f406c4d64353dc1200029', 
     gas: '6000000',
     gasPrice: '20000000000'
   });

