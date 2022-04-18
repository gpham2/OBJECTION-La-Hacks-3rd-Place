(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content-script.js.05726d48.js")
    );
  })().catch(console.error);

})();
