import calcGame from './games/calcGame';
import evenGame from './games/evenGame';
import gcdGame from './games/gcdGame';
import play from './gameProcess';

export const startCalcGame = () => play(calcGame);
export const startEvenGame = () => play(evenGame);
export const startGcdGame = () => play(gcdGame);

