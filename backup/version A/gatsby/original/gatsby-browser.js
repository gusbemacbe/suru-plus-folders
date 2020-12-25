// import CustomLayout from "./wrapPageElement"

import "./src/assets/css/global.css"

// export const wrapPageElement = CustomLayout

export const onClientEntry = () => 
{
  const userLang = navigator.language.substr(0, 2)

  if (userLang !== "pt" && !window.location.pathname.startsWith("/en")) 
  {
    window.location.pathname = `/en${window.location.pathname}`
  }
}