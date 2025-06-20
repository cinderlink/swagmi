export const EntityRegistry = {
	abi: [
		{
			inputs: [
				{ internalType: 'string', name: '_namespace', type: 'string' },
				{ internalType: 'address', name: '_permissionAddr', type: 'address' },
				{ internalType: 'address', name: '_typesAddr', type: 'address' }
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
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'entities',
			outputs: [
				{ internalType: 'uint256', name: 'id', type: 'uint256' },
				{ internalType: 'uint256', name: 'typeId', type: 'uint256' },
				{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
				{ internalType: 'string', name: 'name', type: 'string' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '', type: 'string' }],
			name: 'entityIds',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'uint256', name: '', type: 'uint256' }
			],
			name: 'entityTypeIds',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
			inputs: [
				{ internalType: 'uint256', name: '_offset', type: 'uint256' },
				{ internalType: 'uint256', name: '_limit', type: 'uint256' }
			],
			name: 'getEntities',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_typeId', type: 'uint256' },
				{ internalType: 'uint256', name: '_offset', type: 'uint256' },
				{ internalType: 'uint256', name: '_limit', type: 'uint256' }
			],
			name: 'getEntitiesByType',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getEntity',
			outputs: [
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'string', name: '', type: 'string' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getEntityType',
			outputs: [
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'string', name: '', type: 'string' }
			],
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
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'uint256', name: '_typeId', type: 'uint256' }
			],
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
			inputs: [],
			name: 'types',
			outputs: [{ internalType: 'contract EntityTypeRegistry', name: '', type: 'address' }],
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
	address: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853'
};
export default EntityRegistry;
