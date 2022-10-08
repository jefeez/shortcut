import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.ormPackage = async (packager: string, driver: string | undefined) => {
    toolbox.print.info(`Installing ORM: ${packager}`)
    await toolbox.packageManager.add(packager, { dev: false, dryRun: false })
    if (driver) {
      toolbox.print.info(`Installing Drive: ${driver}`)
      if (driver === 'postgres') {
        await toolbox.packageManager.add('pg', { dev: false, dryRun: false })
      }
      if (driver === 'mysql') {
        await toolbox.packageManager.add('mysql2', {
          dev: false,
          dryRun: false,
        })
      }
    }
  }
}
