const _   = require('lodash');
const por = artifacts.require("ProofOfReservesContract");

contract("TEST ProofOfReservesContract", (accounts) => {

    const proof = {
        a: [
          '6816668668471313958680220385113037009641901823102651163685570559919019490725',
          '1131039061874675590710543084181265209942821547121516082072521432203807876563'
        ],
        b: [
          '18923502102815370332038117295256288894838255107062633327497215808602393434219',
          '20393434777734534547218523097352950693432481147431325454569228375368188889385',
          '5980613170227552652541605199321292075630351299478181872173703747035757452236',
          '6913496952139244325206462266731875553306122508449684038575883536326677476092'
        ],
        c: [
          '17085529532819901834253789668097208014416635738668156160001174291922441366213',
          '14883290790166787111813184662095919626191481138017164522650272398982155087976'
        ],
        d: [
          '10628878187431463915727069740849968982158399433099915408354856955180891242172',
          '21766210813743405297781664988936493153785402332235992748419207315858943955631'
        ]
    }

    const proofToArr = (obj) => {
      let arr = []
      _.forIn(obj, (v, k) => {
        arr = arr.concat(v);
      })
      return arr;
    }

    it("verify proof", async () => {
      const ins = await por.deployed();
      // console.log(ins);
      const vk = await ins.get_vk();
      // console.log(vk);


      const proofContractFormat = proofToArr(proof)
      
      
      const verify = await ins.upload_commitment.call(
        proofContractFormat,{
          from : accounts[0],
          gas : "0x1f800000000f00"
        }
      );
      console.log(verify);
    })
})

//0xc8f89eBfDb2eEc2e49257469A67cd67b0eBBcF7d