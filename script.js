//your JS code here. If required.
const bname = navigator.appName;
const bversion = navigator.appVersion;

const msg = "You are using" + bname + "version" + bversion ;
let input1 = document.getElementById("browser-info");
input1.textContent = msg;
