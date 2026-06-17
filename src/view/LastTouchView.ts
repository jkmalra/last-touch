import { App, ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_LAST_TOUCH = "last-touch-view";

export class LastTouchView extends ItemView {
    // constructor(leaf: WorkspaceLeaf) {
    //     super(leaf);
    // }

    private appRef: App;

    constructor(
        leaf: WorkspaceLeaf,
        app: App
    ) {
        super(leaf);
        this.appRef = app;
    }

    getViewType(): string {
        return VIEW_TYPE_LAST_TOUCH;
    }

    getDisplayText(): string {
        return " Last Touch";
    }

    async onOpen() {
    const container = this.contentEl;

    container.empty();

    container.createEl("h2", {
        text: " Last Touch"
    });

    const activeFile = this.appRef.workspace.getActiveFile();

    container.createEl("p", {
        text: activeFile
            ? `File: ${activeFile.name}`
            : "No file selected"
    });

    // container.createEl("p", {
    //     text: " No file selected"
    // });
    
    }

    async onClose() {}
}