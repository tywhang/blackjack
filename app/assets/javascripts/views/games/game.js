Blackjack.Views.Game = Backbone.View.extend({

  initialize: function() {
    this.dealer = new Blackjack.Models.Dealer();
    this.player = new Blackjack.Models.Player();
    this.deck = new Blackjack.Collections.Deck();
  }
});
