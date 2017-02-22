#!/usr/bin/env node

import { getUserName } from '../lib/user';
import make from '../';
import CalcGame from '../games/CalcGame';

console.log('Welcome to Brain Games!');
console.log('What is the result of the expression?.\n');

const userName = getUserName();
console.log(`Hello ${userName}!`);

const game = make(CalcGame);
game(userName);
