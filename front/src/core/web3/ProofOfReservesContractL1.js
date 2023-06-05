export default {
  "contractName": "ProofOfReservesContractL1",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "_g",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "_h",
          "type": "uint256[2]"
        },
        {
          "internalType": "address",
          "name": "_proofOfReserversAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "g",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "X",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "Y",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "h",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "X",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "Y",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "uint256[3]",
          "name": "proof",
          "type": "uint256[3]"
        }
      ],
      "name": "update_total_value",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_total_value",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.2+commit.661d1103\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256[2]\",\"name\":\"_g\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[2]\",\"name\":\"_h\",\"type\":\"uint256[2]\"},{\"internalType\":\"address\",\"name\":\"_proofOfReserversAddr\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"g\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"X\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"Y\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"get_total_value\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"h\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"X\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"Y\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256[3]\",\"name\":\"proof\",\"type\":\"uint256[3]\"}],\"name\":\"update_total_value\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/PoKE.sol\":\"ProofOfReservesContractL1\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/MiMC7.sol\":{\"keccak256\":\"0x6699f15f4ecd06e19e2263c96367069906f77d78b734833cea21e0448e07ea29\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://aa4a3451df04180559d204a9669de06fd147533a27edfa2a4051539488836497\",\"dweb:/ipfs/QmZUNUrNDPATwMPW5cDQ2qh7cMVyrW5xaGedsf5Mrex2PW\"]},\"project:/contracts/PairingBn128.sol\":{\"keccak256\":\"0x0dc59306a9d02913a33f44c50674d3151ec883265b2b7e0fd942487c91ee5e22\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://66115d908c655f9919c936c3f17e96eb8cb12ddf428e54c70d9a9d18dd1d1fc3\",\"dweb:/ipfs/QmPR6pLjzJcSkqm45G18Uh2nXth1bHCRs9egY2tcP4E4HW\"]},\"project:/contracts/PoKE.sol\":{\"keccak256\":\"0xb8243fc08ac54f84ddb7799e25865b0fcaf56d450aa9e94ecfed10f93dd81699\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://4142807eb395bc5bc3f1ada6a19824fd57dafbd3c807140c49db478ce1975ca9\",\"dweb:/ipfs/Qmf8CB8wLCaztNspBkzmUAZSuXoPjXLKFLZWtiwkx9h5a3\"]},\"project:/contracts/ccGroth16VerifyBn128.sol\":{\"keccak256\":\"0x21cd03dc9ade63bf60302ae274059632874257cd70a8bd8667328743109d99bb\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://57159ea9a7e262c7043d41fdc1406f1239a56629d0c9c0e014fa55148e128f96\",\"dweb:/ipfs/QmNtLRwgA4BfX87cyyC8dqjdV2RQFaeXHAdh76ADX38XBN\"]},\"project:/contracts/proofOfReserves.sol\":{\"keccak256\":\"0xdec26a7088607f3649d3cc10fbbf29537380a04da57a0f1398d3dfaf4aab7eda\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://2ac3a6a2095dd1a9d19fcf2aeded1f1a314ff45b9c469929283c363f5987ba34\",\"dweb:/ipfs/QmRMnhJ9j5kmwknytcDEz5bJ2UNtnMEsVEJSSPhG2B2HXL\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50604051610afa380380610afa83398101604081905261002f9161014a565b6100383361007a565b82516001556020928301516002558151600355910151600455600580546001600160a01b0319166001600160a01b03909216919091179055600060065561019e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600082601f8301126100da578081fd5b604080519081016001600160401b038111828210171561010857634e487b7160e01b83526041600452602483fd5b806040525080838560408601111561011e578384fd5b835b600281101561013f578151835260209283019290910190600101610120565b509195945050505050565b600080600060a0848603121561015e578283fd5b61016885856100ca565b925061017785604086016100ca565b60808501519092506001600160a01b0381168114610193578182fd5b809150509250925092565b61094d806101ad6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639e7c84e11161005b5780639e7c84e1146100bf578063b8c9d365146100d0578063e2179b8e146100f3578063f2fde38b146101015761007d565b8063715018a6146100825780638da5cb5b1461008c57806397a53a91146100ac575b600080fd5b61008a610114565b005b6000546040516001600160a01b0390911681526020015b60405180910390f35b61008a6100ba366004610825565b610128565b6006546040519081526020016100a3565b6003546004546100de919082565b604080519283526020830191909152016100a3565b6001546002546100de919082565b61008a61010f3660046107c4565b610196565b61011c61020f565b6101266000610269565b565b61013061020f565b60008061013d84846102b9565b91509150816101835760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b210383937b7b360991b60448201526064015b60405180910390fd5b8051600755602001516008555050600655565b61019e61020f565b6001600160a01b0381166102035760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161017a565b61020c81610269565b50565b6000546001600160a01b031633146101265760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161017a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006102d8604051806040016040528060008152602001600081525090565b60006102e2610416565b604080518082019091526001548152600254602082015290915060009061031d90839061031890610313908a6104a9565b610568565b610609565b9050600060405180604001604052808760006003811061034d57634e487b7160e01b600052603260045260246000fd5b602002015181526020018760016003811061037857634e487b7160e01b600052603260045260246000fd5b602002015190526040870151600354845192935090916000916103a69161039f91906106dc565b84516106dc565b60408051808201909152600354815260045460208201529091506000906103cd90846104a9565b905060006103db86846104a9565b905060006103e98683610609565b80518451919250148015610404575080602001518360200151145b9c979b50969950505050505050505050565b604080518082019091526000808252602082015260055460408051630194684960e21b815281516001600160a01b0390931692630651a12492600480840193919291829003018186803b15801561046c57600080fd5b505afa158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a491906107f2565b905090565b60408051808201909152600080825260208201526104c5610788565b83518152602080850151908201526040808201849052600090836060848460076107d05a03f19050806105605760405162461bcd60e51b815260206004820152603d60248201527f43616c6c20746f20626e3235365363616c61724d756c206661696c656420287060448201527f726f6261626c7920616e206f7574206f6620676173206572726f723f29000000606482015260840161017a565b505092915050565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47901580156105af57506020830151155b156105cf5750506040805180820190915260008082526020820152610604565b6040518060400160405280846000015181526020018285602001516105f491906108f7565b6105fe90846108d4565b90529150505b919050565b60408051808201909152600080825260208201526106256107a6565b83518152602080850151818301528351604080840191909152908401516060830152600090836080848460066107d05a03f19050806105605760405162461bcd60e51b815260206004820152604760248201527f43616c6c20746f2074686520626e32353641646420707265636f6d70696c656460448201527f206661696c6564202870726f6261626c7920616e206f7574206f6620676173206064820152666572726f723f2960c81b608482015260a40161017a565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180838508818182098282848386858609090991507faed26d6a3f5e0ea662411ddfcde3527479de9cee7a56c656ff5f61df13a3940160005260005b605a811215610770576020600020806000528487868387080893505083838409915083838584878687090909925060010161073a565b50508184820890508184838784080895945050505050565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6000602082840312156107d5578081fd5b81356001600160a01b03811681146107eb578182fd5b9392505050565b600060408284031215610803578081fd5b61080d6040610895565b82518152602083015160208201528091505092915050565b60008060808385031215610837578081fd5b82359150602084603f85011261084b578182fd5b6108556060610895565b8082860187608088011115610868578485fd5b845b60038110156108875781358452928401929084019060010161086a565b509497909650945050505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156108cc57634e487b7160e01b600052604160045260246000fd5b604052919050565b6000828210156108f257634e487b7160e01b81526011600452602481fd5b500390565b60008261091257634e487b7160e01b81526012600452602481fd5b50069056fea26469706673582212200547e0640ce454fcfaf8988733c751d334d63cd6390233b950430142bebec2b364736f6c63430008020033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639e7c84e11161005b5780639e7c84e1146100bf578063b8c9d365146100d0578063e2179b8e146100f3578063f2fde38b146101015761007d565b8063715018a6146100825780638da5cb5b1461008c57806397a53a91146100ac575b600080fd5b61008a610114565b005b6000546040516001600160a01b0390911681526020015b60405180910390f35b61008a6100ba366004610825565b610128565b6006546040519081526020016100a3565b6003546004546100de919082565b604080519283526020830191909152016100a3565b6001546002546100de919082565b61008a61010f3660046107c4565b610196565b61011c61020f565b6101266000610269565b565b61013061020f565b60008061013d84846102b9565b91509150816101835760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b210383937b7b360991b60448201526064015b60405180910390fd5b8051600755602001516008555050600655565b61019e61020f565b6001600160a01b0381166102035760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161017a565b61020c81610269565b50565b6000546001600160a01b031633146101265760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161017a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006102d8604051806040016040528060008152602001600081525090565b60006102e2610416565b604080518082019091526001548152600254602082015290915060009061031d90839061031890610313908a6104a9565b610568565b610609565b9050600060405180604001604052808760006003811061034d57634e487b7160e01b600052603260045260246000fd5b602002015181526020018760016003811061037857634e487b7160e01b600052603260045260246000fd5b602002015190526040870151600354845192935090916000916103a69161039f91906106dc565b84516106dc565b60408051808201909152600354815260045460208201529091506000906103cd90846104a9565b905060006103db86846104a9565b905060006103e98683610609565b80518451919250148015610404575080602001518360200151145b9c979b50969950505050505050505050565b604080518082019091526000808252602082015260055460408051630194684960e21b815281516001600160a01b0390931692630651a12492600480840193919291829003018186803b15801561046c57600080fd5b505afa158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a491906107f2565b905090565b60408051808201909152600080825260208201526104c5610788565b83518152602080850151908201526040808201849052600090836060848460076107d05a03f19050806105605760405162461bcd60e51b815260206004820152603d60248201527f43616c6c20746f20626e3235365363616c61724d756c206661696c656420287060448201527f726f6261626c7920616e206f7574206f6620676173206572726f723f29000000606482015260840161017a565b505092915050565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47901580156105af57506020830151155b156105cf5750506040805180820190915260008082526020820152610604565b6040518060400160405280846000015181526020018285602001516105f491906108f7565b6105fe90846108d4565b90529150505b919050565b60408051808201909152600080825260208201526106256107a6565b83518152602080850151818301528351604080840191909152908401516060830152600090836080848460066107d05a03f19050806105605760405162461bcd60e51b815260206004820152604760248201527f43616c6c20746f2074686520626e32353641646420707265636f6d70696c656460448201527f206661696c6564202870726f6261626c7920616e206f7574206f6620676173206064820152666572726f723f2960c81b608482015260a40161017a565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180838508818182098282848386858609090991507faed26d6a3f5e0ea662411ddfcde3527479de9cee7a56c656ff5f61df13a3940160005260005b605a811215610770576020600020806000528487868387080893505083838409915083838584878687090909925060010161073a565b50508184820890508184838784080895945050505050565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6000602082840312156107d5578081fd5b81356001600160a01b03811681146107eb578182fd5b9392505050565b600060408284031215610803578081fd5b61080d6040610895565b82518152602083015160208201528091505092915050565b60008060808385031215610837578081fd5b82359150602084603f85011261084b578182fd5b6108556060610895565b8082860187608088011115610868578485fd5b845b60038110156108875781358452928401929084019060010161086a565b509497909650945050505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156108cc57634e487b7160e01b600052604160045260246000fd5b604052919050565b6000828210156108f257634e487b7160e01b81526011600452602481fd5b500390565b60008261091257634e487b7160e01b81526012600452602481fd5b50069056fea26469706673582212200547e0640ce454fcfaf8988733c751d334d63cd6390233b950430142bebec2b364736f6c63430008020033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1390:17",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:17",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "85:740:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "134:24:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "143:5:17"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "150:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "136:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "136:20:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "136:20:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "113:6:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "121:4:17",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "109:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "109:17:17"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "128:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "105:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "105:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "98:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "98:35:17"
                  },
                  "nodeType": "YulIf",
                  "src": "95:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "167:23:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "187:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "181:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "181:9:17"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "171:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "199:33:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "221:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "229:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "217:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "217:15:17"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "203:10:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "315:119:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "336:5:17"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "347:3:17",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "352:10:17",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "343:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "343:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "329:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "329:35:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "329:35:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "384:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "387:4:17",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "377:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "377:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "377:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "412:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "419:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "405:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "405:19:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "405:19:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "250:10:17"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "270:2:17",
                                    "type": "",
                                    "value": "64"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "274:1:17",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "266:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "266:10:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "278:1:17",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "262:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "262:18:17"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "247:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "247:34:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "286:10:17"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "298:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "283:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "283:22:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "244:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "244:62:17"
                  },
                  "nodeType": "YulIf",
                  "src": "241:2:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "450:2:17",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "454:10:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "443:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "443:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "443:22:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "474:17:17",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "485:6:17"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "478:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "500:17:17",
                  "value": {
                    "name": "offset",
                    "nodeType": "YulIdentifier",
                    "src": "511:6:17"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "504:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "554:24:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "563:5:17"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "570:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "556:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "556:20:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "556:20:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "536:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "544:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "532:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "532:15:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "549:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "529:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "529:24:17"
                  },
                  "nodeType": "YulIf",
                  "src": "526:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "587:14:17",
                  "value": {
                    "name": "array",
                    "nodeType": "YulIdentifier",
                    "src": "596:5:17"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "591:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "657:138:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "678:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "689:3:17"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "683:5:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "683:10:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "671:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "671:23:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "671:23:17"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "707:14:17",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "717:4:17",
                          "type": "",
                          "value": "0x20"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "711:2:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "734:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "745:3:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "750:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "741:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "741:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "734:3:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "766:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "777:3:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "782:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "773:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "773:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "766:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "621:1:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "624:4:17",
                        "type": "",
                        "value": "0x02"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "618:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "618:11:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "630:18:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "632:14:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "641:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "644:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "637:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "637:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "632:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "614:3:17",
                    "statements": []
                  },
                  "src": "610:185:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "804:15:17",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "813:6:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "804:5:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_array_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "59:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "67:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "75:5:17",
                "type": ""
              }
            ],
            "src": "14:811:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "991:397:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1038:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1047:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1055:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1040:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1040:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1040:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1012:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1021:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1008:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1008:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1033:3:17",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1004:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1004:33:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1001:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1073:65:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1119:9:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1130:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "1083:35:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1083:55:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1073:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1147:74:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1197:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1208:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1193:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1193:18:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1213:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "1157:35:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1157:64:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1147:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1230:39:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1253:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1264:3:17",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1249:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1249:19:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1243:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1243:26:17"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1234:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1332:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "1341:6:17"
                            },
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "1349:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1334:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1334:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1334:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1291:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1302:5:17"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1317:3:17",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1322:1:17",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1313:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1313:11:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1326:1:17",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "1309:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1309:19:17"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1298:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1298:31:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1288:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1288:42:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1281:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1281:50:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1278:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1367:15:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1377:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1367:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_array$_t_uint256_$2_memory_ptrt_array$_t_uint256_$2_memory_ptrt_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "941:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "952:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "964:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "972:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "980:6:17",
                "type": ""
              }
            ],
            "src": "830:558:17"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_array_uint256_fromMemory(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(array, array) }\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, 64)\n        if or(gt(newFreePtr, sub(shl(64, 1), 1)), lt(newFreePtr, memPtr))\n        {\n            mstore(array, shl(224, 0x4e487b71))\n            mstore(4, 0x41)\n            revert(array, 0x24)\n        }\n        mstore(64, newFreePtr)\n        let dst := memPtr\n        let src := offset\n        if gt(add(offset, 64), end) { revert(array, array) }\n        let i := array\n        for { } lt(i, 0x02) { i := add(i, 1) }\n        {\n            mstore(dst, mload(src))\n            let _1 := 0x20\n            dst := add(dst, _1)\n            src := add(src, _1)\n        }\n        array := memPtr\n    }\n    function abi_decode_tuple_t_array$_t_uint256_$2_memory_ptrt_array$_t_uint256_$2_memory_ptrt_address_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(value0, value0) }\n        value0 := abi_decode_array_uint256_fromMemory(headStart, dataEnd)\n        value1 := abi_decode_array_uint256_fromMemory(add(headStart, 64), dataEnd)\n        let value := mload(add(headStart, 128))\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(value2, value2) }\n        value2 := value\n    }\n}",
      "id": 17,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:4891:17",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:17",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "84:236:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "130:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "139:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "147:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "132:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "132:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "132:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "105:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "114:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "101:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "101:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "126:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "97:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "97:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "94:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "165:36:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "191:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "178:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "178:23:17"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "169:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "264:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "273:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "281:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "266:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "266:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "266:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "223:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "234:5:17"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "249:3:17",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "254:1:17",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "245:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "245:11:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "258:1:17",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "241:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "241:19:17"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "230:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "230:31:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "220:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "220:42:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "213:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "213:50:17"
                  },
                  "nodeType": "YulIf",
                  "src": "210:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "299:15:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "309:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "299:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "50:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "61:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "73:6:17",
                "type": ""
              }
            ],
            "src": "14:306:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "430:241:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "476:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "485:6:17"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "493:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "478:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "478:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "478:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "451:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "460:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "447:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "447:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "472:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "443:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "443:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "440:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "511:32:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "540:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "524:15:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "524:19:17"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "515:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "559:5:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "572:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "566:5:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "566:16:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "552:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "552:31:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "552:31:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "603:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "610:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "599:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "599:14:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "625:9:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "636:2:17",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "621:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "621:18:17"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "615:5:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "615:25:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "592:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "592:49:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "592:49:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "650:15:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "660:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "650:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_struct$_G1Point_$157_memory_ptr_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "396:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "407:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "419:6:17",
                "type": ""
              }
            ],
            "src": "325:346:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "786:616:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "833:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "842:6:17"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "850:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "835:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "835:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "835:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "807:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "816:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "803:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "803:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "828:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "799:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "799:33:17"
                  },
                  "nodeType": "YulIf",
                  "src": "796:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "868:33:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "891:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "878:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "878:23:17"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "868:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "910:12:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "920:2:17",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "914:2:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "975:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "984:6:17"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "992:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "977:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "977:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "977:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "949:9:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "960:2:17",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "945:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "945:18:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "965:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "941:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "941:32:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "934:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "934:40:17"
                  },
                  "nodeType": "YulIf",
                  "src": "931:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1010:30:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1037:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "1021:15:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1021:19:17"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "1014:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1049:16:17",
                  "value": {
                    "name": "dst",
                    "nodeType": "YulIdentifier",
                    "src": "1062:3:17"
                  },
                  "variables": [
                    {
                      "name": "dst_1",
                      "nodeType": "YulTypedName",
                      "src": "1053:5:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1074:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1089:9:17"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "1100:2:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1085:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1085:18:17"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "1078:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1148:26:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1157:6:17"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1165:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1150:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1150:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1150:22:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1122:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1133:3:17",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1118:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1118:19:17"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1139:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1115:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1115:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1112:2:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1183:15:17",
                  "value": {
                    "name": "value1",
                    "nodeType": "YulIdentifier",
                    "src": "1192:6:17"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1187:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1254:118:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1275:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "1293:3:17"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "1280:12:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1280:17:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1268:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1268:30:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1268:30:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1311:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1322:3:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1327:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1318:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1318:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1311:3:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1343:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "1354:3:17"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1359:2:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1350:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1350:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "1343:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1218:1:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1221:4:17",
                        "type": "",
                        "value": "0x03"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1215:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1215:11:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1227:18:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1229:14:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1238:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1241:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1234:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1234:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1229:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1211:3:17",
                    "statements": []
                  },
                  "src": "1207:165:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1381:15:17",
                  "value": {
                    "name": "dst_1",
                    "nodeType": "YulIdentifier",
                    "src": "1391:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1381:6:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_array$_t_uint256_$3_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "744:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "755:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "767:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "775:6:17",
                "type": ""
              }
            ],
            "src": "676:726:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1508:102:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1518:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1530:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1541:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1526:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1526:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1518:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1560:9:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1575:6:17"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1591:3:17",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1596:1:17",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "1587:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1587:11:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1600:1:17",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1583:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1583:19:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1571:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1571:32:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1553:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1553:51:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1553:51:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1477:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1488:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1499:4:17",
                "type": ""
              }
            ],
            "src": "1407:203:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1789:228:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1806:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1817:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1799:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1799:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1799:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1840:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1851:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1836:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1836:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1856:2:17",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1829:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1829:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1829:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1879:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1890:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1875:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1875:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1895:34:17",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1868:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1868:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1868:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1950:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1961:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1946:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1946:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1966:8:17",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1939:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1939:36:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1939:36:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1984:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1996:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2007:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1992:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1992:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1984:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1766:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1780:4:17",
                "type": ""
              }
            ],
            "src": "1615:402:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2196:301:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2213:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2224:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2206:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2206:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2206:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2247:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2258:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2243:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2243:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2263:2:17",
                        "type": "",
                        "value": "71"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2236:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2236:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2236:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2286:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2297:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2282:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2282:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2302:34:17",
                        "type": "",
                        "value": "Call to the bn256Add precompiled"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2275:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2275:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2275:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2357:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2368:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2353:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2353:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2373:34:17",
                        "type": "",
                        "value": " failed (probably an out of gas "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2346:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2346:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2346:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2428:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2439:3:17",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2424:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2424:19:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2445:9:17",
                        "type": "",
                        "value": "error?)"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2417:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2417:38:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2417:38:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2464:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2476:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2487:3:17",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2472:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2472:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2464:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_246b0a2b4e8832f8a3b0e2d4abead752b5216f08dd060d2e569c9f901f217cc9__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2173:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2187:4:17",
                "type": ""
              }
            ],
            "src": "2022:475:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2676:182:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2693:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2704:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2686:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2686:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2686:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2727:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2738:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2723:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2723:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2743:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2716:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2716:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2716:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2766:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2777:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2762:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2762:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2782:34:17",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2755:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2755:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2755:62:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2826:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2838:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2849:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2834:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2834:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2826:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2653:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2667:4:17",
                "type": ""
              }
            ],
            "src": "2502:356:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3037:163:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3054:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3065:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3047:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3047:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3047:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3088:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3099:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3084:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3084:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3104:2:17",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3077:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3077:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3077:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3127:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3138:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3123:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3123:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3143:15:17",
                        "type": "",
                        "value": "invalid proof"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3116:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3116:43:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3116:43:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3168:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3180:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3191:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3176:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3176:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3168:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_cfa179d50ad7851ac140a84fb212f48699dbd00170b3afe087b0d09f632d1624__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3014:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3028:4:17",
                "type": ""
              }
            ],
            "src": "2863:337:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3379:251:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3396:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3407:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3389:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3389:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3389:21:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3430:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3441:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3426:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3426:18:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3446:2:17",
                        "type": "",
                        "value": "61"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3419:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3419:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3419:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3469:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3480:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3465:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3465:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3485:34:17",
                        "type": "",
                        "value": "Call to bn256ScalarMul failed (p"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3458:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3458:62:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3458:62:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3540:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3551:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3536:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3536:18:17"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3556:31:17",
                        "type": "",
                        "value": "robably an out of gas error?)"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3529:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3529:59:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3529:59:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3597:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3609:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3620:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3605:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3605:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3597:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_d641e52d8aead8c757613ac0f67dd31c362cb6c67d1a7b3a53f59e96d32f80a0__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3356:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3370:4:17",
                "type": ""
              }
            ],
            "src": "3205:425:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3736:76:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3746:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3758:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3769:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3754:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3754:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3746:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3788:9:17"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3799:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3781:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3781:25:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3781:25:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3705:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3716:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3727:4:17",
                "type": ""
              }
            ],
            "src": "3635:177:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3946:119:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3956:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3968:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3979:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3964:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3964:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3956:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3998:9:17"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4009:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3991:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3991:25:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3991:25:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4036:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4047:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4032:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4032:18:17"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "4052:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4025:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4025:34:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4025:34:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3907:9:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3918:6:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3926:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3937:4:17",
                "type": ""
              }
            ],
            "src": "3817:248:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4115:327:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4125:19:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4141:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4135:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4135:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "4125:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4153:58:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "4175:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nodeType": "YulIdentifier",
                                "src": "4191:4:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4197:2:17",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4187:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4187:13:17"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4206:2:17",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "4202:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4202:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4183:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4183:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4171:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4171:40:17"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "4157:10:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4294:111:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4315:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4322:3:17",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4327:10:17",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4318:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4318:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4308:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4308:31:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4308:31:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4359:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4362:4:17",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4352:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4352:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4352:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4387:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4390:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4380:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4380:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4380:15:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "4229:10:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4241:18:17",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "4226:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4226:34:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "4265:10:17"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "4277:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "4262:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4262:22:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "4223:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4223:62:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4220:2:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4421:2:17",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "4425:10:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4414:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4414:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4414:22:17"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "4095:4:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "4104:6:17",
                "type": ""
              }
            ],
            "src": "4070:372:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4496:179:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4526:117:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "diff",
                              "nodeType": "YulIdentifier",
                              "src": "4547:4:17"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4557:3:17",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4562:10:17",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4553:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4553:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4540:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4540:34:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4540:34:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4594:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4597:4:17",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4587:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4587:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4587:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "diff",
                              "nodeType": "YulIdentifier",
                              "src": "4622:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4628:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4615:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4615:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4615:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4512:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4515:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "4509:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4509:8:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4506:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4652:17:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4664:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4667:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "4660:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4660:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "4652:4:17"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "4478:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "4481:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "4487:4:17",
                "type": ""
              }
            ],
            "src": "4447:228:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4718:171:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4749:111:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "r",
                              "nodeType": "YulIdentifier",
                              "src": "4770:1:17"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4777:3:17",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4782:10:17",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4773:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4773:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4763:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4763:31:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4763:31:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4814:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4817:4:17",
                              "type": "",
                              "value": "0x12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4807:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4807:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4807:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "r",
                              "nodeType": "YulIdentifier",
                              "src": "4842:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4845:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4835:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4835:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4835:15:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4738:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4731:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4731:9:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4728:2:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4869:14:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4878:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4881:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "4874:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4874:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "4869:1:17"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "4703:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "4706:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "4712:1:17",
                "type": ""
              }
            ],
            "src": "4680:209:17"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(value0, value0) }\n        value0 := value\n    }\n    function abi_decode_tuple_t_struct$_G1Point_$157_memory_ptr_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value0, value0) }\n        let value := allocate_memory(64)\n        mstore(value, mload(headStart))\n        mstore(add(value, 32), mload(add(headStart, 32)))\n        value0 := value\n    }\n    function abi_decode_tuple_t_uint256t_array$_t_uint256_$3_memory_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(value1, value1) }\n        value0 := calldataload(headStart)\n        let _1 := 32\n        if iszero(slt(add(headStart, 63), dataEnd)) { revert(value1, value1) }\n        let dst := allocate_memory(96)\n        let dst_1 := dst\n        let src := add(headStart, _1)\n        if gt(add(headStart, 128), dataEnd) { revert(value1, value1) }\n        let i := value1\n        for { } lt(i, 0x03) { i := add(i, 1) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _1)\n            src := add(src, _1)\n        }\n        value1 := dst_1\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_246b0a2b4e8832f8a3b0e2d4abead752b5216f08dd060d2e569c9f901f217cc9__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 71)\n        mstore(add(headStart, 64), \"Call to the bn256Add precompiled\")\n        mstore(add(headStart, 96), \" failed (probably an out of gas \")\n        mstore(add(headStart, 128), \"error?)\")\n        tail := add(headStart, 160)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_cfa179d50ad7851ac140a84fb212f48699dbd00170b3afe087b0d09f632d1624__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"invalid proof\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_d641e52d8aead8c757613ac0f67dd31c362cb6c67d1a7b3a53f59e96d32f80a0__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 61)\n        mstore(add(headStart, 64), \"Call to bn256ScalarMul failed (p\")\n        mstore(add(headStart, 96), \"robably an out of gas error?)\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x41)\n            revert(0, 0x24)\n        }\n        mstore(64, newFreePtr)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y)\n        {\n            mstore(diff, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(diff, 0x24)\n        }\n        diff := sub(x, y)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(r, shl(224, 0x4e487b71))\n            mstore(4, 0x12)\n            revert(r, 0x24)\n        }\n        r := mod(x, y)\n    }\n}",
      "id": 17,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "236:4859:4:-:0;;;599:287;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:0;719:10:1;936:18:0;:32::i;:::-;732:5:4;;726:1;:11;732:5;753;;;;747:3;:11;774:5;;768:1;:11;795:5;;;789:3;:11;811:20;:44;;-1:-1:-1;;;;;;811:44:4;-1:-1:-1;;;;;811:44:4;;;;;;;;;-1:-1:-1;865:10:4;:14;236:4859;;2426:187:0;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:0;;;-1:-1:-1;;;;;;2534:17:0;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2426:187;;:::o;14:811:17:-;;128:3;121:4;113:6;109:17;105:27;95:2;;150:5;143;136:20;95:2;187;181:9;;;217:15;;-1:-1:-1;;;;;247:34:17;;283:22;;;244:62;241:2;;;-1:-1:-1;;;329:35:17;;387:4;384:1;377:15;419:4;336:5;405:19;241:2;454:10;450:2;443:22;;485:6;511;549:3;544:2;536:6;532:15;529:24;526:2;;;570:5;563;556:20;526:2;596:5;610:185;624:4;621:1;618:11;610:185;;;683:10;;671:23;;717:4;741:12;;;;773;;;;644:1;637:9;610:185;;;-1:-1:-1;813:6:17;;85:740;-1:-1:-1;;;;;85:740:17:o;830:558::-;;;;1033:3;1021:9;1012:7;1008:23;1004:33;1001:2;;;1055:6;1047;1040:22;1001:2;1083:55;1130:7;1119:9;1083:55;:::i;:::-;1073:65;;1157:64;1213:7;1208:2;1197:9;1193:18;1157:64;:::i;:::-;1264:3;1249:19;;1243:26;1147:74;;-1:-1:-1;;;;;;1298:31:17;;1288:42;;1278:2;;1349:6;1341;1334:22;1278:2;1377:5;1367:15;;;991:397;;;;;:::o;:::-;236:4859:4;;;;;;",
  "deployedSourceMap": "236:4859:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1824:101:0;;;:::i;:::-;;1201:85;1247:7;1273:6;1201:85;;-1:-1:-1;;;;;1273:6:0;;;1553:51:17;;1541:2;1526:18;1201:85:0;;;;;;;;892:371:4;;;;;;:::i;:::-;;:::i;2527:104::-;2614:10;;2527:104;;3781:25:17;;;3769:2;3754:18;2527:104:4;3736:76:17;389:24:4;;;;;;;;;;;;;;3991:25:17;;;4047:2;4032:18;;4025:34;;;;3964:18;389:24:4;3946:119:17;359:24:4;;;;;;;;;;2074:198:0;;;;;;:::i;:::-;;:::i;1824:101::-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;892:371:4:-;1094:13:0;:11;:13::i;:::-;1037:11:4::1;1050:39:::0;1093:40:::1;1120:5;1127;1093:26;:40::i;:::-;1036:97;;;;1151:6;1143:32;;;::::0;-1:-1:-1;;;1143:32:4;;3065:2:17;1143:32:4::1;::::0;::::1;3047:21:17::0;3104:2;3084:18;;;3077:30;-1:-1:-1;;;3123:18:17;;;3116:43;3176:18;;1143:32:4::1;;;;;;;;;1194:34:::0;;:15:::1;:34:::0;::::1;;::::0;;;-1:-1:-1;;1238:10:4::1;:18:::0;892:371::o;2074:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:0;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:0;;1817:2:17;2154:73:0::1;::::0;::::1;1799:21:17::0;1856:2;1836:18;;;1829:30;1895:34;1875:18;;;1868:62;-1:-1:-1;;;1946:18:17;;;1939:36;1992:19;;2154:73:0::1;1789:228:17::0;2154:73:0::1;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;1359:130::-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:1;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;2704:2:17;1414:68:0;;;2686:21:17;;;2723:18;;;2716:30;2782:34;2762:18;;;2755:62;2834:18;;1414:68:0;2676:182:17;2426:187:0;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:0;;;-1:-1:-1;;;;;;2534:17:0;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2426:187;;:::o;1455:872:4:-;1575:4;1581:22;-1:-1:-1;;;;;;;;;;;;;;;;;;;1581:22:4;1652:25;1680:24;:22;:24::i;:::-;1773:21;;;;;;;;;1785:1;1773:21;;;;;;;;;1652:52;;-1:-1:-1;1714:24:4;;1742:54;;1652:52;;1758:37;;1773:21;;1788:5;1773:11;:21::i;:::-;1758:14;:37::i;:::-;1742:11;:54::i;:::-;1714:82;;1807:24;1834:37;;;;;;;;1850:6;1857:1;1850:9;;;;;-1:-1:-1;;;1850:9:4;;;;;;;;;;;;;1834:37;;;;1861:6;1868:1;1861:9;;;;;-1:-1:-1;;;1861:9:4;;;;;;;;;;;;;1834:37;;1893:9;;;;2025:1;:3;2039;;1807:64;;-1:-1:-1;1893:9:4;;1881;;1972:111;;2005:39;;2025:3;2005:11;:39::i;:::-;2069:3;;1972:11;:111::i;:::-;2122:17;;;;;;;;;2134:1;2122:17;;;;;;;;;1954:129;;-1:-1:-1;2094:25:4;;2122:17;;2137:1;2122:11;:17::i;:::-;2094:45;-1:-1:-1;2149:25:4;2177:32;2189:1;2200:7;2177:11;:32::i;:::-;2149:60;;2219:26;2248:18;2260:1;2263:2;2248:11;:18::i;:::-;2293:5;;2285:4;;2219:47;;-1:-1:-1;2285:13:4;:30;;;;;2310:3;:5;;;2302:2;:4;;;:13;2285:30;2277:43;2317:2;;-1:-1:-1;1455:872:4;;-1:-1:-1;;;;;;;;;;1455:872:4:o;2333:188::-;-1:-1:-1;;;;;;;;;;;;;;;;;2468:20:4;;2442:72;;;-1:-1:-1;;;2442:72:4;;;;-1:-1:-1;;;;;2468:20:4;;;;2442:70;;:72;;;;;;;;;;;;;2468:20;2442:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2435:79;;2333:188;:::o;2869:614:3:-;-1:-1:-1;;;;;;;;;;;;;;;;;2977:23:3;;:::i;:::-;3021:3;;3010:14;;:8;3045:3;;;;3034:8;;;:14;3058:8;;;;:12;;;-1:-1:-1;;3228:1:3;3222:4;3010:14;-1:-1:-1;3209:1:3;3202:4;3195:5;3191:16;3186:50;3175:61;;3382:7;3360:116;;;;-1:-1:-1;;;3360:116:3;;3407:2:17;3360:116:3;;;3389:21:17;3446:2;3426:18;;;3419:30;3485:34;3465:18;;;3458:62;3556:31;3536:18;;;3529:59;3605:19;;3360:116:3;3379:251:17;3360:116:3;2869:614;;;;;;:::o;1627:380::-;-1:-1:-1;;;;;;;;;;;;;;;;;1902:3:3;;1811:77;;1902:8;:20;;;;-1:-1:-1;1914:3:3;;;;:8;1902:20;1898:58;;;-1:-1:-1;;1943:13:3;;;;;;;;;-1:-1:-1;1943:13:3;;;;;;;1936:20;;1898:58;1973:27;;;;;;;;1981:1;:3;;;1973:27;;;;1997:1;1991;:3;;;:7;;;;:::i;:::-;1986:13;;:1;:13;:::i;:::-;1973:27;;1966:34;-1:-1:-1;;1627:380:3;;;;:::o;2055:682::-;-1:-1:-1;;;;;;;;;;;;;;;;;2172:23:3;;:::i;:::-;2216:4;;2205:15;;:8;2241:4;;;;2230:8;;;:15;2266:4;;2255:8;;;;:15;;;;2291:4;;;;2280:8;;;:15;-1:-1:-1;;2458:1:3;2452:4;2205:15;-1:-1:-1;2439:1:3;2432:4;2425:5;2421:16;2416:50;2405:61;;2611:7;2590:140;;;;-1:-1:-1;;;2590:140:3;;2224:2:17;2590:140:3;;;2206:21:17;2263:2;2243:18;;;2236:30;2302:34;2282:18;;;2275:62;2373:34;2353:18;;;2346:62;-1:-1:-1;;;2424:19:17;;;2417:38;2472:19;;2590:140:3;2196:301:17;681:1890:2;741:11;1175:77;1354:1;1351;1348;1341:15;1392:1;1389;1386;1379:15;1456:1;1453;1449;1445:2;1441:1;1437:2;1433;1426:17;1419:32;1412:46;1407:51;;1657:66;1652:3;1645:79;1752:1;1738:533;1762:2;1759:1;1755:10;1738:533;;;1968:2;1963:3;1953:18;2000:13;1995:3;1988:26;2148:1;2145;2141;2126:13;2123:1;2116:27;2109:41;2104:46;;;2186:1;2183;2180;2173:15;2167:21;;2255:1;2252;2248;2244:2;2240:1;2236:2;2232;2225:17;2218:32;2211:46;2205:52;-1:-1:-1;1778:1:2;1772:8;1738:533;;;1742:12;;2379:1;2376;2373;2366:15;2361:20;;2553:1;2550;2546;2543;2540;2533:15;2526:29;2519:36;1094:1471;-1:-1:-1;;;;;1094:1471:2:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:306:17:-;;126:2;114:9;105:7;101:23;97:32;94:2;;;147:6;139;132:22;94:2;178:23;;-1:-1:-1;;;;;230:31:17;;220:42;;210:2;;281:6;273;266:22;210:2;309:5;84:236;-1:-1:-1;;;84:236:17:o;325:346::-;;472:2;460:9;451:7;447:23;443:32;440:2;;;493:6;485;478:22;440:2;524:19;540:2;524:19;:::i;:::-;572:9;566:16;559:5;552:31;636:2;625:9;621:18;615:25;610:2;603:5;599:14;592:49;660:5;650:15;;;430:241;;;;:::o;676:726::-;;;828:3;816:9;807:7;803:23;799:33;796:2;;;850:6;842;835:22;796:2;891:9;878:23;868:33;;920:2;965:7;960:2;949:9;945:18;941:32;931:2;;992:6;984;977:22;931:2;1021:19;1037:2;1021:19;:::i;:::-;1062:3;1100:2;1089:9;1085:18;1139:7;1133:3;1122:9;1118:19;1115:32;1112:2;;;1165:6;1157;1150:22;1112:2;1192:6;1207:165;1221:4;1218:1;1215:11;1207:165;;;1280:17;;1268:30;;1318:12;;;;1350;;;;1241:1;1234:9;1207:165;;;-1:-1:-1;786:616:17;;1391:5;;-1:-1:-1;786:616:17;-1:-1:-1;;;;;786:616:17:o;4070:372::-;4141:2;4135:9;4206:2;4187:13;;-1:-1:-1;;4183:27:17;4171:40;;4241:18;4226:34;;4262:22;;;4223:62;4220:2;;;4327:10;4322:3;4318:20;4315:1;4308:31;4362:4;4359:1;4352:15;4390:4;4387:1;4380:15;4220:2;4421;4414:22;4115:327;;-1:-1:-1;4115:327:17:o;4447:228::-;;4515:1;4512;4509:8;4506:2;;;-1:-1:-1;;;4540:34:17;;4597:4;4594:1;4587:15;4628:4;4547;4615:18;4506:2;-1:-1:-1;4660:9:17;;4496:179::o;4680:209::-;;4738:1;4728:2;;-1:-1:-1;;;4763:31:17;;4817:4;4814:1;4807:15;4845:4;4770:1;4835:15;4728:2;-1:-1:-1;4874:9:17;;4718:171::o",
  "source": "// SPDX-License-Identifier: LGPL-3.0+\npragma solidity >=0.8.0;\n\nimport \"./MiMC7.sol\";\nimport \"./PairingBn128.sol\";\nimport \"./proofOfReserves.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\n\n/*\n    we use ALT_BN128 curve\n */\ncontract ProofOfReservesContractL1 is Ownable {\n\n    // public parameter of Pedersen Commitment \n    // cm = g^v * h^r\n    Pairing.G1Point public g;\n    Pairing.G1Point public h;\n\n    // L2 contract address\n    address proofOfReserversAddr; \n\n    // total CEX balance\n    uint256 totalValue;\n\n    // total CEX commitment\n    Pairing.G1Point totalCommitment;\n\n    constructor(\n        uint256[2] memory _g,\n        uint256[2] memory _h,\n        address _proofOfReserversAddr\n    ) {\n        g.X = _g[0];\n        g.Y = _g[1];\n        h.X = _h[0];\n        h.Y = _h[1];\n\n        proofOfReserversAddr = _proofOfReserversAddr;\n        totalValue = 0;\n    }\n\n    function update_total_value(\n        uint256 value,\n        uint256[3] memory proof\n    )  \n        public  \n        onlyOwner\n    {   \n        (bool result, Pairing.G1Point memory _totalCommitment) = PoKE_sigma_protocol_verify(value, proof);\n        require(result, \"invalid proof\");\n        \n        totalCommitment = _totalCommitment;\n        totalValue = value;\n    }\n\n    // Proof :\n    //    Proof[0] : t.x\n    //    Proof[1] : t.y where t = h^r'\n    //    Proof[2] : s   where s = r' + cr\n    //    h^s == t * y^c\n    //    h^(r'+ cr) == h^r' * h^(cr)\n    function PoKE_sigma_protocol_verify (\n        uint256    value,\n        uint256[3] memory _proof\n    ) private returns (bool, Pairing.G1Point memory) {\n        \n        // y = cm/g^v = h^r\n        Pairing.G1Point memory cm = get_sum_of_commitments();\n        Pairing.G1Point memory y =  Pairing.add(cm, Pairing.negate(Pairing.mul(g, value)));\n\n        Pairing.G1Point memory t = Pairing.G1Point(_proof[0], _proof[1]);\n        uint256 s = _proof[2];\n\n        // c = Hash( h.X || y.X || t.X )\n        bytes32 c_bytes = MiMC7._hash(\n            bytes32(MiMC7._hash(bytes32(h.X), bytes32(y.X))),  \n            bytes32(t.X)\n        );\n\n        Pairing.G1Point memory hs = Pairing.mul(h, s);\n        Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));\n        Pairing.G1Point memory tyc = Pairing.add(t, yc);\n\n        return (hs.X == tyc.X && hs.Y == tyc.Y, cm);\n    }\n\n    function get_sum_of_commitments() \n        private view returns(Pairing.G1Point memory)\n    {\n        return ProofOfReservesContractL2(proofOfReserversAddr).get_sum_of_commitments();\n    }\n\n    function get_total_value()\n        public view returns (uint256) \n    {\n        return totalValue;\n    }\n\n\n    // ========= to Debug =========\n\n    // // y = h^r\n    // function calc_y(\n    //     uint256 value\n    // )\n    //     public\n    //     payable\n    //     returns (Pairing.G1Point memory)\n    // {\n    //     Pairing.G1Point memory cm = get_sum_of_commitments();\n    //     Pairing.G1Point memory y =  Pairing.add(cm, Pairing.negate(Pairing.mul(g, value)));\n    //     return y;\n    // }\n\n    // // c = Hash( h.x || y.x || t.x )\n    // function clac_c(\n    //     uint256 value,\n    //     uint256[2] memory t\n    // )\n    //     public\n    //     payable \n    //     returns (uint256[2] memory)\n    // {\n    //     uint256[2] memory ret;\n    //     Pairing.G1Point memory y = calc_y(value);\n\n    //     ret[0] = uint256(MiMC7._hash(bytes32(h.X), bytes32(y.X)));\n    //     ret[1] = uint256(MiMC7._hash(\n    //         bytes32(ret[0]),  \n    //         bytes32(t[0])\n    //     ));\n    //     return ret;\n    // }\n\n    // function calc_hs(\n    //     uint256 value,\n    //     uint256[3] memory proof\n    // )\n    //     public \n    //     payable \n    //     returns (Pairing.G1Point memory)\n    // {   \n\n    //     Pairing.G1Point memory hs = Pairing.mul(h, proof[2]);\n    //     return hs;\n    // }\n\n    // function calc_yc(\n    //     uint256 value,\n    //     uint256[3] memory proof\n    // )\n    //     public \n    //     payable \n    //     returns (Pairing.G1Point memory, bytes32)\n    // {   \n    //     Pairing.G1Point memory y = calc_y(value);\n    //     Pairing.G1Point memory t = Pairing.G1Point(proof[0], proof[1]);\n\n    //     bytes32 c_bytes = MiMC7._hash(\n    //         bytes32(MiMC7._hash(bytes32(h.X), bytes32(y.X))),  \n    //         bytes32(t.X)\n    //     );\n\n    //     Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));\n    //     return (yc, c_bytes);\n    // }\n\n    // function calc_tyc(\n    //     uint256 value,\n    //     uint256[3] memory proof\n    // )\n    //     public \n    //     payable \n    //     returns (Pairing.G1Point memory, bytes32)\n    // {   \n    //     Pairing.G1Point memory y = calc_y(value);\n    //     Pairing.G1Point memory t = Pairing.G1Point(proof[0], proof[1]);\n\n    //     bytes32 c_bytes = MiMC7._hash(\n    //         bytes32(MiMC7._hash(bytes32(h.X), bytes32(y.X))),  \n    //         bytes32(t.X)\n    //     );\n\n    //     Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));\n    //     Pairing.G1Point memory tyc= Pairing.add(t, yc);\n    //     return (tyc, c_bytes);\n    // }\n}\n\n/*\ng,h\n[\n    3180562012416913690925935386190007036479226111083987956960601792026358686114,\n    17519154828104037515817392931973887796962669181002901086993947786934567488870\n]\n[ \n    4048032311302464926298094030158754074633619725258845665812735681205540954289,\n    757310962534471265451611502350520868277877209646502467151549808202870646207\n]\n\nsigma PROOF\n[\n    239314435508027700476173748584025363358233456528297948113586176334700373411,\n    4938961443782603145429073850479257948842394679856911215618086793243139919601,\n    4194976159525599510130147974991281495984698748557958470180572732615368495519\n]\n*/",
  "sourcePath": "/Users/kim/Proof-of-Reserves/contract/contracts/PoKE.sol",
  "ast": {
    "absolutePath": "project:/contracts/PoKE.sol",
    "exportedSymbols": {
      "Context": [
        134
      ],
      "MiMC7": [
        149
      ],
      "Ownable": [
        112
      ],
      "Pairing": [
        763
      ],
      "ProofOfReservesContractL1": [
        1034
      ],
      "ProofOfReservesContractL2": [
        1371
      ],
      "ccGroth16BN128": [
        1117
      ]
    },
    "id": 1035,
    "license": "LGPL-3.0+",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 765,
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "38:24:4"
      },
      {
        "absolutePath": "project:/contracts/MiMC7.sol",
        "file": "./MiMC7.sol",
        "id": 766,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1035,
        "sourceUnit": 150,
        "src": "64:21:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/PairingBn128.sol",
        "file": "./PairingBn128.sol",
        "id": 767,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1035,
        "sourceUnit": 764,
        "src": "86:28:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/proofOfReserves.sol",
        "file": "./proofOfReserves.sol",
        "id": 768,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1035,
        "sourceUnit": 1372,
        "src": "115:31:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 769,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 1035,
        "sourceUnit": 113,
        "src": "147:52:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 770,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "274:7:4"
            },
            "id": 771,
            "nodeType": "InheritanceSpecifier",
            "src": "274:7:4"
          }
        ],
        "contractDependencies": [
          112,
          134
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1034,
        "linearizedBaseContracts": [
          1034,
          112,
          134
        ],
        "name": "ProofOfReservesContractL1",
        "nameLocation": "245:25:4",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "e2179b8e",
            "id": 774,
            "mutability": "mutable",
            "name": "g",
            "nameLocation": "382:1:4",
            "nodeType": "VariableDeclaration",
            "scope": 1034,
            "src": "359:24:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_G1Point_$157_storage",
              "typeString": "struct Pairing.G1Point"
            },
            "typeName": {
              "id": 773,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 772,
                "name": "Pairing.G1Point",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 157,
                "src": "359:15:4"
              },
              "referencedDeclaration": 157,
              "src": "359:15:4",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                "typeString": "struct Pairing.G1Point"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "b8c9d365",
            "id": 777,
            "mutability": "mutable",
            "name": "h",
            "nameLocation": "412:1:4",
            "nodeType": "VariableDeclaration",
            "scope": 1034,
            "src": "389:24:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_G1Point_$157_storage",
              "typeString": "struct Pairing.G1Point"
            },
            "typeName": {
              "id": 776,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 775,
                "name": "Pairing.G1Point",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 157,
                "src": "389:15:4"
              },
              "referencedDeclaration": 157,
              "src": "389:15:4",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                "typeString": "struct Pairing.G1Point"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 779,
            "mutability": "mutable",
            "name": "proofOfReserversAddr",
            "nameLocation": "455:20:4",
            "nodeType": "VariableDeclaration",
            "scope": 1034,
            "src": "447:28:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 778,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "447:7:4",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 781,
            "mutability": "mutable",
            "name": "totalValue",
            "nameLocation": "516:10:4",
            "nodeType": "VariableDeclaration",
            "scope": 1034,
            "src": "508:18:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 780,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "508:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 784,
            "mutability": "mutable",
            "name": "totalCommitment",
            "nameLocation": "577:15:4",
            "nodeType": "VariableDeclaration",
            "scope": 1034,
            "src": "561:31:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_G1Point_$157_storage",
              "typeString": "struct Pairing.G1Point"
            },
            "typeName": {
              "id": 783,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 782,
                "name": "Pairing.G1Point",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 157,
                "src": "561:15:4"
              },
              "referencedDeclaration": 157,
              "src": "561:15:4",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                "typeString": "struct Pairing.G1Point"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 837,
              "nodeType": "Block",
              "src": "716:170:4",
              "statements": [
                {
                  "expression": {
                    "id": 803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 797,
                        "name": "g",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 774,
                        "src": "726:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      "id": 799,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "X",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 154,
                      "src": "726:3:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 800,
                        "name": "_g",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 788,
                        "src": "732:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      "id": 802,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "735:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "732:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "726:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 804,
                  "nodeType": "ExpressionStatement",
                  "src": "726:11:4"
                },
                {
                  "expression": {
                    "id": 811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 805,
                        "name": "g",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 774,
                        "src": "747:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      "id": 807,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "Y",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 156,
                      "src": "747:3:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 808,
                        "name": "_g",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 788,
                        "src": "753:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      "id": 810,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 809,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "756:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "753:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "747:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 812,
                  "nodeType": "ExpressionStatement",
                  "src": "747:11:4"
                },
                {
                  "expression": {
                    "id": 819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 813,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 777,
                        "src": "768:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      "id": 815,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "X",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 154,
                      "src": "768:3:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 816,
                        "name": "_h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 792,
                        "src": "774:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      "id": 818,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 817,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "777:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "774:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "768:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 820,
                  "nodeType": "ExpressionStatement",
                  "src": "768:11:4"
                },
                {
                  "expression": {
                    "id": 827,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 821,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 777,
                        "src": "789:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      "id": 823,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "Y",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 156,
                      "src": "789:3:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 824,
                        "name": "_h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 792,
                        "src": "795:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      "id": 826,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 825,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "798:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "795:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "789:11:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 828,
                  "nodeType": "ExpressionStatement",
                  "src": "789:11:4"
                },
                {
                  "expression": {
                    "id": 831,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 829,
                      "name": "proofOfReserversAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 779,
                      "src": "811:20:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 830,
                      "name": "_proofOfReserversAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 794,
                      "src": "834:21:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "811:44:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 832,
                  "nodeType": "ExpressionStatement",
                  "src": "811:44:4"
                },
                {
                  "expression": {
                    "id": 835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 833,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 781,
                      "src": "865:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 834,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "878:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "865:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 836,
                  "nodeType": "ExpressionStatement",
                  "src": "865:14:4"
                }
              ]
            },
            "id": 838,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 788,
                  "mutability": "mutable",
                  "name": "_g",
                  "nameLocation": "638:2:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "620:20:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 785,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "620:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 787,
                    "length": {
                      "hexValue": "32",
                      "id": 786,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "628:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "620:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 792,
                  "mutability": "mutable",
                  "name": "_h",
                  "nameLocation": "668:2:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "650:20:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 789,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "650:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 791,
                    "length": {
                      "hexValue": "32",
                      "id": 790,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "658:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "650:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 794,
                  "mutability": "mutable",
                  "name": "_proofOfReserversAddr",
                  "nameLocation": "688:21:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 838,
                  "src": "680:29:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 793,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "680:7:4",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "610:105:4"
            },
            "returnParameters": {
              "id": 796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "716:0:4"
            },
            "scope": 1034,
            "src": "599:287:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 872,
              "nodeType": "Block",
              "src": "1023:240:4",
              "statements": [
                {
                  "assignments": [
                    850,
                    853
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 850,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "1042:6:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 872,
                      "src": "1037:11:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 849,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1037:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 853,
                      "mutability": "mutable",
                      "name": "_totalCommitment",
                      "nameLocation": "1073:16:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 872,
                      "src": "1050:39:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 852,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 851,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "1050:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "1050:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 858,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 855,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 840,
                        "src": "1120:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 856,
                        "name": "proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 844,
                        "src": "1127:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                          "typeString": "uint256[3] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                          "typeString": "uint256[3] memory"
                        }
                      ],
                      "id": 854,
                      "name": "PoKE_sigma_protocol_verify",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1012,
                      "src": "1093:26:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_array$_t_uint256_$3_memory_ptr_$returns$_t_bool_$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function (uint256,uint256[3] memory) returns (bool,struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1093:40:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_struct$_G1Point_$157_memory_ptr_$",
                      "typeString": "tuple(bool,struct Pairing.G1Point memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1036:97:4"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 860,
                        "name": "result",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 850,
                        "src": "1151:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "696e76616c69642070726f6f66",
                        "id": 861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1159:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cfa179d50ad7851ac140a84fb212f48699dbd00170b3afe087b0d09f632d1624",
                          "typeString": "literal_string \"invalid proof\""
                        },
                        "value": "invalid proof"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cfa179d50ad7851ac140a84fb212f48699dbd00170b3afe087b0d09f632d1624",
                          "typeString": "literal_string \"invalid proof\""
                        }
                      ],
                      "id": 859,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1143:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1143:32:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 863,
                  "nodeType": "ExpressionStatement",
                  "src": "1143:32:4"
                },
                {
                  "expression": {
                    "id": 866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 864,
                      "name": "totalCommitment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 784,
                      "src": "1194:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_storage",
                        "typeString": "struct Pairing.G1Point storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 865,
                      "name": "_totalCommitment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 853,
                      "src": "1212:16:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point memory"
                      }
                    },
                    "src": "1194:34:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_storage",
                      "typeString": "struct Pairing.G1Point storage ref"
                    }
                  },
                  "id": 867,
                  "nodeType": "ExpressionStatement",
                  "src": "1194:34:4"
                },
                {
                  "expression": {
                    "id": 870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 868,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 781,
                      "src": "1238:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 869,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 840,
                      "src": "1251:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1238:18:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 871,
                  "nodeType": "ExpressionStatement",
                  "src": "1238:18:4"
                }
              ]
            },
            "functionSelector": "97a53a91",
            "id": 873,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 847,
                "modifierName": {
                  "id": 846,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1009:9:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "1009:9:4"
              }
            ],
            "name": "update_total_value",
            "nameLocation": "901:18:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 840,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "937:5:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 873,
                  "src": "929:13:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "929:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 844,
                  "mutability": "mutable",
                  "name": "proof",
                  "nameLocation": "970:5:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 873,
                  "src": "952:23:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                    "typeString": "uint256[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 841,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "952:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 843,
                    "length": {
                      "hexValue": "33",
                      "id": 842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "960:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_3_by_1",
                        "typeString": "int_const 3"
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "952:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                      "typeString": "uint256[3]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "919:62:4"
            },
            "returnParameters": {
              "id": 848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1023:0:4"
            },
            "scope": 1034,
            "src": "892:371:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1011,
              "nodeType": "Block",
              "src": "1605:722:4",
              "statements": [
                {
                  "assignments": [
                    891
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 891,
                      "mutability": "mutable",
                      "name": "cm",
                      "nameLocation": "1675:2:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "1652:25:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 890,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 889,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "1652:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "1652:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 894,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 892,
                      "name": "get_sum_of_commitments",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1025,
                      "src": "1680:22:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function () view returns (struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1680:24:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1652:52:4"
                },
                {
                  "assignments": [
                    899
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 899,
                      "mutability": "mutable",
                      "name": "y",
                      "nameLocation": "1737:1:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "1714:24:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 898,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 897,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "1714:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "1714:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 912,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 902,
                        "name": "cm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "1754:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 907,
                                "name": "g",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 774,
                                "src": "1785:1:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_G1Point_$157_storage",
                                  "typeString": "struct Pairing.G1Point storage ref"
                                }
                              },
                              {
                                "id": 908,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 875,
                                "src": "1788:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_G1Point_$157_storage",
                                  "typeString": "struct Pairing.G1Point storage ref"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 905,
                                "name": "Pairing",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 763,
                                "src": "1773:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                                  "typeString": "type(library Pairing)"
                                }
                              },
                              "id": 906,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "mul",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 338,
                              "src": "1773:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$157_memory_ptr_$_t_uint256_$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                                "typeString": "function (struct Pairing.G1Point memory,uint256) returns (struct Pairing.G1Point memory)"
                              }
                            },
                            "id": 909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1773:21:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                              "typeString": "struct Pairing.G1Point memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                              "typeString": "struct Pairing.G1Point memory"
                            }
                          ],
                          "expression": {
                            "id": 903,
                            "name": "Pairing",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 763,
                            "src": "1758:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                              "typeString": "type(library Pairing)"
                            }
                          },
                          "id": 904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "negate",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 233,
                          "src": "1758:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_struct$_G1Point_$157_memory_ptr_$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                            "typeString": "function (struct Pairing.G1Point memory) pure returns (struct Pairing.G1Point memory)"
                          }
                        },
                        "id": 910,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1758:37:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      ],
                      "expression": {
                        "id": 900,
                        "name": "Pairing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 763,
                        "src": "1742:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                          "typeString": "type(library Pairing)"
                        }
                      },
                      "id": 901,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 290,
                      "src": "1742:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$157_memory_ptr_$_t_struct$_G1Point_$157_memory_ptr_$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function (struct Pairing.G1Point memory,struct Pairing.G1Point memory) returns (struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1742:54:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1714:82:4"
                },
                {
                  "assignments": [
                    917
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 917,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "1830:1:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "1807:24:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 916,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 915,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "1807:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "1807:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 927,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 920,
                          "name": "_proof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 879,
                          "src": "1850:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                            "typeString": "uint256[3] memory"
                          }
                        },
                        "id": 922,
                        "indexExpression": {
                          "hexValue": "30",
                          "id": 921,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1857:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1850:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 923,
                          "name": "_proof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 879,
                          "src": "1861:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                            "typeString": "uint256[3] memory"
                          }
                        },
                        "id": 925,
                        "indexExpression": {
                          "hexValue": "31",
                          "id": 924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1868:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1861:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 918,
                        "name": "Pairing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 763,
                        "src": "1834:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                          "typeString": "type(library Pairing)"
                        }
                      },
                      "id": 919,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "G1Point",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 157,
                      "src": "1834:15:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_G1Point_$157_storage_ptr_$",
                        "typeString": "type(struct Pairing.G1Point storage pointer)"
                      }
                    },
                    "id": 926,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1834:37:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1807:64:4"
                },
                {
                  "assignments": [
                    929
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 929,
                      "mutability": "mutable",
                      "name": "s",
                      "nameLocation": "1889:1:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "1881:9:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 928,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1881:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 933,
                  "initialValue": {
                    "baseExpression": {
                      "id": 930,
                      "name": "_proof",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 879,
                      "src": "1893:6:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                        "typeString": "uint256[3] memory"
                      }
                    },
                    "id": 932,
                    "indexExpression": {
                      "hexValue": "32",
                      "id": 931,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1900:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1893:9:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1881:21:4"
                },
                {
                  "assignments": [
                    935
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 935,
                      "mutability": "mutable",
                      "name": "c_bytes",
                      "nameLocation": "1962:7:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "1954:15:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 934,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1954:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 960,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 944,
                                      "name": "h",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 777,
                                      "src": "2025:1:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_G1Point_$157_storage",
                                        "typeString": "struct Pairing.G1Point storage ref"
                                      }
                                    },
                                    "id": 945,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "X",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 154,
                                    "src": "2025:3:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 943,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2017:7:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                    "typeString": "type(bytes32)"
                                  },
                                  "typeName": {
                                    "id": 942,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2017:7:4",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 946,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2017:12:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "expression": {
                                      "id": 949,
                                      "name": "y",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 899,
                                      "src": "2039:1:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                                        "typeString": "struct Pairing.G1Point memory"
                                      }
                                    },
                                    "id": 950,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "X",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 154,
                                    "src": "2039:3:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 948,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2031:7:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                    "typeString": "type(bytes32)"
                                  },
                                  "typeName": {
                                    "id": 947,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2031:7:4",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 951,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2031:12:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "id": 940,
                                "name": "MiMC7",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 149,
                                "src": "2005:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_MiMC7_$149_$",
                                  "typeString": "type(library MiMC7)"
                                }
                              },
                              "id": 941,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "_hash",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 148,
                              "src": "2005:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                                "typeString": "function (bytes32,bytes32) pure returns (bytes32)"
                              }
                            },
                            "id": 952,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2005:39:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 939,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1997:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 938,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1997:7:4",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 953,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1997:48:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 956,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 917,
                              "src": "2069:1:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                                "typeString": "struct Pairing.G1Point memory"
                              }
                            },
                            "id": 957,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "X",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 154,
                            "src": "2069:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2061:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 954,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2061:7:4",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 958,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2061:12:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 936,
                        "name": "MiMC7",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 149,
                        "src": "1972:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MiMC7_$149_$",
                          "typeString": "type(library MiMC7)"
                        }
                      },
                      "id": 937,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_hash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 148,
                      "src": "1972:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 959,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1972:111:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1954:129:4"
                },
                {
                  "assignments": [
                    965
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 965,
                      "mutability": "mutable",
                      "name": "hs",
                      "nameLocation": "2117:2:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "2094:25:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 964,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 963,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "2094:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "2094:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 971,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 968,
                        "name": "h",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 777,
                        "src": "2134:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      {
                        "id": 969,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 929,
                        "src": "2137:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 966,
                        "name": "Pairing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 763,
                        "src": "2122:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                          "typeString": "type(library Pairing)"
                        }
                      },
                      "id": 967,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 338,
                      "src": "2122:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$157_memory_ptr_$_t_uint256_$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function (struct Pairing.G1Point memory,uint256) returns (struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2122:17:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2094:45:4"
                },
                {
                  "assignments": [
                    976
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 976,
                      "mutability": "mutable",
                      "name": "yc",
                      "nameLocation": "2172:2:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "2149:25:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 975,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 974,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "2149:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "2149:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 985,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 979,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 899,
                        "src": "2189:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 982,
                            "name": "c_bytes",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 935,
                            "src": "2200:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2192:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 980,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2192:7:4",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2192:16:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 977,
                        "name": "Pairing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 763,
                        "src": "2177:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                          "typeString": "type(library Pairing)"
                        }
                      },
                      "id": 978,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 338,
                      "src": "2177:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$157_memory_ptr_$_t_uint256_$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function (struct Pairing.G1Point memory,uint256) returns (struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2177:32:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2149:60:4"
                },
                {
                  "assignments": [
                    990
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 990,
                      "mutability": "mutable",
                      "name": "tyc",
                      "nameLocation": "2242:3:4",
                      "nodeType": "VariableDeclaration",
                      "scope": 1011,
                      "src": "2219:26:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 989,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 988,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 157,
                          "src": "2219:15:4"
                        },
                        "referencedDeclaration": 157,
                        "src": "2219:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 996,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 993,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 917,
                        "src": "2260:1:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      },
                      {
                        "id": 994,
                        "name": "yc",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 976,
                        "src": "2263:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        },
                        {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      ],
                      "expression": {
                        "id": 991,
                        "name": "Pairing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 763,
                        "src": "2248:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Pairing_$763_$",
                          "typeString": "type(library Pairing)"
                        }
                      },
                      "id": 992,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 290,
                      "src": "2248:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$157_memory_ptr_$_t_struct$_G1Point_$157_memory_ptr_$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function (struct Pairing.G1Point memory,struct Pairing.G1Point memory) returns (struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2248:18:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2219:47:4"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1007,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1001,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 997,
                              "name": "hs",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 965,
                              "src": "2285:2:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                                "typeString": "struct Pairing.G1Point memory"
                              }
                            },
                            "id": 998,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "X",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 154,
                            "src": "2285:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 999,
                              "name": "tyc",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 990,
                              "src": "2293:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                                "typeString": "struct Pairing.G1Point memory"
                              }
                            },
                            "id": 1000,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "X",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 154,
                            "src": "2293:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2285:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1002,
                              "name": "hs",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 965,
                              "src": "2302:2:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                                "typeString": "struct Pairing.G1Point memory"
                              }
                            },
                            "id": 1003,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "Y",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 156,
                            "src": "2302:4:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 1004,
                              "name": "tyc",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 990,
                              "src": "2310:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                                "typeString": "struct Pairing.G1Point memory"
                              }
                            },
                            "id": 1005,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "Y",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 156,
                            "src": "2310:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2302:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2285:30:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1008,
                        "name": "cm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 891,
                        "src": "2317:2:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      }
                    ],
                    "id": 1009,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2284:36:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_struct$_G1Point_$157_memory_ptr_$",
                      "typeString": "tuple(bool,struct Pairing.G1Point memory)"
                    }
                  },
                  "functionReturnParameters": 886,
                  "id": 1010,
                  "nodeType": "Return",
                  "src": "2277:43:4"
                }
              ]
            },
            "id": 1012,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "PoKE_sigma_protocol_verify",
            "nameLocation": "1464:26:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 875,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1512:5:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1012,
                  "src": "1501:16:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1501:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 879,
                  "mutability": "mutable",
                  "name": "_proof",
                  "nameLocation": "1545:6:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1012,
                  "src": "1527:24:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$3_memory_ptr",
                    "typeString": "uint256[3]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 876,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1527:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 878,
                    "length": {
                      "hexValue": "33",
                      "id": 877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1535:1:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_3_by_1",
                        "typeString": "int_const 3"
                      },
                      "value": "3"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1527:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$3_storage_ptr",
                      "typeString": "uint256[3]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1491:66:4"
            },
            "returnParameters": {
              "id": 886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 882,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1012,
                  "src": "1575:4:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 881,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1575:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 885,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1012,
                  "src": "1581:22:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                    "typeString": "struct Pairing.G1Point"
                  },
                  "typeName": {
                    "id": 884,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 883,
                      "name": "Pairing.G1Point",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 157,
                      "src": "1581:15:4"
                    },
                    "referencedDeclaration": 157,
                    "src": "1581:15:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                      "typeString": "struct Pairing.G1Point"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1574:30:4"
            },
            "scope": 1034,
            "src": "1455:872:4",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1024,
              "nodeType": "Block",
              "src": "2425:96:4",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "id": 1019,
                            "name": "proofOfReserversAddr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 779,
                            "src": "2468:20:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1018,
                          "name": "ProofOfReservesContractL2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1371,
                          "src": "2442:25:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ProofOfReservesContractL2_$1371_$",
                            "typeString": "type(contract ProofOfReservesContractL2)"
                          }
                        },
                        "id": 1020,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2442:47:4",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ProofOfReservesContractL2_$1371",
                          "typeString": "contract ProofOfReservesContractL2"
                        }
                      },
                      "id": 1021,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "get_sum_of_commitments",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1358,
                      "src": "2442:70:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_struct$_G1Point_$157_memory_ptr_$",
                        "typeString": "function () view external returns (struct Pairing.G1Point memory)"
                      }
                    },
                    "id": 1022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2442:72:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "functionReturnParameters": 1017,
                  "id": 1023,
                  "nodeType": "Return",
                  "src": "2435:79:4"
                }
              ]
            },
            "id": 1025,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_sum_of_commitments",
            "nameLocation": "2342:22:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1013,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2364:2:4"
            },
            "returnParameters": {
              "id": 1017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1016,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1025,
                  "src": "2397:22:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_G1Point_$157_memory_ptr",
                    "typeString": "struct Pairing.G1Point"
                  },
                  "typeName": {
                    "id": 1015,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1014,
                      "name": "Pairing.G1Point",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 157,
                      "src": "2397:15:4"
                    },
                    "referencedDeclaration": 157,
                    "src": "2397:15:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$157_storage_ptr",
                      "typeString": "struct Pairing.G1Point"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2396:24:4"
            },
            "scope": 1034,
            "src": "2333:188:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1032,
              "nodeType": "Block",
              "src": "2597:34:4",
              "statements": [
                {
                  "expression": {
                    "id": 1030,
                    "name": "totalValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 781,
                    "src": "2614:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1029,
                  "id": 1031,
                  "nodeType": "Return",
                  "src": "2607:17:4"
                }
              ]
            },
            "functionSelector": "9e7c84e1",
            "id": 1033,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_total_value",
            "nameLocation": "2536:15:4",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1026,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2551:2:4"
            },
            "returnParameters": {
              "id": 1029,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1028,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1033,
                  "src": "2583:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1027,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2583:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2582:9:4"
            },
            "scope": 1034,
            "src": "2527:104:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1035,
        "src": "236:4859:4"
      }
    ],
    "src": "38:5664:4"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.2+commit.661d1103.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.14",
  "updatedAt": "2023-06-05T08:14:11.264Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}