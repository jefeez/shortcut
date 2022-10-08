import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.repository = async (first: string, orm: string) => {
    const {
      strings,
      template: { generate },
    } = toolbox

    const upper = strings.upperFirst(strings.singular(first))

    if (orm === 'Noone') {
      await generate({
        template: `./modules/repository.ts.ejs`,
        target: `./src/app/modules/${first}/${first}.repository.ts`,
        props: { first, upper },
      })
      toolbox.print.info(`Generated repository at ${first}.ts`)
    } else {
      await generate({
        template: `./modules/repository.${strings.lowerCase(orm)}.ts.ejs`,
        target: `./src/app/modules/${first}/${first}.repository.ts`,
        props: { first, upper },
      })
      toolbox.print.info(`Generated repository at ${first}.ts`)
    }
  }
}
