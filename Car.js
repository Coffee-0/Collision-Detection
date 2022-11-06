class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  update() {
    if (this.controls.forward) {
      // this.y -= 2;
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      // this.y += 2;
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed) {
      this.speed = -this.maxSpeed;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.controls.left) {
      this.angle += 0.05;
    }
    if (this.controls.right) {
      this.angle -= 0.05;
    }

    this.y -= this.speed;
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(-this.angle);
    context.beginPath();
    context.rect(
      // x and y have to be at the center as the aprts overlap the center.
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    context.fill();
    context.restore();
  }
}
