if (!window.__shiftRightClickInstalled) {
  window.__shiftRightClickInstalled = true;
  document.addEventListener("contextmenu", (e) => {
    if (!e.shiftKey) {
      e.preventDefault();
    }
  }, true);
}
