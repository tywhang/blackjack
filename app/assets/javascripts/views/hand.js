Blackjack.Views.Hand = Backbone.View.extend({
  template: HandlebarsTemplates['hand'],

  initialize: function(options) {
    this.owner = options.owner;
  },

  render: function() {
    this.$el.html(this.template({
      total: this.collection.total()
    }));
    _.each(this.collection.models, _.bind(function(card) {
      var cardView = new Blackjack.Views.Card({ model: card });
      cardView.render();
      this.$el.append(cardView.$el);
    }, this));
  }
});
