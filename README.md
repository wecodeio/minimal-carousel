# minimal carousel

A minimalist carousel. No jQuery.

## Options

* `carousel`: css selector on carousel container. Defaults in `.carousel`
* `delay`: delay between slides. In seconds. Defaults in `2.5` secs
* `autoplay`: wether or not has to play automaticaly. Defaults in `true`

##  of usage

### HTML

    <div class="carousel">
      <ul>
        <li>
          First impressive message!
        </li>
        <li>
          Second message with all the magic
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