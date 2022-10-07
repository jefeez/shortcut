import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:router',
  alias: ['m:router'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, router, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await router(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await router(plural)
    }
  },
}
