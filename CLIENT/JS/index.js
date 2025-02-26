const { BrowserWindow } = require('@electron/remote');
const $ = require('../../node_modules/jquery');
const fs = require('fs');

async function onLoad() {

  var window = BrowserWindow.getFocusedWindow();
  setTimeout(() => {
    window.maximize();
  }, 250);
  document.getElementById('min').addEventListener('click', minWindow);
  document.getElementById('max').addEventListener('click', maxWindow);
  document.getElementById('exit').addEventListener('click', exitWindow);
}

function minWindow () {
  var window = BrowserWindow.getFocusedWindow();
  window.minimize();
}

var timer = 0;

function maxWindow () {
  var window = BrowserWindow.getFocusedWindow();
  if(window.isMaximized() == true){
    if(timer == 0){
      window.unmaximize();
      timer = 1;
    }
  }else{
    if(timer == 0){
      window.maximize();
      timer = 1;
    }
  }
  setTimeout(() => {
    timer = 0;
  }, 1000);
}

function exitWindow () {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
}