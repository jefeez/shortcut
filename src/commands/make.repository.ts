import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:repository',
  alias: ['m:repository'],
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, repository, strings } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await repository(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await repository(plural)
    }
  },
}
