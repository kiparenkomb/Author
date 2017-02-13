(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

require('./my-owl-carousel');

require('./tilt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
	$(document).ready(function () {

		/*------------------------------------------------------------------*\
  													Mobile menu
  \*------------------------------------------------------------------*/
		//menu click event
		$('.menuBtn').click(function () {
			$(this).toggleClass('act');
			if ($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
			} else {
				$('.mainMenu').removeClass('act');
			}
		});

		/*------------------------------------------------------------------*\
  													Footer
  \*------------------------------------------------------------------*/
		//prallax scroll
		//init controller
		var controller = new ScrollMagic.Controller();
		//loop through each .bcg_parallax element
		$('.bcg_parallax').each(function () {
			// if (document.documentElement.clientWidth > 425) {
			//parallax scene
			var paralaxTl = new TimelineMax();
			paralaxTl.from('.bcg', 2, { y: '-75%', ease: Power0.easeNone }, 0);
			var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 1,
				duration: '100%'
			}).setTween(paralaxTl)
			// .addIndicators({
			// 		name: 'fade scene',
			// 		color: 'red',
			// 		indent: 100,
			// 		colorStart: 'black',
			// 		colorEnd: 'pink'
			// 	})
			.addTo(controller);
			// }
		});

		//form validation

		$(".callback-form").validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					minlength: 5,
					email: true
				},
				message: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				nameUser: {
					nameUser: "Enter your name!"
				},
				email: {
					required: "Enter Your E-mail!",
					email: "Please enter a valid E-mail!"
				},
				message: {
					required: "Enter your wishes!"
				}
			}
		});
	});
})(jQuery);

},{"./helpers":2,"./my-owl-carousel":3,"./tilt":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HP = {
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = HP;

},{}],3:[function(require,module,exports){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
    'use strict';

    var _owl$owlCarousel;

    var owl = $('.owl-carousel'),
        item,
        itemsBgArray = [],
        // to store items background-image
    itemBGImg;

    owl.owlCarousel((_owl$owlCarousel = {
        items: 1,
        smartSpeed: 2000,
        dragEndSpeed: 2000,
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 8000,
        // autoplaySpeed: 2000,
        loop: true,
        nav: true,
        navText: false
    }, _defineProperty(_owl$owlCarousel, 'autoHeight', true), _defineProperty(_owl$owlCarousel, 'onTranslated', function onTranslated() {
        changeNavsThump();
    }), _owl$owlCarousel));

    $('.active').addClass('anim');

    var owlItem = $('.owl-item'),
        owlLen = owlItem.length;
    /* --------------------------------
      * store items bg images into array
    --------------------------------- */
    $.each(owlItem, function (i, e) {
        itemBGImg = $(e).find('.owl-item-bg').attr('src');
        itemsBgArray.push(itemBGImg);
    });
    /* --------------------------------------------
      * nav control thump
      * nav control icon
    --------------------------------------------- */
    var owlNav = $('.owl-nav'),
        el;

    $.each(owlNav.children(), function (i, e) {
        el = $(e);
        // append navs thump/icon with control pattern(owl-prev/owl-next)
        el.append('<div class="' + el.attr('class').match(/owl-\w{4}/) + '-thump">');
        el.append('<div class="' + el.attr('class').match(/owl-\w{4}/) + '-icon">');
    });

    /*-------------------------------------------
      Change control thump on each translate end
    ------------------------------------------- */
    function changeNavsThump() {
        var activeItemIndex = parseInt($('.owl-item.active').index()),

        // if active item is first item then set last item bg-image in .owl-prev-thump
        // else set previous item bg-image
        prevItemIndex = activeItemIndex != 0 ? activeItemIndex - 1 : owlLen - 1,

        // if active item is last item then set first item bg-image in .owl-next-thump
        // else set next item bg-image
        nextItemIndex = activeItemIndex != owlLen - 1 ? activeItemIndex + 1 : 0;

        $('.owl-prev-thump').css({
            backgroundImage: 'url(' + itemsBgArray[prevItemIndex] + ')'
        });

        $('.owl-next-thump').css({
            backgroundImage: 'url(' + itemsBgArray[nextItemIndex] + ')'
        });
    }
    changeNavsThump();
});

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VanillaTilt = function () {
  'use strict';

  /**
   * Created by Șandor Sergiu (micku7zu) on 1/27/2017.
   * Original idea: https://github.com/gijsroge/tilt.js
   * MIT License.
   * Version 1.2.0
   */

  var VanillaTilt = function () {
    function VanillaTilt(element) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, VanillaTilt);

      if (!(element instanceof Node)) {
        throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
      }

      this.width = null;
      this.height = null;
      this.left = null;
      this.top = null;
      this.transitionTimeout = null;
      this.updateCall = null;

      this.updateBind = this.update.bind(this);

      this.element = element;
      this.settings = this.extendSettings(settings);

      this.reverse = this.settings.reverse ? -1 : 1;

      this.addEventListeners();
    }

    _createClass(VanillaTilt, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);

        this.element.addEventListener("mouseenter", this.onMouseEnterBind);
        this.element.addEventListener("mousemove", this.onMouseMoveBind);
        this.element.addEventListener("mouseleave", this.onMouseLeaveBind);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.element.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.element.removeEventListener("mousemove", this.onMouseMoveBind);
        this.element.removeEventListener("mouseleave", this.onMouseLeaveBind);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;

        this.element = null;
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter(event) {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(event) {
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }

        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave(event) {
        this.setTransition();

        if (this.settings.reset) {
          this.reset();
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this = this;

        requestAnimationFrame(function () {
          _this.event = {
            pageX: _this.left + _this.width / 2,
            pageY: _this.top + _this.height / 2
          };

          _this.element.style.transform = "perspective(" + _this.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
        });
      }
    }, {
      key: "getValues",
      value: function getValues() {
        var x = (this.event.clientX - this.left) / this.width;
        var y = (this.event.clientY - this.top) / this.height;

        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);

        var tiltX = (this.reverse * (this.settings.max / 2 - x * this.settings.max)).toFixed(2);
        var tiltY = (this.reverse * (y * this.settings.max - this.settings.max / 2)).toFixed(2);

        return {
          tiltX: tiltX,
          tiltY: tiltY,
          percentageX: x * 100,
          percentageY: y * 100
        };
      }
    }, {
      key: "updateElementPosition",
      value: function updateElementPosition() {
        var rect = this.element.getBoundingClientRect();

        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
      }
    }, {
      key: "update",
      value: function update() {
        var values = this.getValues();

        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

        this.element.dispatchEvent(new CustomEvent("tiltChange", {
          "detail": values
        }));

        this.updateCall = null;
      }
    }, {
      key: "setTransition",
      value: function setTransition() {
        var _this2 = this;

        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        this.transitionTimeout = setTimeout(function () {
          return _this2.element.style.transition = "";
        }, this.settings.speed);
      }
    }, {
      key: "extendSettings",
      value: function extendSettings(settings) {
        var defaultSettings = {
          reverse: false,
          max: 35,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: "1",
          speed: "300",
          transition: true,
          axis: null,
          reset: true
        };

        var newSettings = {};

        for (var property in defaultSettings) {
          if (property in settings) {
            newSettings[property] = settings[property];
          } else if (this.element.hasAttribute("data-tilt-" + property)) {
            var attribute = this.element.getAttribute("data-tilt-" + property);
            try {
              newSettings[property] = JSON.parse(attribute);
            } catch (e) {
              newSettings[property] = attribute;
            }
          } else {
            newSettings[property] = defaultSettings[property];
          }
        }

        return newSettings;
      }
    }], [{
      key: "init",
      value: function init(elements, settings) {
        if (elements instanceof Node) {
          elements = [elements];
        }

        if (elements instanceof NodeList) {
          elements = [].slice.call(elements);
        }

        if (!(elements instanceof Array)) {
          return;
        }

        elements.forEach(function (element) {
          if (!("vanillaTilt" in element)) {
            element.vanillaTilt = new VanillaTilt(element, settings);
          }
        });
      }
    }]);

    return VanillaTilt;
  }();

  if (typeof document !== "undefined") {
    /* expose the class to window */
    window.VanillaTilt = VanillaTilt;

    /**
     * Auto load
     */
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }

  return VanillaTilt;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcbXktb3dsLWNhcm91c2VsLmpzIiwic3JjXFxqc1xcdGlsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUdDLFdBQVUsQ0FBVixFQUFhO0FBQ2IsR0FBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFVOztBQUU3Qjs7O0FBR0U7QUFDQSxJQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDOUIsS0FBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixLQUFwQjtBQUNDLE9BQUcsRUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixLQUFqQixDQUFILEVBQTRCO0FBQzNCLE1BQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsS0FBeEI7QUFDQSxJQUZELE1BR0s7QUFDSixNQUFFLFdBQUYsRUFBZSxXQUFmLENBQTJCLEtBQTNCO0FBQ0E7QUFDRixHQVJEOztBQVVGOzs7QUFHRTtBQUNBO0FBQ0EsTUFBSSxhQUFhLElBQUksWUFBWSxVQUFoQixFQUFqQjtBQUNBO0FBQ0EsSUFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLFlBQVU7QUFDakM7QUFDQztBQUNBLE9BQUksWUFBWSxJQUFJLFdBQUosRUFBaEI7QUFDQSxhQUNFLElBREYsQ0FDTyxNQURQLEVBQ2UsQ0FEZixFQUNrQixFQUFDLEdBQUcsTUFBSixFQUFZLE1BQUssT0FBTyxRQUF4QixFQURsQixFQUNxRCxDQURyRDtBQUVBLE9BQUkscUJBQXFCLElBQUksWUFBWSxLQUFoQixDQUFzQjtBQUM5QyxvQkFBZ0IsSUFEOEI7QUFFOUMsaUJBQWEsQ0FGaUM7QUFHOUMsY0FBVTtBQUhvQyxJQUF0QixFQUt4QixRQUx3QixDQUtmLFNBTGU7QUFNekI7QUFDQTtB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WCxDQUF4QjtBQUNELGFBRkQsQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLDBCQUFZLFFBQVosSUFBd0IsU0FBeEI7QUFDRDtBQUVGLFdBUk0sTUFRQTtBQUNMLHdCQUFZLFFBQVosSUFBd0IsZ0JBQWdCLFFBQWhCLENBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxlQUFPLFdBQVA7QUFDRDtBQS9LNEI7QUFBQTtBQUFBLDJCQWlMakIsUUFqTGlCLEVBaUxQLFFBakxPLEVBaUxHO0FBQzlCLFlBQUksb0JBQW9CLElBQXhCLEVBQThCO0FBQzVCLHFCQUFXLENBQUMsUUFBRCxDQUFYO0FBQ0Q7O0FBRUQsWUFBSSxvQkFBb0IsUUFBeEIsRUFBa0M7QUFDaEMscUJBQVcsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLFFBQWQsQ0FBWDtBQUNEOztBQUVELFlBQUksRUFBRSxvQkFBb0IsS0FBdEIsQ0FBSixFQUFrQztBQUNoQztBQUNEOztBQUVELGlCQUFTLE9BQVQsQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDNUIsY0FBSSxFQUFFLGlCQUFpQixPQUFuQixDQUFKLEVBQWlDO0FBQy9CLG9CQUFRLFdBQVIsR0FBc0IsSUFBSSxXQUFKLENBQWdCLE9BQWhCLEVBQXlCLFFBQXpCLENBQXRCO0FBQ0Q7QUFDRixTQUpEO0FBS0Q7QUFuTTRCOztBQUFBO0FBQUE7O0FBc00vQixNQUFJLE9BQU8sUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQztBQUNBLFdBQU8sV0FBUCxHQUFxQixXQUFyQjs7QUFFQTs7O0FBR0EsZ0JBQVksSUFBWixDQUFpQixTQUFTLGdCQUFULENBQTBCLGFBQTFCLENBQWpCO0FBQ0Q7O0FBRUQsU0FBTyxXQUFQO0FBRUMsQ0FsTmtCLEVBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0ICcuL215LW93bC1jYXJvdXNlbCc7XG5pbXBvcnQgJy4vdGlsdCc7XG5cblxuKGZ1bmN0aW9uICgkKSB7XG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE1vYmlsZSBtZW51XG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXHRcdC8vbWVudSBjbGljayBldmVudFxuXHRcdCQoJy5tZW51QnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3QnKTtcblx0XHRcdFx0aWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0JykpIHtcblx0XHRcdFx0XHQkKCcubWFpbk1lbnUnKS5hZGRDbGFzcygnYWN0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0JCgnLm1haW5NZW51JykucmVtb3ZlQ2xhc3MoJ2FjdCcpO1xuXHRcdFx0XHR9XG5cdFx0fSk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZvb3RlclxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblx0XHQvL3ByYWxsYXggc2Nyb2xsXG5cdFx0Ly9pbml0IGNvbnRyb2xsZXJcblx0XHR2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cdFx0Ly9sb29wIHRocm91Z2ggZWFjaCAuYmNnX3BhcmFsbGF4IGVsZW1lbnRcblx0XHQkKCcuYmNnX3BhcmFsbGF4JykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0Ly8gaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDQyNSkge1xuXHRcdFx0XHQvL3BhcmFsbGF4IHNjZW5lXG5cdFx0XHRcdHZhciBwYXJhbGF4VGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcblx0XHRcdFx0cGFyYWxheFRsXG5cdFx0XHRcdFx0LmZyb20oJy5iY2cnLCAyLCB7eTogJy03NSUnLCBlYXNlOlBvd2VyMC5lYXNlTm9uZX0sIDApO1xuXHRcdFx0XHR2YXIgc2xpZGVQYXJhbGxheFNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcblx0XHRcdFx0XHR0cmlnZ2VyRWxlbWVudDogdGhpcyxcblx0XHRcdFx0XHR0cmlnZ2VySG9vazogMSxcblx0XHRcdFx0XHRkdXJhdGlvbjogJzEwMCUnXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zZXRUd2VlbihwYXJhbGF4VGwpXG5cdFx0XHRcdC8vIC5hZGRJbmRpY2F0b3JzKHtcblx0XHRcdFx0Ly8gXHRcdG5hbWU6ICdmYWRlIHNjZW5lJyxcblx0XHRcdFx0Ly8gXHRcdGNvbG9yOiAncmVkJyxcblx0XHRcdFx0Ly8gXHRcdGluZGVudDogMTAwLFxuXHRcdFx0XHQvLyBcdFx0Y29sb3JTdGFydDogJ2JsYWNrJyxcblx0XHRcdFx0Ly8gXHRcdGNvbG9yRW5kOiAncGluaydcblx0XHRcdFx0Ly8gXHR9KVxuXHRcdFx0XHQuYWRkVG8oY29udHJvbGxlcik7XG5cdFx0XHQvLyB9XG5cdFx0fSk7XG5cblx0XHQvL2Zvcm0gdmFsaWRhdGlvblxuXHRcblx0XHRcdCQoXCIuY2FsbGJhY2stZm9ybVwiKS52YWxpZGF0ZSh7XG5cdFx0XHRcdHJ1bGVzOntcblx0XHRcdFx0XHRuYW1lOntcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWlubGVuZ3RoOiAyXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlbWFpbDp7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdG1pbmxlbmd0aDogNSxcblx0XHRcdFx0XHRcdGVtYWlsOiB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtZXNzYWdlOntcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWlubGVuZ3RoOiA1XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtZXNzYWdlczoge1xuXHRcdFx0XHRcdG5hbWVVc2VyOiB7XG5cdFx0XHRcdFx0XHRuYW1lVXNlcjogXCJFbnRlciB5b3VyIG5hbWUhXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVtYWlsOiB7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogXCJFbnRlciBZb3VyIEUtbWFpbCFcIixcblx0XHRcdFx0XHRcdGVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIEUtbWFpbCFcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bWVzc2FnZToge1xuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IFwiRW50ZXIgeW91ciB3aXNoZXMhXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cblxuXHR9KTtcbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7IiwiJChkb2N1bWVudCkucmVhZHkoKCk9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBvd2wgPSAkKCcub3dsLWNhcm91c2VsJyksXG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGl0ZW1zQmdBcnJheSA9IFtdLCAvLyB0byBzdG9yZSBpdGVtcyBiYWNrZ3JvdW5kLWltYWdlXG4gICAgICAgIGl0ZW1CR0ltZztcbiAgXG4gICAgb3dsLm93bENhcm91c2VsKHsgIFxuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgc21hcnRTcGVlZDogMjAwMCxcbiAgICAgICAgZHJhZ0VuZFNwZWVkOiAyMDAwLFxuICAgICAgICBhdXRvSGVpZ2h0OnRydWUsXG4gICAgICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAvLyBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXG4gICAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgbmF2VGV4dDogZmFsc2UsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgIG9uVHJhbnNsYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hhbmdlTmF2c1RodW1wKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgJCgnLmFjdGl2ZScpLmFkZENsYXNzKCdhbmltJyk7XG4gIFxuICAgIHZhciBvd2xJdGVtID0gJCgnLm93bC1pdGVtJyksXG4gICAgICAgIG93bExlbiA9IG93bEl0ZW0ubGVuZ3RoO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAqIHN0b3JlIGl0ZW1zIGJnIGltYWdlcyBpbnRvIGFycmF5XG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgJC5lYWNoKG93bEl0ZW0sIGZ1bmN0aW9uKCBpLCBlICkge1xuICAgICAgICBpdGVtQkdJbWcgPSAkKGUpLmZpbmQoJy5vd2wtaXRlbS1iZycpLmF0dHIoJ3NyYycpO1xuICAgICAgICBpdGVtc0JnQXJyYXkucHVzaChpdGVtQkdJbWcpO1xuICAgIH0pO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAqIG5hdiBjb250cm9sIHRodW1wXG4gICAgICAqIG5hdiBjb250cm9sIGljb25cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICB2YXIgb3dsTmF2ID0gJCgnLm93bC1uYXYnKSxcbiAgICAgICAgZWw7XG4gICAgXG4gICAgJC5lYWNoKG93bE5hdi5jaGlsZHJlbigpLCBmdW5jdGlvbiAoaSxlKSB7XG4gICAgICAgIGVsID0gJChlKTtcbiAgICAgICAgLy8gYXBwZW5kIG5hdnMgdGh1bXAvaWNvbiB3aXRoIGNvbnRyb2wgcGF0dGVybihvd2wtcHJldi9vd2wtbmV4dClcbiAgICAgICAgZWwuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiJysgZWwuYXR0cignY2xhc3MnKS5tYXRjaCgvb3dsLVxcd3s0fS8pICsnLXRodW1wXCI+Jyk7XG4gICAgICAgIGVsLmFwcGVuZCgnPGRpdiBjbGFzcz1cIicrIGVsLmF0dHIoJ2NsYXNzJykubWF0Y2goL293bC1cXHd7NH0vKSArJy1pY29uXCI+Jyk7XG4gICAgfSk7XG4gICAgXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBDaGFuZ2UgY29udHJvbCB0aHVtcCBvbiBlYWNoIHRyYW5zbGF0ZSBlbmRcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgZnVuY3Rpb24gY2hhbmdlTmF2c1RodW1wKCkge1xuICAgICAgICB2YXIgYWN0aXZlSXRlbUluZGV4ID0gcGFyc2VJbnQoJCgnLm93bC1pdGVtLmFjdGl2ZScpLmluZGV4KCkpLFxuICAgICAgICAgICAgLy8gaWYgYWN0aXZlIGl0ZW0gaXMgZmlyc3QgaXRlbSB0aGVuIHNldCBsYXN0IGl0ZW0gYmctaW1hZ2UgaW4gLm93bC1wcmV2LXRodW1wXG4gICAgICAgICAgICAvLyBlbHNlIHNldCBwcmV2aW91cyBpdGVtIGJnLWltYWdlXG4gICAgICAgICAgICBwcmV2SXRlbUluZGV4ID0gYWN0aXZlSXRlbUluZGV4ICE9IDAgPyBhY3RpdmVJdGVtSW5kZXggLSAxIDogb3dsTGVuIC0gMSxcbiAgICAgICAgICAgIC8vIGlmIGFjdGl2ZSBpdGVtIGlzIGxhc3QgaXRlbSB0aGVuIHNldCBmaXJzdCBpdGVtIGJnLWltYWdlIGluIC5vd2wtbmV4dC10aHVtcFxuICAgICAgICAgICAgLy8gZWxzZSBzZXQgbmV4dCBpdGVtIGJnLWltYWdlXG4gICAgICAgICAgICBuZXh0SXRlbUluZGV4ID0gYWN0aXZlSXRlbUluZGV4ICE9IG93bExlbiAtIDEgPyBhY3RpdmVJdGVtSW5kZXggKyAxIDogMDtcbiAgICAgICAgXG4gICAgICAgICQoJy5vd2wtcHJldi10aHVtcCcpLmNzcyh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW1zQmdBcnJheVtwcmV2SXRlbUluZGV4XSArICcpJ1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICQoJy5vd2wtbmV4dC10aHVtcCcpLmNzcyh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGl0ZW1zQmdBcnJheVtuZXh0SXRlbUluZGV4XSArICcpJ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlTmF2c1RodW1wKCk7XG59KTsiLCJ2YXIgVmFuaWxsYVRpbHQgPSAoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgyJhhbmRvciBTZXJnaXUgKG1pY2t1N3p1KSBvbiAxLzI3LzIwMTcuXG4gKiBPcmlnaW5hbCBpZGVhOiBodHRwczovL2dpdGh1Yi5jb20vZ2lqc3JvZ2UvdGlsdC5qc1xuICogTUlUIExpY2Vuc2UuXG4gKiBWZXJzaW9uIDEuMi4wXG4gKi9cblxuY2xhc3MgVmFuaWxsYVRpbHQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzZXR0aW5ncyA9IHt9KSB7XG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpKSB7XG4gICAgICB0aHJvdyAoXCJDYW4ndCBpbml0aWFsaXplIFZhbmlsbGFUaWx0IGJlY2F1c2UgXCIgKyBlbGVtZW50ICsgXCIgaXMgbm90IGEgTm9kZS5cIik7XG4gICAgfVxuXG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgdGhpcy50b3AgPSBudWxsO1xuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlQ2FsbCA9IG51bGw7XG5cbiAgICB0aGlzLnVwZGF0ZUJpbmQgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5leHRlbmRTZXR0aW5ncyhzZXR0aW5ncyk7XG5cbiAgICB0aGlzLnJldmVyc2UgPSB0aGlzLnNldHRpbmdzLnJldmVyc2UgPyAtMSA6IDE7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLm9uTW91c2VFbnRlckJpbmQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU1vdmVCaW5kID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZUxlYXZlQmluZCA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXJCaW5kKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlQmluZCk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlQmluZCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXJCaW5kKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlQmluZCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlQmluZCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQgPSBudWxsO1xuICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQudmFuaWxsYVRpbHQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVFbGVtZW50UG9zaXRpb24oKTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lsbENoYW5nZSA9IFwidHJhbnNmb3JtXCI7XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLnVwZGF0ZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgIHRoaXMudXBkYXRlQ2FsbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUJpbmQpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5yZXNldCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgICBwYWdlWDogdGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgIHBhZ2VZOiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0IC8gMlxuICAgICAgfTtcblxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicGVyc3BlY3RpdmUoXCIgKyB0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlICsgXCJweCkgXCIgK1xuICAgICAgICBcInJvdGF0ZVgoMGRlZykgXCIgK1xuICAgICAgICBcInJvdGF0ZVkoMGRlZykgXCIgK1xuICAgICAgICBcInNjYWxlM2QoMSwgMSwgMSlcIjtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlcygpIHtcbiAgICBsZXQgeCA9ICh0aGlzLmV2ZW50LmNsaWVudFggLSB0aGlzLmxlZnQpIC8gdGhpcy53aWR0aDtcbiAgICBsZXQgeSA9ICh0aGlzLmV2ZW50LmNsaWVudFkgLSB0aGlzLnRvcCkgLyB0aGlzLmhlaWdodDtcblxuICAgIHggPSBNYXRoLm1pbihNYXRoLm1heCh4LCAwKSwgMSk7XG4gICAgeSA9IE1hdGgubWluKE1hdGgubWF4KHksIDApLCAxKTtcblxuICAgIGxldCB0aWx0WCA9ICh0aGlzLnJldmVyc2UgKiAodGhpcy5zZXR0aW5ncy5tYXggLyAyIC0geCAqIHRoaXMuc2V0dGluZ3MubWF4KSkudG9GaXhlZCgyKTtcbiAgICBsZXQgdGlsdFkgPSAodGhpcy5yZXZlcnNlICogKHkgKiB0aGlzLnNldHRpbmdzLm1heCAtIHRoaXMuc2V0dGluZ3MubWF4IC8gMikpLnRvRml4ZWQoMik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGlsdFg6IHRpbHRYLFxuICAgICAgdGlsdFk6IHRpbHRZLFxuICAgICAgcGVyY2VudGFnZVg6IHggKiAxMDAsXG4gICAgICBwZXJjZW50YWdlWTogeSAqIDEwMFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVFbGVtZW50UG9zaXRpb24oKSB7XG4gICAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB0aGlzLmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgdGhpcy50b3AgPSByZWN0LnRvcDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInBlcnNwZWN0aXZlKFwiICsgdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZSArIFwicHgpIFwiICtcbiAgICAgIFwicm90YXRlWChcIiArICh0aGlzLnNldHRpbmdzLmF4aXMgPT09IFwieFwiID8gMCA6IHZhbHVlcy50aWx0WSkgKyBcImRlZykgXCIgK1xuICAgICAgXCJyb3RhdGVZKFwiICsgKHRoaXMuc2V0dGluZ3MuYXhpcyA9PT0gXCJ5XCIgPyAwIDogdmFsdWVzLnRpbHRYKSArIFwiZGVnKSBcIiArXG4gICAgICBcInNjYWxlM2QoXCIgKyB0aGlzLnNldHRpbmdzLnNjYWxlICsgXCIsIFwiICsgdGhpcy5zZXR0aW5ncy5zY2FsZSArIFwiLCBcIiArIHRoaXMuc2V0dGluZ3Muc2NhbGUgKyBcIilcIjtcblxuXG4gICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidGlsdENoYW5nZVwiLCB7XG4gICAgICBcImRldGFpbFwiOiB2YWx1ZXNcbiAgICB9KSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNhbGwgPSBudWxsO1xuICB9XG5cbiAgc2V0VHJhbnNpdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCk7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnNldHRpbmdzLnNwZWVkICsgXCJtcyBcIiArIHRoaXMuc2V0dGluZ3MuZWFzaW5nO1xuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIiwgdGhpcy5zZXR0aW5ncy5zcGVlZCk7XG4gIH1cblxuICBleHRlbmRTZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICByZXZlcnNlOiBmYWxzZSxcbiAgICAgIG1heDogMzUsXG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgIGVhc2luZzogXCJjdWJpYy1iZXppZXIoLjAzLC45OCwuNTIsLjk5KVwiLFxuICAgICAgc2NhbGU6IFwiMVwiLFxuICAgICAgc3BlZWQ6IFwiMzAwXCIsXG4gICAgICB0cmFuc2l0aW9uOiB0cnVlLFxuICAgICAgYXhpczogbnVsbCxcbiAgICAgIHJlc2V0OiB0cnVlXG4gICAgfTtcblxuICAgIGxldCBuZXdTZXR0aW5ncyA9IHt9O1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGVmYXVsdFNldHRpbmdzKSB7XG4gICAgICBpZiAocHJvcGVydHkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgbmV3U2V0dGluZ3NbcHJvcGVydHldID0gc2V0dGluZ3NbcHJvcGVydHldO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS10aWx0LVwiICsgcHJvcGVydHkpKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10aWx0LVwiICsgcHJvcGVydHkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IEpTT04ucGFyc2UoYXR0cmlidXRlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IGF0dHJpYnV0ZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTZXR0aW5nc1twcm9wZXJ0eV0gPSBkZWZhdWx0U2V0dGluZ3NbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdTZXR0aW5ncztcbiAgfVxuXG4gIHN0YXRpYyBpbml0KGVsZW1lbnRzLCBzZXR0aW5ncykge1xuICAgIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoIShlbGVtZW50cyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghKFwidmFuaWxsYVRpbHRcIiBpbiBlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50LnZhbmlsbGFUaWx0ID0gbmV3IFZhbmlsbGFUaWx0KGVsZW1lbnQsIHNldHRpbmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8qIGV4cG9zZSB0aGUgY2xhc3MgdG8gd2luZG93ICovXG4gIHdpbmRvdy5WYW5pbGxhVGlsdCA9IFZhbmlsbGFUaWx0O1xuXG4gIC8qKlxuICAgKiBBdXRvIGxvYWRcbiAgICovXG4gIFZhbmlsbGFUaWx0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRpbHRdXCIpKTtcbn1cblxucmV0dXJuIFZhbmlsbGFUaWx0O1xuXG59KCkpOyJdfQ==
