import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.idto = async (first: string) => {
    const {
      strings,
      template: { generate },
    } = toolbox

    const upper = strings.upperFirst(strings.singular(first))

    await generate({
      template: './modules/dto.ts.ejs',
      target: `./src/app/modules/${first}/${first}.dto.ts`,
      props: { first, upper },
    })

    toolbox.print.info(`Generated dto at ${first}.ts`)
  }
}
