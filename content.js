if (!window.__ctrlRightClickInstalled) {
  window.__ctrlRightClickInstalled = true;
  document.addEventListener("contextmenu", (e) => {
    if (!e.ctrlKey) {
      e.preventDefault();
    }
  }, true);
}
