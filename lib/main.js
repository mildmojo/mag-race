var game = new Phaser.Game(960, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var cursors;
var train;
var track;

function preload() {

    //  Specify a unique key and a URL path
    //  The key must be unique between all images.
    game.load.image('pink_top', 'assets/images/pink_top.png');
    game.load.image('pink_bottom', 'assets/images/pink_bottom.png');
    game.load.image('blue_top', 'assets/images/blue_top.png');
    game.load.image('blue_bottom', 'assets/images/blue_bottom.png');
    game.load.image('olive_top', 'assets/images/olive_top.png');
    game.load.image('olive_bottom', 'assets/images/olive_bottom.png');
    game.load.image('track', 'assets/images/track.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  train = new PlayerTrain(2, game);
  track = game.add.sprite(0, 0, 'track');

  // game.camera.follow(train);

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  if (cursors.right.isDown) {
    train.speedUp();
  }

  if (cursors.left.isDown) {
    train.slowDown();
  }
}
