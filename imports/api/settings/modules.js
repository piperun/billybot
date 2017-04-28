import * as modules from '../../modules/bot/'


function checkDuplicate(array) {
	return Array.from(new Set(array));
}

function execModule(mod) {
	var modTable = {
		"Trello": function() {
			modules.Trello();
		}
	};

	if (typeof modTable[mod] !== 'function') {
    //throw new Error('Invalid module.');
    console.log("\x1b[33mWarn:!!Invalid module selected!!\x1b[0m\nPlease make sure you have\nWritten the module correctly!");
    console.log("Inserted name ");
    console.log("Available modules:", modules);
    return;
	}
	modTable[mod]();
}

export function loadModules() {
	let mods = Meteor.settings.modules

	console.log(checkDuplicate(mods));


	for(mod in mods) {
		execModule(mods[mod]);
	}

}


