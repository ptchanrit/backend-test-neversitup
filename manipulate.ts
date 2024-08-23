/**
 * 
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */ 
export function Manipulate(text: string) : string[] {
    // TODO : Start your code here  
    if (text.length <= 1) {
        return [text];
    }

    const result = new Set<string>();

    const permute = (str: string, prefix: string = '') => {
        if (str.length === 0) {
            result.add(prefix);
        } else {
            for (let i = 0; i < str.length; i++) {
                const char = str[i];
                const remaining = str.slice(0, i) + str.slice(i + 1);
                permute(remaining, prefix + char);
            }
        }
    };

    permute(text);
    return Array.from(result).sort();
}