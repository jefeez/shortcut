import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.validator = async (first: string) => {
    const {
      template: { generate },
    } = toolbox

    await generate({
      template: './modules/validator.ts.ejs',
      target: `./src/app/modules/${first}/${first}.validator.ts`,
      props: { first },
    })
  }
}
