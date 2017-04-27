function loadModules() {
	let modules = Meteor.settings.modules

	console.log("hi");
	console.log(modules);

	for(module in modules) {
		console.log(module);
	}

}


