Blackjack.Views.Game = Backbone.View.extend({

  initialize: function() {
    this.dealer = new Blackjack.Models.Dealer();
    this.player = new Blackjack.Models.Player();
    this.deck = new Blackjack.Collections.Deck();
    this.deck.reset(this.deck.shuffle());
    this.startRound();
  },

  startRound: function() {
    this.player.get('hand').add(this.deck.shift());
    this.dealer.get('hand').add(this.deck.shift().set('face', 'down'));
    this.player.get('hand').add(this.deck.shift());
    this.dealer.get('hand').add(this.deck.shift());

    this.checkAce();
  },

  checkAce: function() {
    var dealerShowCard = this.dealer.get('hand').where({ face: 'up' })[0].get('number');
    if (dealerShowCard === 'A') {
      if (this.player.askInsurance()) {

      }
    }
  }
});
