(function() { "use strict";

  if(!document.querySelector || !document.querySelectorAll || !window.addEventListener || !document.body.classList || !window.postMessage)
    return alert('Um Himmels Willen, update doch mal deinen Browser!');

  if(document.querySelector('.js-spy')) {
    var spy = {

      update: function() {
        this.elements  = document.querySelector('.js-spy');
        this.selectors = this.elements.querySelectorAll('[href^="#"]');
        this.targets   = [];
        this.offsets   = [];
        this.current;

        for(var i = this.selectors.length - 1; i >= 0; i--) {
          this.targets[i] = document.querySelector(this.selectors[i].hash);
          this.offsets[i] = this.targets[i].offsetTop;
        };

        this.process();
      },

      process: function() {
        var old = this.current;

        for(var i = 0; i <= this.offsets.length - 1; i++) {
          if(window.scrollY >= this.offsets[i])
            this.current = this.selectors[i];
        };

        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          this.current = this.selectors[this.selectors.length - 1];
        }

        if(this.current !== old) {
          if(old) old.parentNode.classList.remove('active');
          this.current.parentNode.classList.add('active');
        }
      }

    };

    window.addEventListener('load', function() {
      spy.update();

      window.addEventListener('resize', function() { spy.update(); }, false);
      window.addEventListener('scroll', function() { spy.process(); }, false);
    }, false);
  }

  if(window.parent !== window) {
    document.addEventListener('keydown', function(e) {
      if(e.keyCode !== 27) {
        return;
      }

      window.parent.postMessage('keydown:27', '*');
    });
  }
})();