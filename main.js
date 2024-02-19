const {app, BrowserWindow} = require('electron') ;

function CreateWindow(){
    const ventana = new BrowserWindow({
        width: 650,
        height: 510,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });
    ventana.loadFile('index.html')
}

app.whenReady().then(CreateWindow)