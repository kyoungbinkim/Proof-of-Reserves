import fs from "fs";
import {
    proofOfReserveContractL2,
    proofOfReserveContractL1,
} from "./contract.js";
import Ganache from "./ganache.js";
import config from "../config.js";
import {
    vkFileToContractFormat,
    pedersenGenToContractFormat
} from "../utils/string.js"

const contractL2Json = JSON.parse(fs.readFileSync(config.PATH.homePath + 'src/web3/ProofOfReservesContractL2.json', 'utf-8'));
const contractL1Json = JSON.parse(fs.readFileSync(config.PATH.homePath + 'src/web3/ProofOfReservesContractL1.json', 'utf-8'));

const vkPath  = config.PATH.proofPath + "Proof_vk/VK.json"
const genPath = config.PATH.proofPath + "Ped_cm/generator.json"

const gen     = pedersenGenToContractFormat(genPath);

const porContractL2 = await proofOfReserveContractL2.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
    vkFileToContractFormat(vkPath),
    config.testProvider,
    contractL2Json.abi,
    contractL2Json.bytecode
)

const porContractL1 = await proofOfReserveContractL1.deployAndconstruct(
    Ganache.getAddress(),
    Ganache.getPrivateKey(),
    [
        [gen[0], gen[1]],
        [gen[2], gen[3]],
        porContractL2.Addr
    ],
    config.testProvider,
    contractL1Json.abi,
    contractL1Json.bytecode
)



export default {
    porContractL1 : porContractL1,
    porContractL2 : porContractL2,
    AddressL1 : porContractL1.Addr,
    AddressL2 : porContractL2.Addr,
    uploadCommitment : async (path) => {
        return await porContractL2.uploadCommitment(path);
    },
    updateCommitment : async (idx, proofPath) => {
        return await porContractL2.updateCommitment(idx, proofPath);
    },
    updateTotalValue : async () => {
        return await porContractL1.updateTotalValue();
    },
    getAllCommitments: async () => {
        return await porContractL2.getAllCommitments();
    },
    getTotalValue : () => {
        return porContractL1.getTotalValue();
    }
};