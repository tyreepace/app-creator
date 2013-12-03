var UserSignupRoute = Ember.Route.extend({	
	model: function(){
		return this.store.createRecord('user');
	}
});

export default UserSignupRoute;