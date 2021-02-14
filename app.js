const { app, BrowserWindow } = require('electron')
const path = require('path')
const { ipcMain } = require('electron')
const { exec } = require('child_process')

async function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 200,
    titleBarStyle:"hiddenInset",
    frame: false,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile(path.join('client', 'dist', 'index.html'))
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(createWindow)

ipcMain.on('reset-bluetooth', (event, arg) => {
  const utilPath = path.join(__dirname, 'bin')

  const command = `${utilPath}/blueutil -p 0 && sleep 1 && ${utilPath}/blueutil -p 1`

  exec(command, (err, stdout, stderr) => {
    if (err || stderr) {
      console.error(err)
      return event.reply('reset-bluetooth', {
        message: 'Oops! something went wrong',
        error: err
      })
    }

    return event.reply('reset-bluetooth', {
      message: 'Done'
    })
  })
})
