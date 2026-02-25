# Ctrl Right-Click

Ctrl Right Click prevents accidental context menu activation by disabling right-click by default.
To open the browser's context menu, simply hold the **Ctrl** key while right-clicking.

This extension is designed for users who frequently trigger right-click unintentionally and want a simple, predictable way to reduce interruptions while browsing.

## Features

- Disables right-click unless a modifier key is pressed
- Lightweight and unobtrusive
- No tracking, analytics, or data collection

Ctrl Right Click focuses on improving control and reducing friction — nothing more, nothing less.

## Accessibility & Compatibility Note

Some web applications rely on custom context menus for core functionality (for example, Google Docs, Google Sheets, and similar web apps).
For the best experience in those applications, temporarily disable this extension while using them.

**Known browser-level limitations:**

The following pages are unaffected by this extension due to hard restrictions enforced by Chrome itself — these cannot be worked around:

- **New Tab page (`chrome://newtab`)** — Chrome does not permit extensions to run on `chrome://` pages. This is a browser security restriction that applies to all extensions.
- **Chrome Web Store (`chrome.google.com`)** — Chrome intentionally blocks all extensions from injecting into the Web Store to prevent interference or abuse.

## Installation

1. Download or clone this repository to a folder on your computer.

2. Open Chrome and navigate to `chrome://extensions`.

3. Enable **Developer mode** using the toggle in the top-right corner.

4. Click **Load unpacked**.

5. Select the folder containing the extension files (`manifest.json`, `content.js`).

6. The extension will appear in your extensions list and is now active.

## Usage

- **Right-click** — blocked on all pages
- **Ctrl + Right-click** — opens the context menu as normal

## Uninstalling

Go to `chrome://extensions`, find **Ctrl Right-Click**, and click **Remove**.

## License

MIT — see the [LICENSE](LICENSE) file for details.

## Version

1.3
