var electron = require('electron')
var remote = electron.remote;
var autoUpdater = remote.autoUpdater;
console.log(autoUpdater)
autoUpdater.setFeedURL('http://localhost:3000//update/win32');
autoUpdater.checkForUpdates();
autoUpdater.on('update-available', function(){
	console.log('update is available');
})
autoUpdater.on('update-not-available', function(){
	console.log('update is not available');
})
//var autoUpdater = remote.require(auto-updater);
//autoUpdater.setFeedURL('https://domain.com/' + platform + '/' + version');
//autoUpdater.checkForUpdates();
//console.log(autoUpdater);
