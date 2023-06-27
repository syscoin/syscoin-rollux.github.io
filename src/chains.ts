import { ethers } from 'ethers'

export const NETWORK_DATA = {
  "syscoin-tanenbaum": {
    id: 5700,
    name: 'Syscoin Tanenbaum (testnet)',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.tanenbaum.io'
    ),
    layer: 1,
    pair: 'optimism',
    bridge: '0x77Cdc3891C91729dc9fdea7000ef78ea331cb34A',
  },
  syscoin: {
    id: 57,
    name: 'Syscoin Mainnet',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.syscoin.org'
    ),
    layer: 1,
    pair: 'optimism',
    bridge: '0x9cc66f9B7b07F72a487FF751a7cBE281976fce7C',
  },
  "rollux-tanenbaum": {
    id: 57000,
    name: 'Rollux Tanenbaum (testnet)',
    layer: 2,
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc-tanenbaum.rollux.com/'
    ),
    pair: 'optimism',
    bridge: '0x4200000000000000000000000000000000000010',
  },
  rollux: {
    id: 570,
    name: 'Rollux Mainnet',
    layer: 2,
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.rollux.com'
    ),
    pair: 'optimism',
    bridge: '0x4200000000000000000000000000000000000010',
  },
}
