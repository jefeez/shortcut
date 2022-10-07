import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'new',
  alias: ['n'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      bootstrap,
      template: { generate },
      print: { info },
    } = toolbox

    await bootstrap(parameters.first)
  },
}
