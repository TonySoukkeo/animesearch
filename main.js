const electron = require("electron"),
  url = require("url"),
  path = require("path"),
  isDev = require("electron-is-dev"),
  mac = process.platform == "darwin";

const { app, BrowserWindow, Menu } = electron;

const startUrl =
  process.env.ELECTRON_START_URL ||
  url.format({
    pathname: path.join(__dirname, "../build/index.html"),
    protocol: "file:",
    slashes: true
  });

let mainWindow;

app.on("ready", createMainWindow);

function createMainWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    height: 1200,
    width: 1900
  });

  // Load the index.html of the app
  mainWindow.loadURL("http://localhost:3000/");

  const menu = Menu.buildFromTemplate(createMenuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on("close", () => (mainWindow = null));
}

// Create menu template
const createMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: mac ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle Dev Tools",
        click(item, focusedItem) {
          focusedItem.toggleDevTools();
        }
      }
    ]
  }
];

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

if (mac) createMenuTemplate.unshift({ label: "" });
