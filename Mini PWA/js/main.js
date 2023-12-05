window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};

// Sacado de https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605