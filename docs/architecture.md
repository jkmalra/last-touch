## Phase 1: Plugin pannel foundation

### Create a custom Obsidian sidebar.

Obsidian Starts
        ↓
manifest.json
        ↓
main.js loads
        ↓
MyPlugin created
        ↓
onload()
        ↓
registerView()
        ↓
registerCommand()
        ↓
User runs command
        ↓
activateView()
        ↓
LastTouchView created
        ↓
onOpen()
        ↓
Display "Last Touch"


## Phase 2: Show Current File + Last Modified Time

adding:
- current file name
- last modified time

Example:
- File: AI Compliance.md
- Last Edited: 2 hours ago

Obsidian already know:
- Current active file
- Current active editor
- File metadata
- File path
- File modified time

> Need to fetch from Obsidian to plugin pannel