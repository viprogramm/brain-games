#!/usr/bin/env node

import make from '../';
import { getUserName } from '../lib/user';
import GcdGame from '../games/GcdGame';

console.log('Welcome to Brain Games!');
console.log('Find the greatest common divisor of given numbers..\n');

const userName = getUserName();
console.log(`Hello ${userName}!`);

const game = make(GcdGame);
game(userName);
