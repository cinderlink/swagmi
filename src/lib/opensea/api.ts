export async function openseaRequest(endpoint: string, options: RequestInit = {}) {
	const req = await fetch(`https://api.opensea.io/api/${endpoint}`, options);
	const res = await req.json();
	return res;
}

export async function openseaAsset(address: string, tokenId: string) {
	return openseaRequest(`v1/asset/${address}/${tokenId}/?include_orders=false`);
}
