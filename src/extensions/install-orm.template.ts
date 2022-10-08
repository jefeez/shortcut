import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.ormTemplate = async (name) => {
    await toolbox.template.generate({
      template: `orm/${name}.ts.ejs`,
      target: `./src/providers/${name}.ts`,
    })
    toolbox.print.info(`Generated provider at ${name}.ts`)
  }
}
