// Write your test here
import { countSmilyFace } from './smily';

describe('countSmilyFace function', () => {

    it('should count smiley faces correctly', () => {
      expect(countSmilyFace([":)", ";(", ';}', ':-D'])).toBe(2);
      expect(countSmilyFace(["';D", ':-(', ':-)', ';~)'])).toBe(3);
      expect(countSmilyFace(["';]", ':[', ';*', ':$', ';-D'])).toBe(1);
      expect(countSmilyFace([])).toBe(0);
    });
  });