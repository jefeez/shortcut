/* eslint-disable prefer-regex-literals */
import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.ormEnvPatching = async (orm: string) => {
    if (orm === 'typeorm') {
      await toolbox.patching.patch(`./src/env/database.ts`, {
        insert: `\ntypeorm: {
          driver: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'shortcut',
        },`,
        after: new RegExp(`export const database = {`),
      })
    } else if (orm === 'mongoose') {
      await toolbox.patching.patch(`./src/env/database.ts`, {
        insert: `\nmongoose: {
          url: 'mongodb://localhost:27017/shortcut',
        },`,
        after: new RegExp(`export const database = {`),
      })
    }
    toolbox.print.info(`Updated file at database.ts`)
  }
}
