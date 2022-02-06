//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


/// @title MyTokenRick is a simple NFT minting site, this contract only provides one token 
/// because I am merely showing implementation of ERC721 standards. 
/// I will create another project that implements ERC1155 standards that provides more than one token
/// ***There are alot of things - such as functions, security measures, etc. - that I left out due to this not being a
/// real project*** 
/// @author Jabari B.

contract MyTokenRick is ERC721 {
    
    address public owner;
    bool public activeSale = true;
    bool public contractPaused;
    uint public totalRicks = 1; 
    string private baseURI;

    /// @notice Price of each token, in this case they are free, but showing what would be used in a produciton environment
    uint256 public price = 0;
    uint256 public maxTokens = 1;

    /// @notice Didn't need these, but again, merely showing what would be used in a production environment
    uint256 public publicRicks = 0; 
    uint256 public ReservedRicks = 0; 
    constructor() ERC721("MyToken", "MYT") {
        owner = msg.sender;

    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'Caller is not owner');
        _;
    }

    function flipSaleState() external onlyOwner {
        activeSale = !activeSale;
    }

    function setPrice(uint256 _price) external onlyOwner {
        price = _price;
    }

    function getPrice() external view returns(uint256) {
        return price;
    }

    function getRicksNum(address _rickOwner) external view returns(uint256) {
        return balanceOf(_rickOwner);
    }

    function mintRick() external {
        _safeMint(msg.sender, 1);
    }

    function setBaseURI (string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }
    function _baseURI() internal view virtual override returns(string memory) {
        return baseURI;
    }
}
