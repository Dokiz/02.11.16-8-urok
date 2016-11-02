var Person = Backbone.Model.extend({

   defaults: {
       name: 'Mitya',
       age: 18,
       job: 'web-developer',
       hobbies: 'sport',
       words: 'Hello,World'
   }
});
//список людей
var PeopleCollection = Backbone.Collection.extend({
   model:Person
});
//вид списка людей
var peopView = Beckbone.View.extend({
	tagName: 'ul',
	
	initialize: function() {
		console.log();
	};
});

//вид одного человека
var PersonView = Backbone.View.extend(
    {
        tagName: 'li',
        template: '#perid',    
        initialize: function(){
            console.log('Иницилизация');
            console.log(this.model);
        },
        render: function(){
            console.log('Сработал рендер');    
            var tamplate = _.tamplate( $(this.tamplate).html() )
            this.$el.html( template(this.model.toJSON()) );
            $(document.body).append(personView.el);
        }
    }
);


var per = [{
    name: 'Lolo',
    age: 53,
    job: 'coder',

},
    {
        name: 'Mitri',
        age: 37,
        job: 'web-developer',
        hobbies: 'sport',
        words: 'Hello,World'
},
    {
        name: 'Sergey2',
        age: 18,
        job: 'web-developer',
        hobbies: 'sport',
        words: 'Hello,World'
}];
var peopleCollection = new PeopleCollection(per);