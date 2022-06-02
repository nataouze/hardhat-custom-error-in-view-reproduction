const { ethers } = require("hardhat");

it("custom error in non-view function", async function () {
  const CustomErrorContract = await ethers.getContractFactory("CustomErrorContract");
  const customErrorContract = await CustomErrorContract.deploy();
  await customErrorContract.a();
});

it("custom error in view function", async function () {
  const CustomErrorContract = await ethers.getContractFactory("CustomErrorContract");
  const customErrorContract = await CustomErrorContract.deploy();
  await customErrorContract.b();
});

it("custom error in pure function", async function () {
  const CustomErrorContract = await ethers.getContractFactory("CustomErrorContract");
  const customErrorContract = await CustomErrorContract.deploy();
  await customErrorContract.c();
});
