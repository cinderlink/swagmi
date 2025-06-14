export const EntityTypeRegistry = {
	abi: [
		{
			inputs: [
				{ internalType: 'string', name: '_namespace', type: 'string' },
				{ internalType: 'address', name: '_permissionAddr', type: 'address' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [],
			name: 'counter',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '', type: 'string' }],
			name: 'entityTypeIds',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'entityTypes',
			outputs: [
				{ internalType: 'uint256', name: 'id', type: 'uint256' },
				{ internalType: 'string', name: 'name', type: 'string' },
				{ internalType: 'address', name: 'contributor', type: 'address' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'exists',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'exists',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getContributor',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'getId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getName',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
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
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'register',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'remove',
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
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'update',
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
	address: '0x0165878A594ca255338adfa4d48449f69242Eb8F'
};
export default EntityTypeRegistry;
