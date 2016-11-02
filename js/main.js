var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president',
        words: 'Hello,World',
    
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#person-id').html()),
   

    initialize: function() {
        this.render();
    },

    render: function() {
       
        this.$el.html(this.template(this.model.toJSON()));

        //$(document.body).append(this.el);
    }
});

var person = new Person;
var personView = new PersonView({model: person});
