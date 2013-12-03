var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('user', function(){
    this.route('signup');
  });
  this.route('component-test');
  this.route('helper-test');
  this.route('login', {path: '/'});
  this.route('dashboard');
  this.route('terms');
  this.route('info');
  this.resource('campaignCreator', function() {
    this.route('new');
    this.route('success');
  });
  this.resource('myCampaigns', function(){
  	this.route('all');
  	this.route('show', {path: '/:campaign_id'});
  });
  this.route('winner');
});

Router.reopen({
	location: 'history'
});

export default Router;
