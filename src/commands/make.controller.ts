import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:controller',
  alias: ['m:controller'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, controller, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await controller(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await controller(plural)
    }
  },
}
