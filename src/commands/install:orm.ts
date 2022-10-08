import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'install:orm',
  alias: 'i:orm',
  description: 'install ORMs',
  run: async ({
    ormPackage,
    ormPrisma,
    ormPatching,
    ormTemplate,
    ormEnvTemplate,
    ormEnvPatching,
    // ormEnv,
    parameters,
    print,
  }) => {
    const { first, second } = parameters
    if (first === 'prisma') {
      await ormPrisma()
    } else if (first === 'mongoose') {
      await ormPackage(first)
      await ormTemplate(first)
      await ormPatching(first)
      await ormEnvTemplate()
      await ormEnvPatching(first)
      // await ormEnv(first)
    } else if (!second) {
      print.warning('You need specify driver')
    } else {
      await ormPackage(first, second)
      await ormTemplate(first)
      await ormPatching(first)
      await ormEnvTemplate()
      await ormEnvPatching(first)
      // await ormEnv(first, second)
    }
  },
}

module.exports = command
