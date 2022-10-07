import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:validator',
  alias: ['m:validator'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, validator, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await validator(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await validator(plural)
    }
  },
}
