# minimal carousel

A minimalist carousel. No jQuery.

## Demo

[See it live!](http://labs.wecode.io/minimal-carousel/)

## Options

* `carousel`: css selector of carousel container. Defaults to `.carousel`
* `delay`: delay between slides in seconds. Defaults to `2.5` secs
* `autoplay`: whether or not it plays automaticaly. Defaults to `true`

##  Usage

### HTML

    <div class="carousel">
      <ul>
        <li>
          First impressive message!
        </li>
        <li>
          Second message with all the magic
        </li>
        <li>
          Also, you can configure minimal carousel as you want.
        </li>
      </ul>
    </div>

### CSS

    .carousel ul li {
      display: none;
    }

### Javascript

    new Carousel({
      carousel: '.carousel',
      delay: 2.5,
      autoplay: true
    })

## Roadmap

* Simple transitions
* Ease in/out

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
