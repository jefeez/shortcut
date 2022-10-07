import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:idto',
  alias: ['m:idto'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, idto, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await idto(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await idto(plural)
    }
  },
}
