function openNav () 
{
  document.getElementById("mainSideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("mainSideNav").style.visibility = "visible";
  document.getElementById("main").setAttribute('aria-hidden', 'true');
  var mainLinks = document.getElementById("main").getElementsByTagName("a");
  for (var i = 0; i < mainLinks.length; i++) {
    mainLinks[i].setAttribute('tabindex', '-1');
  }
  var mainButtons = document.getElementById("main").getElementsByTagName("button");
  for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].setAttribute('disabled', 'true');
  }
  setTimeout(function () { document.getElementById("closenav").focus(); }, 500);
}

function closeNav () 
{
  document.getElementById("mainSideNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("mainSideNav").style.visibility = "hidden";
  document.getElementById("main").removeAttribute('aria-hidden');
  var mainLinks = document.getElementById("main").getElementsByTagName("a");
  for (var i = 0; i < mainLinks.length; i++) {
    mainLinks[i].removeAttribute('tabindex');
  }
  var mainButtons = document.getElementById("main").getElementsByTagName("button");
  for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].removeAttribute('disabled');
  }
  document.getElementById("main").focus();
}

// Themes

function openNavThemes () 
{
  document.getElementById("SideNavThemes").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("SideNavThemes").style.visibility = "visible";
  document.getElementById("main").setAttribute('aria-hidden', 'true');
  var mainLinks = document.getElementById("main").getElementsByTagName("a");
  for (var i = 0; i < mainLinks.length; i++) {
    mainLinks[i].setAttribute('tabindex', '-1');
  }
  var mainButtons = document.getElementById("main").getElementsByTagName("button");
  for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].setAttribute('disabled', 'true');
  }
  setTimeout(function () { document.getElementById("closenav").focus(); }, 500);
}

function closeNavThemes () 
{
  document.getElementById("SideNavThemes").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("SideNavThemes").style.visibility = "hidden";
  document.getElementById("main").removeAttribute('aria-hidden');
  var mainLinks = document.getElementById("main").getElementsByTagName("a");
  for (var i = 0; i < mainLinks.length; i++) {
    mainLinks[i].removeAttribute('tabindex');
  }
  var mainButtons = document.getElementById("main").getElementsByTagName("button");
  for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].removeAttribute('disabled');
  }
  document.getElementById("main").focus();
}

// Languages

function openNavLanguages () 
{
  document.getElementById("SideNavLanguages").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("SideNavLanguages").style.visibility = "visible";
  document.getElementById("main").setAttribute('aria-hidden', 'true');
  var mainLinks = document.getElementById("main").getElementsByTagName("a");
  for (var i = 0; i < mainLinks.length; i++) {
    mainLinks[i].setAttribute('tabindex', '-1');
  }
  var mainButtons = document.getElementById("main").getElementsByTagName("button");
  for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].setAttribute('disabled', 'true');
  }
  setTimeout(function () { document.getElementById("closenav").focus(); }, 500);
}

function closeNavLanguages () 
{
  document.getElementById("SideNavLanguages").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("SideNavLanguages").style.visibility = "hidden";
  document.getElementById("main").removeAttribute('aria-hidden');
  var mainLinks = document.getElementById("main").getElementsByTagName("a");
  for (var i = 0; i < mainLinks.length; i++) {
    mainLinks[i].removeAttribute('tabindex');
  }
  var mainButtons = document.getElementById("main").getElementsByTagName("button");
  for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].removeAttribute('disabled');
  }
  document.getElementById("main").focus();
}