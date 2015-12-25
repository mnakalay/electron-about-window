var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var BrowserWindow = electron.BrowserWindow;
var openAboutWindow = require('..').default;
var join = require('path').join;

app.once('window-all-closed',function() { app.quit(); });

app.once('ready', function() {
    var w = new BrowserWindow();
    w.once('closed', function() { w = null; });
    w.loadURL('file://' + join(__dirname, 'index.html'));
    w.webContents.openDevTools({detach: true});

    const menu = Menu.buildFromTemplate([
        {
            label: 'Example',
            submenu: [
                {
                    label: 'About',
                    click: function() {
                        openAboutWindow(
                            join(__dirname, 'icon.png'),
                            'Copyright (c) 2015 rhysd',
                            'https://github.com/rhysd/about-window'
                        );
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
});
