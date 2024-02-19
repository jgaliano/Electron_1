const {app, BrowserWindow} = require('electron') ;

function CreateWindow(){
    const ventana = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    ventana.loadFile('index.html')
}

app.whenReady().then(CreateWindow)