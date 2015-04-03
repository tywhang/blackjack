Blackjack.Models.Card = Backbone.Model.extend({

  initialize: function() {
    this.setValue();
    this.set('face', 'up');
  },

  setValue: function() {
    if (this.get('number') === 'A') {
      this.set('value', 11);
    } else if (_.contains(['10', 'J', 'Q', 'K'], this.get('number'))) {
      this.set('value', 10);
    } else {
      this.set('value', parseInt(this.get('number'), 10));
    }
  }
});
