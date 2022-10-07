import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'make:modules',
  alias: ['m:modules'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      router,
      controller,
      service,
      repository,
      model,
      idto,
      validator,
      strings,
    } = toolbox

    const { first, options } = parameters

    if (options.singular) {
      const singular = strings.singular(first)
      await router(singular)
      await controller(singular)
      await service(singular)
      await repository(singular)
      await model(singular)
      await idto(singular)
      await validator(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await router(plural)
      await controller(plural)
      await service(plural)
      await repository(plural)
      await model(plural)
      await idto(plural)
      await validator(plural)
    }
  },
}
