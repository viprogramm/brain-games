import { isEven } from '../lib/number';

export default a => ({
  question: `${a}`,
  answer: isEven(a) ? 'yes' : 'no',
});

