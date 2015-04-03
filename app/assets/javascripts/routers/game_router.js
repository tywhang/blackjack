Blackjack.Routers.GameRouter = Backbone.Router.extend({
  routes: {
    "": "start"
  },

  start: function() {
    var gameView = new Blackjack.Views.Game();
  }
});
