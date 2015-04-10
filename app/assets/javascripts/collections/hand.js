Blackjack.Collections.Hand = Backbone.Collection.extend({
  model: Blackjack.Models.Card,

  total: function(model) {
    var total = 0;
    _.each(this.models, _.bind(function(model) {
      total += model.get('value');
    }, this));
    return total;
  }
});
