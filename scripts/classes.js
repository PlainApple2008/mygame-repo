console.log('classes.js start');
class GameEntity {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.posx = x;
    this.posy = y;
    this.velocity = 0;
    this.displacement = directionEnum.none;
    this.type = undefined;
    this.name = '';
    // format:
    // [w, h, x, y, c, s]
    // :width, height, posx, posy, color, style:
    this.sprite = [0, 0, 0, 0, 0, 0];
  }

  setSprite(sprite = [null]) {
    this.sprite = sprite;
  }

  collides(entity) {
    if (this.posx < entity.posx + entity.width &&
      this.posx + this.width > entity.posx &&
      this.posy < entity.posy + entity.height &&
      this.posy + this.height > entity.posy) {
      return true;
    }
    return false;
  }

  doPhysics(entity) {
    if (this.collides(entity) && this.displacement !== directionEnum.none) {
      return null;
    }
    return null;
  }

  setX(x) {
    this.posx = x;
    this.displacement = directionEnum.none;
  }

  setY(y) {
    this.posy = y;
    this.displacement = directionEnum.none;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  move(velocity, directionAbbrev) {
    switch (directionAbbrev) {
      case 'nw':
        this.posx += -Math.abs(velocity);
        this.posy += -Math.abs(velocity);
        this.displacement = directionEnum.northwest;
        break;

      case 'n':
        this.posy += -Math.abs(velocity);
        this.displacement = directionEnum.north;
        break;

      case 'ne':
        this.posx += Math.abs(velocity);
        this.posy += -Math.abs(velocity);
        this.displacement = directionEnum.northeast;
        break;

      case 'w':
        this.posx += -Math.abs(velocity);
        this.displacement = directionEnum.west;
        break;

      case 'e':
        this.posx += Math.abs(velocity);
        this.displacement = directionEnum.east;
        break;

      case 'sw':
        this.posx += -Math.abs(velocity);
        this.posy += Math.abs(velocity);
        this.displacement = directionEnum.southwest;
        break;

      case 's':
        this.posy += Math.abs(velocity);
        this.displacement = directionEnum.south;
        break;

      case 'se':
        this.posx += Math.abs(velocity);
        this.posy += Math.abs(velocity);
        this.displacement = directionEnum.southeast;
        break;
    }
  }

  getX() {
    return this.posx;
  }

  getY() {
    return this.posy;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  setDirection(directionFlag) {
    this.displacement = directionFlag;
  }
}

class Player extends GameEntity {
  constructor(width, height, x = 0, y = 0) {
    super(width, height, x, y);
    super.name = 'Player';
    this.type = entityTypeEnum.mob;
    this.inventory = { 'slot1': null, 'slot2': null, 'slot3': null };
    this.hotbar = { 'slot1': null };
    this.usingSelectedItem = false;
    this.holdingSelectedItem = false;
    this.selectedHotbarItem = null;
  }

  setSelectedHotbarItem(item) {
    this.selectedHotbarItem = item;
  }
}

class Axe extends GameEntity {
  constructor(width, height, x = 0, y = 0) {
    super(width, height, x, y);
    super.name = 'Axe';
    this.type = entityTypeEnum.item;
    this.power = 1;
    this.stackable = false;
  }
}

class DirtBlock extends GameEntity {
  constructor(width, height, x = 0, y = 0) {
    super(width, height, x, y);
    super.name = 'DirtBlock';
    this.type = entityTypeEnum.block;
  }
}

class Tree extends GameEntity {
  constructor(width, height, x = 0, y = 0) {
    super(width, height, x, y);
    super.name = 'Tree';
    this.type = entityTypeEnum.block;
    this.harvestQuantity = 1;
    this.harvestName = 'wood';
  }
}

console.log('classes.js end');
