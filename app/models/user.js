var User = ParseUserModel.extend({
	'name': DS.attr('string'),
	'email': DS.attr('string'),
	'password': DS.attr('string')
});

export default User;