import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'shortcut',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to shortcut CLI')
  },
}

module.exports = command
