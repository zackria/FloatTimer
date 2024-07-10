

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
require("electron-reload")(__dirname);

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 200,
    frame: false,
    autoHideMenuBar: true,
    transparent: true,

    webPreferences: {
        preload: path.join(__dirname, "", "preload.js"),
    }
  });

  //win.webContents.openDevTools();



  ipcMain.on("close-app", () => {
    //console.log("close-app is called");
    app.quit();
  });

  win.setAlwaysOnTop(true, "floating", 1);
  //win.setVisibleOnAllWorkspaces(true);
  win.loadFile('index.html');

  //win.webContents.openDevTools();
}

app.whenReady().then(createWindow);


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
  
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});