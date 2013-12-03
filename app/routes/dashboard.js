var DashboardRoute = Ember.Route.extend({
	actions: {
		create: function(){
			this.transitionTo('campaignCreator.new');
		}
	}
});

export default DashboardRoute;
