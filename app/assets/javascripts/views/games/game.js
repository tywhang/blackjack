Blackjack.Views.Game = Backbone.Marionette.ItemView.extend({
  template: HandlebarsTemplates['games/index'],
  el: '.game-board',

  ui: {
    dealerHand: '.dealer-hand',
    playerHand: '.player-hand',
    deal: '.js-deal',
    double: '.js-double',
    split: '.js-split',
    hit: '.js-hit',
    stand: '.js-stand'
  },

  events: {
    'click @ui.deal': 'startRound',
    'click @ui.double': 'double',
    'click @ui.split': 'split',
    'click @ui.hit': 'hit',
    'click @ui.stand': 'stand'
  },

  initialize: function() {
    this.dealer = new Blackjack.Models.Dealer();
    this.player = new Blackjack.Models.Player();
    this.deck = new Blackjack.Collections.Deck();
    this.deck.reset(this.deck.shuffle());
    this.mode = 'preGame';
  },

  templateHelpers: function() {
    return {
      preGame: this.mode == 'preGame',
      playerTurn: this.mode == 'playerTurn'
    };
  },

  onRender: function() {
    this.dealerHand = this.dealer.get('hand');
    this.dealerHandView = new Blackjack.Views.Hand({
      owner: this.dealer,
      el: this.ui.dealerHand,
      collection: this.dealerHand
    });
    this.dealerHandView.render();
    this.listenTo(this.dealerHand, 'add', this.render);
    this.playerHand = this.player.get('hand');
    this.playerHandView = new Blackjack.Views.Hand({
      owner: this.player,
      el: this.ui.playerHand,
      collection: this.playerHand
    });
    this.playerHandView.render();
  },

  startRound: function() {
    this.player.get('hand').add(this.deck.shift());
    this.dealer.get('hand').add(this.deck.shift().set('face', 'down'));
    this.player.get('hand').add(this.deck.shift());
    this.dealer.get('hand').add(this.deck.shift());

    // this.checkAce();
    this.listenTo(this.playerHand, 'add', this.render);
    this.playerTurn();
  },

  checkAce: function() {
    var dealerShowCard = this.dealer.get('hand').where({ face: 'up' })[0].get('number');
    if (dealerShowCard === 'A') {
      if (this.player.askInsurance()) {

      }
    }
  },

  playerTurn: function() {
    this.mode = 'playerTurn';
    this.render();
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
