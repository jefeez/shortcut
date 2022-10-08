/* eslint-disable prefer-regex-literals */
import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.ormPatching = async (name: string) => {
    await toolbox.patching.patch(`./src/app.ts`, {
      insert: `\nimport '@providers/${name}';`,
      after: new RegExp(`// orms`),
    })
    toolbox.print.info(`Updated file at app.ts`)
  }
}
