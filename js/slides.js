export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  onStart(e) {
    e.preventDefault(); // prevent to drag the img
    this.dist.startX = e.clientX; // get the start pointer position
    this.wrapper.addEventListener("mousemove", this.onMove);
  }
  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.4; // calculate the startX - the x pointer position during the mouse move
    console.log(this.dist.movement + this.dist.finalPosition);
    return this.dist.movement + this.dist.finalPosition;
  }
  moveSlide(distx) {
    this.dist.movePosition = distx;
    this.slide.style.transform = `translate3d(${-distx}px, 0px, 0px)`;
  }

  onMove(e) {
    const position = this.updatePosition(e.clientX);
    this.moveSlide(position);
  }

  onEnd(e) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    console.log(this.dist);
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  init() {
    this.bindEvents();
    this.addSlideEvent();
    return this;
  }
}
