#!/usr/bin/env node

import make from '../';
import { getUserName } from '../lib/user';
import BalanceGame from '../games/BalanceGame';

console.log('Welcome to Brain Games!');
console.log('Balance the given number.\n');

const userName = getUserName();
console.log(`Hello ${userName}!`);

const game = make(BalanceGame);
game(userName);
