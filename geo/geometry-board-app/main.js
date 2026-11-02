const { app, BrowserWindow, Menu } = require('electron');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1400, height: 850, title: 'Geometry Board', autoHideMenuBar: true });
  w.loadFile('index.html');
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
