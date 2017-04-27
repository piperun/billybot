import * as modules from '../../modules/bot/'

function execModule(mod) {
	var modTable = {
		"Trello": function() {
			modules.Trello();
			return 0;
		}
	};

	if (typeof modTable[mod] !== 'function') {
    //throw new Error('Invalid module.');
    console.log("\x1b[33mWarn:!!Invalid module selected!!\x1b[0m\nPlease make sure you have\nWritten the module correctly!");
    console.log("Available modules:", modules);
    return;
	}
	modTable[mod]();
}

export function loadModules() {
	let mods = Meteor.settings.modules

	for(mod in mods) {
		execModule(mods[mod]);
	}

}


