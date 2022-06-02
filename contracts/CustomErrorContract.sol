// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract CustomErrorContract {
    uint256 state;

    error MyCustomErrror(uint256 code);

    function a() external {
        state = 0;
        revert MyCustomErrror(1);
    }

    function b() external view {
        state;
        revert MyCustomErrror(2);
    }

    function c() external pure {
        revert MyCustomErrror(3);
    }
}

