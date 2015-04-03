Blackjack.Models.Dealer = Backbone.Model.extend({
  
  initialize: function() {
    var hand = new Blackjack.Collections.Hand();
    this.set('hand', hand);
  }
});
