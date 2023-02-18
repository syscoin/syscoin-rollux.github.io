import fs from 'fs'

import { Command } from 'commander'
import { glob } from 'glob'

import { generate } from '../src/generate'
import { validate } from '../src/validate'
import { version } from '../package.json'


const program = new Command()

program
  .name('optl')
  .description('CLI for generating and validating tokenlists')
  .version(version)

program
  .command('chnetworks')
  .description('Change networks for all tokens which is under data dir')
  .requiredOption('--datadir <datadir>', 'Directory containing data files')
  .action(async (options) => {
    const items = glob.sync(`${options.datadir}/**/*.json`);


    if (items.length > 0) {
      items.forEach((path: string) => {
        const contents = JSON.parse(fs.readFileSync(path).toString())
        const replacementTokens = {
          tanenbaum: contents.tokens.ethereum || { address: '' },
          rollux: contents.tokens.optimism || { address: '' },
        }
        contents.tokens = replacementTokens;


        const newContents = JSON.stringify(contents, null, 4)

        fs.writeFileSync(path, newContents)
      })
    }

    process.exit(1)
  })

program
  .command('validate')
  .description('Validate tokenlist data files')
  .requiredOption('--datadir <datadir>', 'Directory containing data files')
  .option(
    '--tokens <tokens>',
    'Comma-separated list of tokens symbols to validate'
  )
  .action(async (options) => {
    const results = await validate(options.datadir, options.tokens.split(','))

    const errs = results.filter((r) => r.type === 'error')
    if (errs.length > 0) {
      for (const err of errs) {
        if (err.message.startsWith('final token list is invalid')) {
          // Message generated here is super long and doesn't really give more information than the
          // rest of the errors, so just print a short version of it instead.
          console.error(`error: final token list is invalid`)
        } else {
          console.error(`error: ${err.message}`)
        }
      }

      // Exit with error code so CI fails
      process.exit(1)
    }

    const warns = results.filter((r) => r.type === 'warning')
    if (warns.length > 0) {
      for (const warn of warns) {
        console.log(`warning: ${warn.message}`)
      }
    }
  })

program
  .command('generate')
  .description('Generates a tokenlist data file')
  .requiredOption('--datadir <datadir>', 'Directory containing data files')
  .requiredOption('--outfile <outfile>', 'Output file to write')
  .action(async (options) => {
    const list = generate(options.datadir)
    fs.writeFileSync(options.outfile, JSON.stringify(list, null, 2))
  })

program.parse()
