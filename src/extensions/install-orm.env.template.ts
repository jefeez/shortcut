import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.ormEnvTemplate = async () => {
    await toolbox.template.generate({
      template: `env/database.ts.ejs`,
      target: `./src/env/database.ts`,
    })
    toolbox.print.info(`Generated env at database.ts`)
  }
}
