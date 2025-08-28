// pop.ts - A simple TypeScript implementation of a Pop operation on an array

/**
 * Removes and returns the last element from the array.
 * If the array is empty, returns undefined.
 * 
 * @param arr - The array to pop from.
 * @returns The last element of the array, or undefined if the array is empty.
 */
function pop<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.pop();
}

// Example usage:
const myArray: number[] = [1, 2, 3];
const lastElement = pop(myArray);

console.log(lastElement); // Output: 3
console.log(myArray);     // Output: [1, 2]

export default pop;