var CampaignCreatorNewRoute = Ember.Route.extend({
	model: function() {
  		//return this.store.find('contest');
	    return {
	      textField1: "First Name",
	      textField2: "Last Name", 
		  textField3: "Email", 
		  textField4: "Favorite Color", 
		  textArea1: "Tis but a flesh wound",
		  headerImg: null,
		  description: "Here's where you get to tell people about your awesome contest. Make it count!"
	    };
  	}	
});

export default CampaignCreatorNewRoute;