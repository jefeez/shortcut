import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'test',

  run: async (toolbox) => {
    const { print, prompt, parameters } = toolbox
    console.log(parameters)
    print.info('Welcome to shortcut CLI')

    const result = await prompt.ask([
      {
        type: 'select',
        name: 'orm',
        message: 'What orm model you will use in this module?',
        choices: ['Typeorm', 'Mongoose'],
      },
    ])
    console.log(result)
  },
}

module.exports = command
