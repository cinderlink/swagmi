export const AttestationProxy = {
	abi: [
		{
			inputs: [
				{ internalType: 'address', name: '_attestationAddress', type: 'address' },
				{ internalType: 'address', name: '_permissionsAddress', type: 'address' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_about', type: 'address' },
				{ internalType: 'bytes32', name: '_key', type: 'bytes32' },
				{ internalType: 'int256', name: '_val', type: 'int256' }
			],
			name: 'attest',
			outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'attestationStation',
			outputs: [{ internalType: 'contract IAttestationStation', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_about', type: 'address' },
				{ internalType: 'address', name: '_attester', type: 'address' }
			],
			name: 'attested',
			outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' }
			],
			name: 'attestedAmount',
			outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
			stateMutability: 'view',
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
			inputs: [{ internalType: 'address', name: '_attestationStation', type: 'address' }],
			name: 'setAttestationStation',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'trust',
			outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
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
	address: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788'
};
export default AttestationProxy;
