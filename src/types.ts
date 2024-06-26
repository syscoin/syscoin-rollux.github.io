export interface Token {
  address: string
  overrides?: {
    bridge?: string
    name?: string
    symbol?: string
    decimals?: number
  }
}

export interface TokenData {
  nonstandard?: boolean
  nobridge?: boolean
  twitter?: string
  name: string
  symbol: string
  decimals: number
  description: string
  website: string
  tokens: {
    tanenbaum?: Token
    rollux?: Token
  }
}

export interface ValidationResult {
  type: 'error' | 'warning'
  message: string
}
