var CampaignCreatorRoute = Ember.Route.extend({
	actions: {
		submit: function(){
			this.transitionTo('campaignCreator.success');
		}
	}
});

export default CampaignCreatorRoute;