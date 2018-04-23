'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random = function () {
  function Random() {
    _classCallCheck(this, Random);
  }

  _createClass(Random, null, [{
    key: 'coinFlip',


    /**
     * @return 0 or 1
     */
    value: function coinFlip() {
      return Math.round(Math.random());
    }

    /**
     * Integers only.
     * @param minimum #
     * @param maximum #
     * @return random # in range
     */

  }, {
    key: 'inRange',
    value: function inRange(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * @param Array arr
     * @return * from arr
     */

  }, {
    key: 'fromArray',
    value: function fromArray(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * Simulates rolling any number of any-sided dice.
     * Default: 1d20
     * @param   int Dice to be rolled
     * @param   int Sides per die
     * @return  int Result of roll
     */

  }, {
    key: 'roll',
    value: function roll() {
      var dice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var sides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

      return dice * (Math.floor(sides * Math.random()) + 1);
    }

    /**
     * Check to see if a given percent chance occurs
     * @param {number} percentChance a 0-100 number representing % success chance
     * @return {boolean}
     */

  }, {
    key: 'probability',
    value: function probability(percentChance) {
      var rand = Math.random();
      var target = percentChance / 100;
      return target >= rand;
    }
  }]);

  return Random;
}();

exports.Random = Random;

//# sourceMappingURL=rando.js.map