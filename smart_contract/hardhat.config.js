// https://eth-ropsten.alchemyapi.io/v2/lCVxvU5Edq00JBzNG8E77sJI1TF-bTy8

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {
      chainId: 1337
    },

    Mumbai: {

      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: [`a71fdf3730b4f279b83c65175536d92d563587f72179d74552f8e1f9dc3444c9`]
    },

  },
};