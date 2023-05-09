// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MusicalNFT is ERC721 {
    uint256 public tokenCounter;

    constructor() ERC721("Moodify", "MOOD") {
        tokenCounter = 0;
    }

    struct Music {
        string name;
        string artist;
        string image;
        string ipfsHash;
    }

    mapping(uint256 => Music) public musicData;

    function mintNFT(string memory _name, string memory _artist, string memory _image, string memory _ipfsHash) public {
        uint256 newTokenId = tokenCounter;
        musicData[newTokenId] = Music(_name, _artist, _image, _ipfsHash);
        _safeMint(msg.sender, newTokenId);
        tokenCounter++;
    }
}
