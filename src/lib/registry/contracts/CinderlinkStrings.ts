export const CinderlinkStrings = {
	abi: [
		{
			inputs: [{ internalType: 'address', name: '_addr', type: 'address' }],
			name: 'address2str',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'isEmpty',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'string', name: '_name1', type: 'string' },
				{ internalType: 'string', name: '_name2', type: 'string' }
			],
			name: 'isEqual',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'removePunctuation',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_input', type: 'string' }],
			name: 'slugify',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'pure',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
			name: 'toLowerCase',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'pure',
			type: 'function'
		}
	],
	address: '0x5FbDB2315678afecb367f032d93F642f64180aa3'
};
export default CinderlinkStrings;
