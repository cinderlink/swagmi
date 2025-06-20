export const UserRegistry = {
	abi: [
		{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
		{
			inputs: [],
			name: 'counter',
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
			inputs: [],
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
			inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
			name: 'exists',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getDid',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'getDid',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
			name: 'getId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getOwner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'getUser',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'string', name: 'did', type: 'string' },
						{ internalType: 'string', name: 'name', type: 'string' },
						{ internalType: 'address', name: 'owner', type: 'address' }
					],
					internalType: 'struct UserRegistry.User',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getUser',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'string', name: 'did', type: 'string' },
						{ internalType: 'string', name: 'name', type: 'string' },
						{ internalType: 'address', name: 'owner', type: 'address' }
					],
					internalType: 'struct UserRegistry.User',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getUser',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'string', name: 'did', type: 'string' },
						{ internalType: 'string', name: 'name', type: 'string' },
						{ internalType: 'address', name: 'owner', type: 'address' }
					],
					internalType: 'struct UserRegistry.User',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_did', type: 'string' }
			],
			name: 'register',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_did', type: 'string' },
				{ internalType: 'address', name: '_user', type: 'address' }
			],
			name: 'register',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_did', type: 'string' },
				{ internalType: 'address', name: '_owner', type: 'address' }
			],
			name: 'update',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_did', type: 'string' }
			],
			name: 'update',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_did', type: 'string' }
			],
			name: 'updateDid',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'updateName',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'address', name: '_owner', type: 'address' }
			],
			name: 'updateOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'userAddresses',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '', type: 'string' }],
			name: 'userIds',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'users',
			outputs: [
				{ internalType: 'uint256', name: 'id', type: 'uint256' },
				{ internalType: 'string', name: 'did', type: 'string' },
				{ internalType: 'string', name: 'name', type: 'string' },
				{ internalType: 'address', name: 'owner', type: 'address' }
			],
			stateMutability: 'view',
			type: 'function'
		}
	],
	address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
};
export default UserRegistry;
