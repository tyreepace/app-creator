var SignupController = Ember.Controller.extend({

	actions: {
		createAccount: function(model){
			var name = this.get('name');
			var email = this.get('email');
			var password = this.get('password');
			model.set("name", name);
			model.set("password", password);
			model.set("email", email);
			model.signUp(null, {
	  			success: function(model) {
	    			console.log('We have success');
	    			this.transitionToRoute('dashboard', model);
	  			},
	  			error: function(model, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + " " + error.message);
	  			}
			});
		}	
	}	
});

export default SignupController;