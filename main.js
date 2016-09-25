const {app, Tray, Menu, powerSaveBlocker, BrowserWindow} = require('electron');
const path = require('path');

let appIcon;
let win;
const disabledIconPath = path.join(__dirname, 'assets', 'logo.png');
const appSuspensionIconPath = path.join(__dirname, 'assets', 'suspend.png');
const displaySleepIconPath = path.join(__dirname, 'assets', 'display.png');

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(disabledIconPath);
  let blocker_id = null;
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Prevent app suspension',
      type: 'radio',
      icon: appSuspensionIconPath,
      click: function() {
        if (blocker_id)
          powerSaveBlocker.stop(blocker_id);
        blocker_id = powerSaveBlocker.start('prevent-app-suspension');
      }
    },
    {
      label: 'Prevent display sleep',
      type: 'radio',
      icon: displaySleepIconPath,
      click: function() {
        if (blocker_id)
          powerSaveBlocker.stop(blocker_id);
        blocker_id = powerSaveBlocker.start('prevent-display-sleep');
      }
    },
    {
      label: 'Disable',
      type: 'radio',
      icon: disabledIconPath,
      checked: true,
      click: function() {
        if (blocker_id)
          powerSaveBlocker.stop(blocker_id);
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setToolTip('Keep system awake');
  appIcon.setContextMenu(contextMenu);
});
