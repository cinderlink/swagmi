export const CinderAirdrop = {
	abi: [
		{
			inputs: [
				{ internalType: 'address', name: '_cinderToken', type: 'address' },
				{ internalType: 'address', name: '_attestationProxy', type: 'address' },
				{ internalType: 'address', name: '_permissionsAddress', type: 'address' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [],
			name: 'attestation',
			outputs: [{ internalType: 'contract AttestationProxy', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'cinderToken',
			outputs: [{ internalType: 'contract CinderToken', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{ inputs: [], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function' },
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'claimants',
			outputs: [
				{ internalType: 'address', name: 'user', type: 'address' },
				{ internalType: 'uint256', name: 'unclaimed', type: 'uint256' },
				{ internalType: 'uint256', name: 'claimed', type: 'uint256' },
				{ internalType: 'uint256', name: 'trustClaim', type: 'uint256' },
				{ internalType: 'uint256', name: 'lastGrantedAt', type: 'uint256' },
				{ internalType: 'uint256', name: 'lastClaimedAt', type: 'uint256' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'claimed',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address[]', name: '_addresses', type: 'address[]' },
				{ internalType: 'uint256[]', name: '_amounts', type: 'uint256[]' }
			],
			name: 'grant',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'string', name: '_permission', type: 'string' },
				{ internalType: 'address', name: '_address', type: 'address' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_permission', type: 'string' },
				{ internalType: 'address', name: '_address', type: 'address' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'string', name: '_permission', type: 'string' }
			],
			name: 'requirePermission',
			outputs: [],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_permission', type: 'string' }],
			name: 'requirePermission',
			outputs: [],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'unclaimed',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'string', name: '_permission', type: 'string' },
				{ internalType: 'address', name: '_address', type: 'address' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_permission', type: 'string' },
				{ internalType: 'address', name: '_address', type: 'address' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		}
	],
	address: '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'
};
export default CinderAirdrop;
