export const EntityDefinitionRegistry = {
	abi: [
		{
			inputs: [
				{ internalType: 'string', name: '_namespace', type: 'string' },
				{ internalType: 'address', name: '_permissionsAddr', type: 'address' },
				{ internalType: 'address', name: '_entitiesAddr', type: 'address' },
				{ internalType: 'address', name: '_schemasAddr', type: 'address' }
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
			name: 'definitions',
			outputs: [
				{ internalType: 'uint256', name: 'id', type: 'uint256' },
				{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
				{ internalType: 'uint256', name: 'schemaId', type: 'uint256' },
				{ internalType: 'uint256', name: 'version', type: 'uint256' },
				{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
				{ internalType: 'string', name: 'cid', type: 'string' }
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'entities',
			outputs: [{ internalType: 'contract EntityRegistry', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'entitiesAddr',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'entityDefs',
			outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
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
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'get',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
						{ internalType: 'uint256', name: 'schemaId', type: 'uint256' },
						{ internalType: 'uint256', name: 'version', type: 'uint256' },
						{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' }
					],
					internalType: 'struct EntityDefinitionRegistry.Definition',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'getCid',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'getContributor',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_contributorId', type: 'uint256' }],
			name: 'getContributorDefinitionIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_contributorId', type: 'uint256' }],
			name: 'getContributorDefinitions',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
						{ internalType: 'uint256', name: 'schemaId', type: 'uint256' },
						{ internalType: 'uint256', name: 'version', type: 'uint256' },
						{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' }
					],
					internalType: 'struct EntityDefinitionRegistry.Definition[]',
					name: '',
					type: 'tuple[]'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_entityId', type: 'uint256' }],
			name: 'getEntityDefinitionIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_entityId', type: 'uint256' }],
			name: 'getEntityDefinitions',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
						{ internalType: 'uint256', name: 'schemaId', type: 'uint256' },
						{ internalType: 'uint256', name: 'version', type: 'uint256' },
						{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' }
					],
					internalType: 'struct EntityDefinitionRegistry.Definition[]',
					name: '',
					type: 'tuple[]'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'getEntityId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'uint256', name: '_schemaId', type: 'uint256' }
			],
			name: 'getEntitySchemaDefinitionIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'uint256', name: '_schemaId', type: 'uint256' }
			],
			name: 'getEntitySchemaDefinitions',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
						{ internalType: 'uint256', name: 'schemaId', type: 'uint256' },
						{ internalType: 'uint256', name: 'version', type: 'uint256' },
						{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' }
					],
					internalType: 'struct EntityDefinitionRegistry.Definition[]',
					name: '',
					type: 'tuple[]'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_entityId', type: 'uint256' }],
			name: 'getEntitySchemaIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_schemaId', type: 'uint256' }],
			name: 'getSchemaDefinitionIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_schemaId', type: 'uint256' }],
			name: 'getSchemaDefinitions',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
						{ internalType: 'uint256', name: 'schemaId', type: 'uint256' },
						{ internalType: 'uint256', name: 'version', type: 'uint256' },
						{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
						{ internalType: 'string', name: 'cid', type: 'string' }
					],
					internalType: 'struct EntityDefinitionRegistry.Definition[]',
					name: '',
					type: 'tuple[]'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_schemaId', type: 'uint256' }],
			name: 'getSchemaEntityIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'getSchemaId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
			name: 'getVersion',
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
				{ internalType: 'uint256', name: '_schemaId', type: 'uint256' }
			],
			name: 'hasSchemaDefinition',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'uint256', name: '_schemaId', type: 'uint256' },
				{ internalType: 'string', name: '_cid', type: 'string' }
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
			inputs: [
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'uint256', name: '', type: 'uint256' }
			],
			name: 'schemaDefs',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'schemas',
			outputs: [{ internalType: 'contract SchemaRegistry', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'schemasAddr',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_id', type: 'uint256' },
				{ internalType: 'string', name: '_cid', type: 'string' }
			],
			name: 'update',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '', type: 'uint256' },
				{ internalType: 'uint256', name: '', type: 'uint256' }
			],
			name: 'userDefs',
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
	address: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6'
};
export default EntityDefinitionRegistry;
