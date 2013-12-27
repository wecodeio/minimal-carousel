function Carousel(settings){
  this.carousel = document.querySelector(settings.carousel === undefined ? '.carousel' : settings.carousel)
  this.slides = this.carousel.querySelectorAll('ul li')
  this.delay = (settings.delay === undefined ? 2.5 : settings.delay);
  this.autoplay = (settings.autoplay === undefined ? true : settings.autoplay);

  this.slides_total = this.slides.length
  this.current_slide = -1

  if (this.autoplay) this.play()
}

Carousel.prototype.next = function () {
  for (s = 0; s < this.slides_total; s++) {
      this.slides[s].style.display = 'none'
  }
  this.current_slide = (this.current_slide + 1) % this.slides_total
  this.slides[this.current_slide].style.display = 'block'
};

Carousel.prototype.prev = function () {
  for (s = 0; s < this.slides_total; s++) {
      this.slides[s].style.display = 'none'
  }
  this.current_slide = Math.abs(this.current_slide - 1) % this.slides_total
  this.slides[this.current_slide].style.display = 'block'
};

Carousel.prototype.play = function () {
  this.next();
  var temp = this
  if (this.autoplay) {
    setTimeout(function () {
      temp.play();
    }, this.delay * 1000);
  }
};