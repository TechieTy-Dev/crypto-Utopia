require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/2pk30G2095Bp347VDeKpAARxC6An881g",
      accounts: [
        "69377e8d91a133d167eda2959cb11fff2b32161c4b32971ee8697149e6b9d905",
      ],
    },
  },
};
