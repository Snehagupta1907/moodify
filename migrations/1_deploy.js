let MusicNFT = artifacts.require('MusicalNFT');

module.exports = async function(deployer,_network,accounts){
    await deployer.deploy(MusicNFT);
}