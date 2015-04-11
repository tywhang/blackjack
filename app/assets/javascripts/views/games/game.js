Blackjack.Views.Game = Backbone.View.extend({
  template: HandlebarsTemplates['games/index'],
  el: '.game-board',

  events: {
    'click .js-double': 'double',
    'click .js-split': 'split',
    'click .js-hit': 'hit',
    'click .js-stand': 'stand'
  },

  initialize: function() {
    this.dealer = new Blackjack.Models.Dealer();
    this.player = new Blackjack.Models.Player();
    this.deck = new Blackjack.Collections.Deck();
    this.deck.reset(this.deck.shuffle());
    this.startRound();
  },

  render: function() {
    this.$el.html(this.template());
    this.dealerHandView = new Blackjack.Views.Hand({
      owner: this.dealer,
      el: '.dealer-hand',
      collection: this.dealer.get('hand')
    });
    this.dealerHandView.render();
    this.playerHandView = new Blackjack.Views.Hand({
      owner: this.player,
      el: '.player-hand',
      collection: this.player.get('hand')
    });
    this.playerHandView.render();
    this.$el.find('.js-player-actions').hide();
    this.playerTurn();
  },

  startRound: function() {
    this.player.get('hand').add(this.deck.shift());
    this.dealer.get('hand').add(this.deck.shift().set('face', 'down'));
    this.player.get('hand').add(this.deck.shift());
    this.dealer.get('hand').add(this.deck.shift());
  },

  checkAce: function() {
    var dealerShowCard = this.dealer.get('hand').where({ face: 'up' })[0].get('number');
    if (dealerShowCard === 'A') {
      if (this.player.askInsurance()) {

      }
    }
  },

  playerTurn: function() {
    this.$el.find('.js-player-actions').show();
  },

  double: function() {

  },
  split: function() {

  },
  hit: function() {
    this.player.get('hand').add(this.deck.shift());
  },
  stand: function() {

  }
});
