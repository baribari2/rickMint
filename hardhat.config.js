require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const privatekey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './client/src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/G_fsZJPCrPqbarulbXpiZtgk9SNId-8A",
      accounts: ["2cecc4e43801454f94d18f10ea861d64533bc0355939440afaa58a3d53d75b0f"]
    }
  },
}
