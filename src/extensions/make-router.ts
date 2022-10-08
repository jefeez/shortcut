import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.router = async (first: string) => {
    const {
      template: { generate },
    } = toolbox

    await generate({
      template: './modules/router.ts.ejs',
      target: `./src/app/modules/${first}/router.ts`,
      props: { first },
    })
    toolbox.print.info(`Generated router at ${first}.ts`)
  }
}
