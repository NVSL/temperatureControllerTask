const { app, BrowserWindow } = require('electron')
function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('app.html')
  win.maximize()
}
app.on('ready', createWindow)