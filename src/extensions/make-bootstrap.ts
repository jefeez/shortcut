import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands

const files = [
  './tsconfig.json',
  'package.json',
  '.prettierrc',
  '.gitignore',
  '.eslintrc.json',
  '.env',
  '.editorconfig',
  './src/server.ts',
  './src/app.ts',
  './src/app/modules/modules.ts',
]

module.exports = (toolbox: GluegunToolbox) => {
  toolbox.bootstrap = async (first: string) => {
    const {
      template: { generate },
    } = toolbox

    const alls = files.map(async (value) =>
      generate({
        template: `./bootstrap/${value}.ejs`,
        target: `./${first}/${value}`,
        props: { first },
      })
    )

    Promise.all(alls)
  }
}
