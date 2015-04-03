Blackjack.Models.Player = Backbone.Model.extend({
  initialize: function() {
    var hand = new Blackjack.Collections.Hand();
    this.set('hand', hand);
  }
});
