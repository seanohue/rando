'use strict';

class Random {

  /**
   * @return 0 or 1
   */
  static coinFlip() {
    return Math.round(Math.random());
  }

  /**
   * Integers only.
   * @param minimum #
   * @param maximum #
   * @return random # in range
   */
  static inRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * @param Array arr
   * @return * from arr
   */
  static fromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Simulates rolling any number of any-sided dice.
   * Default: 1d20
   * @param   int Dice to be rolled
   * @param   int Sides per die
   * @return  int Result of roll
   */
  static roll(dice = 1, sides = 20) {
    const rolls = Array.from({length: dice}, () => Math.floor(sides * Math.random()) + 1);
    return rolls.reduce((acc, roll) => acc + roll, 0);
  }

  /**
   * Check to see if a given percent chance occurs
   * @param {number} percentChance a 0-100 number representing % success chance
   * @return {boolean}
   */
  static probability(percentChance) {
    const rand = Math.random();
    const target = percentChance / 100;
    return target >= rand;
  }
}

exports.Random = Random;
