Blackjack.Models.Player = Backbone.Model.extend({

  initialize: function() {
    var hand = new Blackjack.Collections.Hand();
    this.set('hand', hand);
  },

  askInsurance: function() {
    var answer = confirm('Would you like to buy insurance?');
    return answer;
  }
});
