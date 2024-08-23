/**
 * 
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */

export function countSmilyFace(texts: string[]): number {
        // TODO : Start your code here
    const smileyRegex = /[:;][-~]?[)D]/g;
    return texts.reduce((count, text) => count + (text.match(smileyRegex) || []).length, 0);
  }