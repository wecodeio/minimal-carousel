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

Carousel.prototype.next = function (is_interval_call) {
  'use strict';
  for (var s = 0; s < this.slides.length; s += 1) {
    this.slides[s].style.display = 'none';
  }
  this.current_slide = (this.current_slide + 1) % this.slides.length;
  this.slides[this.current_slide].style.display = 'block';
  if (this.autoplay && this.interval && !is_interval_call) {
    var that = this;
    clearInterval(this.interval);
    this.interval = setTimeout(function () {
      that.play();
    }, this.delay * 1000);
  }
};

Carousel.prototype.prev = function () {
  'use strict';
  for (var s = 0; s < this.slides.length; s += 1) {
    this.slides[s].style.display = 'none';
  }
  this.current_slide = Math.abs(this.current_slide - 1 + this.slides.length) % this.slides.length;
  this.slides[this.current_slide].style.display = 'block';
  if (this.autoplay && this.interval) {
    var that = this;
    clearInterval(this.interval);
    this.interval = setTimeout(function () {
      that.play();
    }, this.delay * 1000);
  }
};

Carousel.prototype.play = function () {
  'use strict';
  this.next(true);
  var that = this;
  this.autoplay = true;
  this.interval = setTimeout(function () {
    that.play();
  }, this.delay * 1000);
};

Carousel.prototype.stop = function () {
  'use strict';
  if (this.interval) {
    this.autoplay = false;
    clearInterval(this.interval);
  }
};
