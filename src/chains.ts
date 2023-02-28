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
      'https://rpc-bedrock.rollux.com/'
    ),
    pair: 'optimism',
    bridge: '0x4200000000000000000000000000000000000010',
  }
}
