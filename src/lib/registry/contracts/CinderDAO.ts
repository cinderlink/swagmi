export const CinderDAO = {
	abi: [
		{
			inputs: [
				{ internalType: 'string', name: '_namespace', type: 'string' },
				{ internalType: 'address', name: '_stakingAddress', type: 'address' },
				{ internalType: 'address', name: '_tokenAddress', type: 'address' },
				{ internalType: 'address', name: '_permissionsAddress', type: 'address' },
				{ internalType: 'address', name: '_entitiesAddress', type: 'address' },
				{ internalType: 'address', name: '_definitionsAddress', type: 'address' },
				{ internalType: 'uint256', name: '_proposalSchemaId', type: 'uint256' },
				{ internalType: 'uint256', name: '_voteSchemaId', type: 'uint256' },
				{ internalType: 'uint256', name: '_commentSchemaId', type: 'uint256' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			inputs: [],
			name: 'commentCost',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'commentCount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_entityId', type: 'uint256' },
				{ internalType: 'uint256', name: '_definitionId', type: 'uint256' }
			],
			name: 'createProposal',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getOwner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
			name: 'getProposal',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'id', type: 'uint256' },
						{ internalType: 'uint256', name: 'entityId', type: 'uint256' },
						{ internalType: 'uint256', name: 'definitionId', type: 'uint256' },
						{ internalType: 'uint256', name: 'version', type: 'uint256' },
						{ internalType: 'uint256', name: 'createdAt', type: 'uint256' },
						{ internalType: 'uint256[]', name: 'voteIds', type: 'uint256[]' },
						{ internalType: 'uint256[]', name: 'commentIds', type: 'uint256[]' },
						{ internalType: 'uint256', name: 'contributorId', type: 'uint256' },
						{ internalType: 'bool', name: 'active', type: 'bool' }
					],
					internalType: 'struct CinderDAO.Proposal',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getProposals',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_entityId', type: 'uint256' }],
			name: 'getProposalsByEntityId',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getStakingAddress',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'getTokenAddress',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'governanceBalance',
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
			inputs: [],
			name: 'proposalCost',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'proposalCount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'proposalWinRefund',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
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
			name: 'rewardsBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
			name: 'setOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_stakingAddress', type: 'address' }],
			name: 'setStakingAddress',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_tokenAddress', type: 'address' }],
			name: 'setTokenAddress',
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
		},
		{
			inputs: [
				{ internalType: 'uint256', name: '_proposalId', type: 'uint256' },
				{ internalType: 'bool', name: '_favor', type: 'bool' },
				{ internalType: 'uint256', name: '_amount', type: 'uint256' },
				{ internalType: 'uint256', name: '_commentDefinitionId', type: 'uint256' }
			],
			name: 'vote',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'voteCost',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'voteCount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'voteWinRefund',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		}
	],
	address: '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE'
};
export default CinderDAO;
