/**
 * 
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */ 
export function findOddNumber(numbers: number[]) : number {
    // TODO : Start your code here
 
    const counts: { [key: number]: number } = {};

    for (let num of numbers) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
        if (counts[num] % 2 !== 0) {
            return parseInt(num, 10);
        }
    }
   
    throw new Error("Not implemented");
}


