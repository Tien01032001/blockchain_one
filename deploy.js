const { ethers } = require("ethers");
const fs = require("fs-extra");
//HTTP://127.0.0.1:7545
async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545");
  const wallet = new ethers.Wallet(
    "8a75e65ac940e25363583b72f1c3ca63f8d67c246c5756b9f0bc480396561cb7",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait ...");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
