var Contest = DS.Model.extend({
	// 'title': DS.attr(),
	// 'description': DS.attr(),
	// 'color': DS.attr(),
	// 'font': DS.attr(),
	// 'stylesheet': DS.attr(),
	'backgroundImg': DS.attr(),
	'heroImg': DS.attr(),
	'appIcon': DS.attr(),
	'shareIcon': DS.attr(),
	// 'url': DS.attr(),
	'textField1': DS.attr(),
	'textField2': DS.attr(),
	'textField3': DS.attr(),
	'textField4': DS.attr(),
	'textArea1': DS.attr()
});

export default Contest;

Contest.FIXTURES = [
	{ id: 1, textField1: 'First Name', textField2: 'Last Name', textField3: 'Email', textField4: 'Favorite Color', textArea1: "Tis but a flesh wound"}
];