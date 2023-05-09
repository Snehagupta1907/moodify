// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MusicalNFT is ERC721URIStorage {
 

    constructor() ERC721("MiniMusical", "MMNFT") {
    }

    struct Music {
        string name;
        string artist;
        string image;
        string uri;
        uint256 releaseYear;

        
    }

    mapping(uint256 => Music) public musicData;

     using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;



    function musicMint( string memory tokenURI,string memory _name, string memory _artist, uint256 _releaseYear, string memory _image)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        musicData[newItemId] = Music(_name, _artist,_image,tokenURI, _releaseYear);
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
   
}

