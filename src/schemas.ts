export const ADDRESS_TYPE = {
  type: 'string',
  minLength: 42,
  maxLength: 42,
}

export const TOKEN_SCHEMA = {
  type: 'object',
  properties: {
    address: ADDRESS_TYPE,
    overrides: {
      bridge: ADDRESS_TYPE,
      name: {
        type: 'string',
      },
      symbol: {
        type: 'string',
      },
      decimals: {
        type: 'integer',
      },
    },
  },
  additionalProperties: false,
  required: ['address'],
}

export const TOKEN_DATA_SCHEMA = {
  type: 'object',
  properties: {
    nonstandard: {
      type: 'boolean',
    },
    nobridge: {
      type: 'boolean',
    },
    name: {
      type: 'string',
    },
    symbol: {
      type: 'string',
    },
    decimals: {
      type: 'integer',
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 150,
    },
    website: {
      type: 'string',
      format: 'uri',
    },
    twitter: {
      type: 'string',
    },
    tokens: {
      oneOf: [
        {
          type: 'object',
          properties: {
            syscoin: TOKEN_SCHEMA,
            "syscoin-tanenbaum": TOKEN_SCHEMA,
            rollux: TOKEN_SCHEMA,
            'rollux-tanenbaum': TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin', 'syscoin-tanenbaum', 'rollux', 'rollux-tanenbaum'],
        },
        {
          type: 'object',
          properties: {
            syscoin: TOKEN_SCHEMA,
            "syscoin-tanenbaum": TOKEN_SCHEMA,
            rollux: TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin', 'syscoin-tanenbaum', 'rollux', 'rollux-tanenbaum'],
        },
        {
          type: 'object',
          properties: {
            "syscoin-tanenbaum": TOKEN_SCHEMA,
            rollux: TOKEN_SCHEMA,
            'rollux-tanenbaum': TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin-tanenbaum', 'rollux', 'rollux-tanenbaum'],
        },
        {
          type: 'object',
          properties: {
            syscoin: TOKEN_SCHEMA,
            rollux: TOKEN_SCHEMA,
            'rollux-tanenbaum': TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin', 'rollux', 'rollux-tanenbaum'],
        },
        {
          type: 'object',
          properties: {
            syscoin: TOKEN_SCHEMA,
            'syscoin-tanenbaum': TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin', 'syscoin-tanenbaum'],
        },
        {
          type: 'object',
          properties: {
            rollux: TOKEN_SCHEMA,
            'rollux-tanenbaum': TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['rollux', 'rollux-tanenbaum'],
        },
        {
          type: 'object',
          properties: {
            syscoin: TOKEN_SCHEMA,
            rollux: TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin', 'rollux'],
        },
        {
          type: 'object',
          properties: {
            'syscoin-tanenbaum': TOKEN_SCHEMA,
            'rollux-tanenbaum': TOKEN_SCHEMA,
          },
          additionalProperties: false,
          required: ['syscoin-tanenbaum', 'rollux-tanenbaum'],
        },
      ],
    },
  },
  additionalProperties: false,
  required: ['name', 'symbol', 'decimals', 'tokens', 'description', 'website'],
}

module.exports = {
  TOKEN_DATA_SCHEMA,
}
