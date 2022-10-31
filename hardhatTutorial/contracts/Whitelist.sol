//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistedAddresses;

    mapping(address => bool) public whitelistedAddresses;

    uint8 public numberOfAddressesWhitelisted;

    constructor(uint8 _maxWhitelistedAddresses){

        maxWhitelistedAddresses = _maxWhitelistedAddresses;

    }
    function addAddressToWhitelist() public{
        require(!whitelistedAddresses[msg.sender], "Sender has already been whitelisted");

        require(numberOfAddressesWhitelisted < maxWhitelistedAddresses,"More addresses can't be added limit reached");

        whitelistedAddresses[msg.sender] = true;

        numberOfAddressesWhitelisted +=1;

    }
}