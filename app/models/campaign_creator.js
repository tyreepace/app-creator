var CampaignCreator = DS.Model.extend({
	'type': DS.attr(),
	'createdDate': DS.attr(),
	'startDate': DS.attr(),
	'endDate': DS.attr()
});

export default CampaignCreator;