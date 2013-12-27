function Carousel(settings){
  'use strict';
  settings = settings || {};
  this.carousel = document.querySelector(settings.carousel || '.carousel');
  this.slides = this.carousel.querySelectorAll('ul li');
  this.delay = settings.delay || 2.5;
  this.autoplay = settings.autoplay === undefined ? true : settings.autoplay;

  this.slides_total = this.slides.length;
  this.current_slide = -1;

  if (this.autoplay) {
    this.play();
  }
}

Carousel.prototype.next = function () {
  'use strict';
  for (var s = 0; s < this.slides.length; s += 1) {
    this.slides[s].style.display = 'none';
  }
  this.current_slide = (this.current_slide + 1) % this.slides.length;
  this.slides[this.current_slide].style.display = 'block';
};

Carousel.prototype.prev = function () {
  'use strict';
  for (var s = 0; s < this.slides.length; s += 1) {
    this.slides[s].style.display = 'none';
  }
  this.current_slide = Math.abs(this.current_slide - 1) % this.slides.length;
  this.slides[this.current_slide].style.display = 'block';
};

Carousel.prototype.play = function () {
  'use strict';
  this.next();
  var that = this;
  if (this.autoplay) {
    this.interval = setTimeout(function () {
      that.play();
    }, this.delay * 1000);
  }
};
