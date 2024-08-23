// Write your test here
import { Manipulate } from './manipulate'


describe('manipulate function', () => {
    it('should return ["a"] for input "a"', () => {
      expect(Manipulate('a')).toEqual(['a']);
    });
  
    it('should return ["ab", "ba"] for input "ab"', () => {
      expect(Manipulate('ab')).toEqual(['ab', 'ba']);
    });
  
    it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for input "abc"', () => {
      expect(Manipulate('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    });
  
    it('should return ["aabb", "abab", "abba", "baab", "baba", "bbaa"] for input "aabb"', () => {
      expect(Manipulate('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });


  });