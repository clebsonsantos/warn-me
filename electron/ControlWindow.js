
function ControlWindow(win, tray) {
  function toggle() {
    if(win.isVisible()) {
      win.hide()
    } else {
      show()
    }
  }

  function show() {
    // PEGAR O POSICIONAMENTO DA WIN / TRAY
    const { x, y } = getPosition()
    // ATUALIZAR O POSICIONAMENTO DA WIN
    win.setPosition(x, y, false)
    // MOSTRAR A WIN
    win.show()
    win.focus()
  }

  function getPosition() {
    const winBounds = win.getBounds()
    const trayBounds = tray.getBounds()

    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
    const y = Math.round(trayBounds.y + trayBounds.height + 3)

    return {x, y}
  }

  return {
    toggle
  }
}

module.exports = ControlWindow

