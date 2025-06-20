export const PermissionRegistry = {
	abi: [
		{
			inputs: [{ internalType: 'address', name: '_usersAddr', type: 'address' }],
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
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'exists',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'getPermission',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'parent', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' },
						{ internalType: 'string', name: 'name', type: 'string' },
						{ internalType: 'address', name: 'owner', type: 'address' }
					],
					internalType: 'struct PermissionRegistry.Permission',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getPermission',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'parent', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' },
						{ internalType: 'string', name: 'name', type: 'string' },
						{ internalType: 'address', name: 'owner', type: 'address' }
					],
					internalType: 'struct PermissionRegistry.Permission',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getPermissionCid',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'getPermissionCid',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'getPermissionId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getPermissionName',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getPermissionOwner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getPermissionParent',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_userId', type: 'uint256' }],
			name: 'getUserPermissions',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'uint256', name: '_offset', type: 'uint256' },
				{ internalType: 'uint256', name: '_limit', type: 'uint256' }
			],
			name: 'getUserPermissions',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_userId', type: 'uint256' }],
			name: 'getUserPermissionsCount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_addr', type: 'address' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_username', type: 'string' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_addr', type: 'address' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'grantPermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '', type: 'string' }],
			name: 'permissionIds',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'permissions',
			outputs: [
				{ internalType: 'uint256', name: 'id', type: 'uint256' },
				{ internalType: 'uint256', name: 'parent', type: 'uint256' },
				{ internalType: 'string', name: 'cid', type: 'string' },
				{ internalType: 'string', name: 'name', type: 'string' },
				{ internalType: 'address', name: 'owner', type: 'address' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_cid', type: 'string' },
				{ internalType: 'uint256', name: '_parent', type: 'uint256' },
				{ internalType: 'address', name: '_owner', type: 'address' }
			],
			name: 'registerPermission',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_cid', type: 'string' }
			],
			name: 'registerPermission',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_cid', type: 'string' },
				{ internalType: 'uint256', name: '_parent', type: 'uint256' }
			],
			name: 'registerPermission',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_userId', type: 'uint256' }],
			name: 'revokeAllPermissions',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_username', type: 'string' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'revokePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_addr', type: 'address' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'revokePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'revokePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'revokePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_addr', type: 'address' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'revokePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_cid', type: 'string' },
				{ internalType: 'uint256', name: '_parent', type: 'uint256' }
			],
			name: 'updatePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_cid', type: 'string' },
				{ internalType: 'uint256', name: '_parent', type: 'uint256' },
				{ internalType: 'address', name: '_owner', type: 'address' }
			],
			name: 'updatePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' },
				{ internalType: 'string', name: '_cid', type: 'string' }
			],
			name: 'updatePermission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_cid', type: 'string' }
			],
			name: 'updatePermissionCid',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'updatePermissionName',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'address', name: '_owner', type: 'address' }
			],
			name: 'updatePermissionOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'uint256', name: '_parent', type: 'uint256' }
			],
			name: 'updatePermissionParent',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_username', type: 'string' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_address', type: 'address' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_username', type: 'string' },
				{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_userId', type: 'uint256' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_permissionId', type: 'uint256' }],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_address', type: 'address' },
				{ internalType: 'string', name: '_name', type: 'string' }
			],
			name: 'userHasPermission',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'userPermissions',
			outputs: [
				{ internalType: 'uint256', name: 'userId', type: 'uint256' },
				{ internalType: 'uint256', name: 'counter', type: 'uint256' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'users',
			outputs: [{ internalType: 'contract UserRegistry', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		}
	],
	address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
};
export default PermissionRegistry;
