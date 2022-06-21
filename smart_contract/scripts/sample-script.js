const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await transactionFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address:", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
