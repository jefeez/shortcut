import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:service',
  alias: ['m:service'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, service, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await service(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await service(plural)
    }
  },
}
