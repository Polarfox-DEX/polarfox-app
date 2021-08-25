// the Polarfox Default token list lives here
// TODO: Add Avalanche token li
export const AVALANCHE_TOKEN_LIST = 'https://raw.githubusercontent.com/Polarfox-DEX/polarfox-token-lists/avalanche-token-list/43114/avalanche-token-list.json'

export const DEFAULT_TOKEN_LIST_URL = AVALANCHE_TOKEN_LIST // TODO: Update

export const DEFAULT_LIST_OF_LISTS: string[] = [AVALANCHE_TOKEN_LIST, DEFAULT_TOKEN_LIST_URL]

// TODO: Have the token lists based on chain ID. Given how the code is written, this might be difficult
