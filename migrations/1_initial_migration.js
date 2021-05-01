const GlitterNFT = artifacts.require("GlitterNFT");

module.exports = function (deployer) {
  deployer.deploy(GlitterNFT);
};
