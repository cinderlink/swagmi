export const CinderStaking = {
	abi: [
		{
			inputs: [
				{ internalType: 'address', name: '_tokenAddress', type: 'address' },
				{ internalType: 'address', name: '_permissionsAddress', type: 'address' }
			],
			stateMutability: 'nonpayable',
			type: 'constructor'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'staker', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'Claimed',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'staker', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'Staked',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'staker', type: 'address' },
				{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
			],
			name: 'Unstaked',
			type: 'event'
		},
		{
			inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{ inputs: [], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function' },
		{
			inputs: [],
			name: 'claimFee',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'counter',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'dao',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'daoBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_delegate', type: 'address' }],
			name: 'delegate',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'distributeRewards',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'earlyUnstakeFee',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'earlyUnstakeInterval',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
			name: 'getDelegate',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_delegate', type: 'address' }],
			name: 'getDelegatedAmount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_delegate', type: 'address' }],
			name: 'getDelegationAddresses',
			outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_delegate', type: 'address' }],
			name: 'getDelegationIds',
			outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
			name: 'getStaker',
			outputs: [
				{
					components: [
						{ internalType: 'uint256', name: 'amountStaked', type: 'uint256' },
						{ internalType: 'uint256', name: 'rewardsClaimed', type: 'uint256' },
						{ internalType: 'uint256', name: 'rewards', type: 'uint256' },
						{ internalType: 'uint256', name: 'lastClaimed', type: 'uint256' },
						{ internalType: 'address', name: 'staker', type: 'address' },
						{ internalType: 'address', name: 'delegate', type: 'address' }
					],
					internalType: 'struct CinderStaking.Staker',
					name: '',
					type: 'tuple'
				}
			],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
			name: 'getStakerId',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'minRegCreateAmount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'minRegModerateAmount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'minStakeAmount',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
			name: 'ownerBalance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'ownerFeePercentage',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
			name: 'pendingRewards',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'rewardDao',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'rewardFee',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'rewardOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address', name: '_staker', type: 'address' },
				{ internalType: 'uint256', name: '_amount', type: 'uint256' }
			],
			name: 'rewardStaker',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'rewardStakers',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_claimFee', type: 'uint256' }],
			name: 'setClaimFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_dao', type: 'address' }],
			name: 'setDAO',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_earlyUnstakeFee', type: 'uint256' }],
			name: 'setEarlyUnstakeFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_earlyUnstakeInterval', type: 'uint256' }],
			name: 'setEarlyUnstakeInterval',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_ownerFeePercentage', type: 'uint256' }],
			name: 'setOwnerFeePercentage',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_unstakeFee', type: 'uint256' }],
			name: 'setUnstakeFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'stake',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'tokenAddress',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalRewards',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalRewardsClaimed',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'totalStaked',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
			inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
			name: 'unstake',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'unstakeFee',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
			name: 'votingPower',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function'
		},
		{
			inputs: [],
			name: 'withdrawDAOFees',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [],
			name: 'withdrawOwnerFees',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		}
	],
	address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
};
export default CinderStaking;
