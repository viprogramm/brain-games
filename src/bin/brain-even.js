#!/usr/bin/env node

import { getUserName, play } from '..';

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = getUserName();
console.log(`Hello ${userName}!`);

play(userName);


