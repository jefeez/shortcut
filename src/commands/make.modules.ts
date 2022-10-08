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
      modules,
      strings,
      prompt,
    } = toolbox

    const { first, options } = parameters

    const result = await prompt.ask([
      {
        type: 'select',
        name: 'orm',
        message: 'What orm model you will use in this module?',
        choices: ['Typeorm', 'Mongoose', 'Noone'],
      },
    ])

    if (options.singular) {
      const singular = strings.singular(first)
      await router(singular)
      await controller(singular)
      await service(singular)
      await repository(singular, result.orm)
      await model(singular, result.orm)
      await idto(singular)
      await validator(singular)
      await modules(singular)
    } else if (options.plural) {
      const plural = strings.plural(first)
      await router(plural)
      await controller(plural)
      await service(plural)
      await repository(plural, result.orm)
      await model(plural, result.orm)
      await idto(plural)
      await validator(plural)
      await modules(plural)
    }
  },
}
