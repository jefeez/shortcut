import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.model = async (first: string) => {
    const {
      strings,
      template: { generate },
    } = toolbox

    const upper = strings.upperFirst(strings.singular(first))

    await generate({
      template: './modules/model.ts.ejs',
      target: `./src/app/modules/${first}/${first}.model.ts`,
      props: { first, upper },
    })
  }
}
