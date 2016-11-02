var Person = Backbone.Model.extend({
    defaults: {
        name: 'Nick',
        age: 23,
        occupation: 'developer'
		}
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
	
	template: _.template( $('#person-id').html() ),
	 
	 initialize: fucntion(){
		 this.render();
	 },
	 
	 render: function(){
		 this.$el.html( this.template(this.model.toJSON()) );
	 }
});

var person = new Person;
var personView = new PersonView({model:person});	 
   