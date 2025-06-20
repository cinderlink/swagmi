export const CinderToken = {
	abi: [
		{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Approval',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
			],
			name: 'OwnershipTransferred',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
			],
			name: 'Transfer',
			type: 'event'
		},
		{
			inputs: [],
			name: 'MAX_SUPPLY',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'spender', type: 'address' }
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'baseTokenBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'baseTokenConversion',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'baseTokenEnabled',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'baseTokenMinAmount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'burn',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'circulatingSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
			],
			name: 'decreaseAllowance',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'spender', type: 'address' },
				{ internalType: 'uint256', name: 'addedValue', type: 'uint256' }
			],
			name: 'increaseAllowance',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{ inputs: [], name: 'mint', outputs: [], stateMutability: 'payable', type: 'function' },
		{
			inputs: [
				{ internalType: 'address', name: '_to', type: 'address' },
				{ internalType: 'uint256', name: '_amount', type: 'uint256' }
			],
			name: 'mint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'mint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mintToken',
			outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mintTokenAddress',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mintTokenBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mintTokenConversion',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mintTokenEnabled',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'mintTokenMinAmount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_address', type: 'address' },
				{ internalType: 'uint256', name: '_min', type: 'uint256' },
				{ internalType: 'uint256', name: '_conversion', type: 'uint256' }
			],
			name: 'updateMintToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_min', type: 'uint256' },
				{ internalType: 'uint256', name: '_conversion', type: 'uint256' }
			],
			name: 'updateMintToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],
	address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
};
export default CinderToken;
