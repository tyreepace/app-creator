var LoginController = Ember.Controller.extend({
	actions: {
		login: function(){
			this.transitionToRoute('dashboard');
		}
	}
});

export default LoginController;