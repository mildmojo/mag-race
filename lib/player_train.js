(function(exports){

  exports.PlayerTrain = PlayerTrain;

  var TRAINS = [
    'blue',
    'pink',
    'olive'
  ];

  function PlayerTrain(index, game) {
    this._index = index;
    this._game = game;

    this.isFalling = false;

    this.top_train = game.add.sprite(10, 100, TRAINS[index] + '_top');
    this.bottom_train = game.add.sprite(10, 100 + this.top_train.height + 20, TRAINS[index] + '_bottom');
    game.physics.enable(this.top_train);
    game.physics.enable(this.bottom_train);
  }

  var $class = PlayerTrain.prototype;

  $class.speedUp = function(factor) {
    this.top_train.body.velocity.x += factor || 5;
    this.bottom_train.body.velocity.x += factor || 5;
  };

  $class.slowDown = function(factor) {
    this.top_train.body.velocity.x -= factor || 5;
    this.bottom_train.body.velocity.x -= factor || 5;

  };

  $class.fallOff = function() {
    this.isFalling = true;
  };

  $class.update = function() {
    if (this.isFalling) {
      this.top_train.body.velocity.y = -100;
    }
  };

})(window);
