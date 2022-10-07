import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.controller = async (first: string) => {
    const {
      template: { generate },
    } = toolbox

    await generate({
      template: './modules/controller.ts.ejs',
      target: `./src/app/modules/${first}/${first}.controller.ts`,
      props: { first },
    })
  }
}
