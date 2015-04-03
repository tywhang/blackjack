Blackjack.Collections.Deck = Backbone.Collection.extend({
  model: Blackjack.Models.Card,

  initialize: function() {
    var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var suits = ['S', 'C', 'D', 'H'];

    _.each(numbers, _.bind(function(number) {
      _.each(suits, _.bind(function(suit) {
        this.add(new Blackjack.Models.Card({
          number: number,
          suit: suit
        }));
      }, this));
    }, this));
  }
});
