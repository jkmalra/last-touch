import {
	LastTouchView,
	VIEW_TYPE_LAST_TOUCH
} from './view/LastTouchView';

import { Plugin } from 'obsidian';

import {
	DEFAULT_SETTINGS,
	MyPluginSettings,
} from './settings';


export default class LastTouchPlugin extends Plugin {
	settings!: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(
			VIEW_TYPE_LAST_TOUCH,
			(leaf) => new LastTouchView(leaf)
		);

		this.addCommand({
			id: 'open-last-touch-view',
			name: 'Open Last Touch View',
			callback: async () => {
				await this.activateView();
			}
	});
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<MyPluginSettings>,
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	

	async activateView() {
    const leaf = this.app.workspace.getRightLeaf(false);

    if (!leaf) {
        return;
    }

    await leaf.setViewState({
        type: VIEW_TYPE_LAST_TOUCH,
        active: true
    });

    this.app.workspace.revealLeaf(leaf);
	}


}
