const { ipcRenderer } = require('electron')

export const resetBluetooth = async () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('reset-bluetooth', (event, arg) => {
      resolve(arg)
    })
    ipcRenderer.send('reset-bluetooth')
  })
}
