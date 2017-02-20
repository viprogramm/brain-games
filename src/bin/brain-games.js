#!/usr/bin/env node

import { printMessage, askQuestion} from '../index'

printMessage('Welcome to the Brain Games!\n');
const userName = askQuestion('May I have your name? ');
printMessage(`Hello ${userName}!`);
