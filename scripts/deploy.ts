// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const pangolinRouterAddress = "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106";
  /*
  const PANGOLIN_ROUTER = new Map();
  PANGOLIN_ROUTER.set("43113", "0x2D99ABD9008Dc933ff5c0CD271B88309593aB921");
  PANGOLIN_ROUTER.set("43114", "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106");
  */
  const joeRouterAddress = "0x60aE616a2155Ee3d9A68541Ba4544862310933d4";
  /*
  const SafeMath = await hre.ethers.getContractFactory("SafeMath");
  const safeMath = await SafeMath.deploy("");
  
  const SafeMath = await hre.ethers.getContractFactory("SafeMath");
  const safeMath = await SafeMath.deploy("");


  const IPangolinPair = await hre.ethers.getContractFactory("IPangolinPair");
  const iPangolinPair = await IPangolinPair.deploy("");

  const IPangolinFactory = await hre.ethers.getContractFactory("IPangolinFactory");
  const iPangolinFactory = await IPangolinFactory.deploy("");
  */

  const JoeRoll = await hre.ethers.getContractFactory("JoeRoll");
  const joeRoll = await JoeRoll.deploy(joeRouterAddress, pangolinRouterAddress);//PANGOLIN_ROUTER["43114"]);

  await joeRoll.deployed();

  console.log("Zapper deployed to:", joeRoll.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
