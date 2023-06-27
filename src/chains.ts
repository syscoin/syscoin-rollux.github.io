import { ethers } from 'ethers'

export const NETWORK_DATA = {
  tanenbaum: {
    id: 5700,
    name: 'Tanenbaum',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.tanenbaum.io'
    ),
    layer: 1,
    pair: 'optimism',
    bridge: '0x77Cdc3891C91729dc9fdea7000ef78ea331cb34A',
  },
  rollux: {
    id: 57000,
    name: 'RolluxTest',
    layer: 2,
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc-tanenbaum.rollux.com/'
    ),
    pair: 'optimism',
    bridge: '0x4200000000000000000000000000000000000010',
  },
  rollux_mainnet: {
    id: 570,
    name: 'RolluxMainnet',
    layer: 2,
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.rollux.com'
    ),
    pair: 'optimism',
    bridge: '0x4200000000000000000000000000000000000010',
  },
  syscoin_nevm: {
    id: 57,
    name: 'SyscoinNevm',
    provider: new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.syscoin.org'
    ),
    layer: 1,
    pair: 'optimism',
    bridge: '0x9cc66f9B7b07F72a487FF751a7cBE281976fce7C',
  },
  
}
