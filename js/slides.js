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

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return slide.offsetLeft - margin;
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        element,
        position,
      };
    });
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(this.slideArray[index].position);
    this.slideIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
  }

  onStart(e) {
    let moveType;
    if (e.type === "mousedown") {
      e.preventDefault(); // prevent to drag the img
      this.dist.startX = e.clientX; // get the start pointer position
      moveType = "mousemove";
    } else {
      this.dist.startX = e.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);
  }
  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.4; // calculate the startX - the x pointer position during the mouse move
    return this.dist.movement + this.dist.finalPosition;
  }
  moveSlide(distx) {
    this.dist.movePosition = distx;
    this.slide.style.transform = `translate3d(${-distx}px, 0px, 0px)`;
  }

  onMove(e) {
    const pointerPosition =
      e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;
    const position = this.updatePosition(pointerPosition);
    this.moveSlide(position);
  }

  onEnd(e) {
    const moveType = e.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  init() {
    this.bindEvents();
    this.addSlideEvent();
    this.slidesConfig();
    return this;
  }
}
