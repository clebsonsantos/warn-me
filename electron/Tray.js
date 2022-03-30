const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'emails.png')

function createTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Warn Me')
  
  return tray
}

module.exports = createTray()