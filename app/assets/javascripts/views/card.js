Blackjack.Views.Card = Backbone.View.extend({
  template: HandlebarsTemplates['card'],

  render: function() {
    this.$el.html(this.template(_.extend(
      this.model.toJSON(),
      {
        faceUp: this.model.get('face') === 'up'
      }
    )));
  }
});
