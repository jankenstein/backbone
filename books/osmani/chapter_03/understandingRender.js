var ListView = Backbone.View.extend({
	render: function(){
		var items = this.model.get('items');

		_.each(items, function(item){
			var itemView = new ItemView({model: item});
			this.$el.append(itemView.render().el);
		}, this);
	}
});

var ItemView = Backbone.View.extend({
	events: {},
	render: function(){
		this.$el.html(this.model.toJSON());
		return this;
	}
});

