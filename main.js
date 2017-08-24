import { app, BrowserWindow } from 'electron';

let mainWindow = null;

app.on('window-all-closed', _ => {
   app.quit();
});

app.on('ready', _ => {

   mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      useContentSize: true,
      backgroundColor: "#252526"
   });

   //mainWindow.webContents.openDevTools();

   mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
