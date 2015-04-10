Blackjack.Views.Card = Backbone.View.extend({
  template: HandlebarsTemplates['card'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
