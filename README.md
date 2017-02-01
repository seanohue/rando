A file with utility methods for introducing randomness.

Install with `npm install rando-js --save`.

Use cases:

```javascript
const Random = require('rando-js');

// Simulate a coinflip
if (Random.coinflip()) { /* something that has ~50% chance of happening */ }

// Roll a stat for your D&D character
const charisma = Random.roll(3, 6) // anything from 3 to 18
const d20 = Random.roll() // default args are 1, 20.

// Get something from an array
const choice = Random.fromArray([a, b, c, d]) // a, b, c, or d

// Get a random number in a range
const under20 = Random.inRange(0, 20)

```