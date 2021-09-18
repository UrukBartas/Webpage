import { ethers, Signer, Wallet } from 'ethers';
import { JsonFragment } from '@ethersproject/abi';

const ABI: Array<JsonFragment> = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketplaceAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'QuestStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'questID',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nftID',
        type: 'uint256',
      },
    ],
    name: 'RewardsClaimed',
    type: 'event',
  },
  {
    inputs: [],
    name: 'addUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'url',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
    ],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
    ],
    name: 'returnQuestById',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'level',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'difficulty',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountTokens',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isCompleted',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isClaimed',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'exists',
            type: 'bool',
          },
        ],
        internalType: 'struct InGame.UserData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'tokensAmount',
        type: 'uint256',
      },
    ],
    name: 'setQuestCompletedAndSetTokensAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'level',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'difficulty',
        type: 'uint256',
      },
    ],
    name: 'startQuest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'userExists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

let newInGameContractInstance = (adress: string, signer: Signer) => {
  return new ethers.Contract(adress, ABI, signer);
};

export default newInGameContractInstance;
