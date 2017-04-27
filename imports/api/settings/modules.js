import * as modules from '../../modules/bot/'



export function loadModules() {
	let mods = Meteor.settings.modules

	
	console.log(mods);

	for(mod in mods) {
		console.log(mods[mod]);
	}

}


