(function() {
  'use strict';

  var Spy = function() {
    this.update();
  };

  Spy.prototype.update = function() {
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
  };

  Spy.prototype.process = function() {
    var old = this.current;
    var found = false;

    for(var i = 0; i <= this.offsets.length - 1; i++) {
      if(window.scrollY >= this.offsets[i]) {
        found = true;
        this.current = this.selectors[i];
      }
    };

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.current = this.selectors[this.selectors.length - 1];
    }

    if(this.current !== old) {
      if(old) old.parentNode.classList.remove('active');
      this.current.parentNode.classList.add('active');
    }

    if(!found && this.current) {
      this.current.parentNode.classList.remove('active');
      this.current = null;
    }
  }

  if(!document.querySelector ||
     !document.querySelectorAll ||
     !document.documentElement.classList ||
     !window.addEventListener ||
     !window.postMessage ||
     !Function.prototype.bind) {
    return alert('Um Himmels Willen, update doch mal deinen Browser!');
  }

  if(document.querySelector('.js-spy')) {
    window.addEventListener('load', function() {
      var spy = new Spy();

      window.addEventListener('resize', spy.update.bind(spy), false);
      window.addEventListener('scroll', spy.process.bind(spy), false);
    }, false);
  }

  if(window.parent !== window) {
    document.addEventListener('keydown', function(e) {
      if(e.keyCode !== 27) return;

      window.parent.postMessage('keydown:27', '*');
    }, false);
  }
})();