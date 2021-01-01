"use strict";

function openNav() {
  document.getElementById("SidebarLeft").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("SidebarLeft").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function openNavBottom() {
  document.getElementById("SidebarBottom").style.height = "185px";
}

function closeNavBottom() {
  document.getElementById("SidebarBottom").style.height = "0";
}

function openNavRight() {
  document.getElementById("SidebarRight").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNavRight() {
  document.getElementById("SidebarRight").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}