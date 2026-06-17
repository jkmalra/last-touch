import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_LAST_TOUCH = "last-touch-view";

export class LastTouchView extends ItemView {
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType(): string {
        return VIEW_TYPE_LAST_TOUCH;
    }

    getDisplayText(): string {
        return " Last Touch";
    }

    async onOpen() {
        const container = this.containerEl;
        
        container.empty();

        container.createEl("h2", {
            text: " Last Touch"
        });
    }

    async onClose() {}
}