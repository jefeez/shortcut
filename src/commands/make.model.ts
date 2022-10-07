import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:model',
  alias: ['m:model'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, model, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await model(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await model(plural)
    }
  },
}
