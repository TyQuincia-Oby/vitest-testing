import {expect, describe, it} from 'vitest'
import {add} from './add-utils' 

describe ('add function', () => {
    it ('should add two positive numbers', () => {
        const result = add(2,3);
        expect(result).toBe(5);
    });

    it ('should add negative numbers', () =>{
        const result = add(-1,-2);
        expect(result).toBe(-3)
    });

    it ('should add zero', () =>{
        const result = add(5,0);
        expect(result).toBe(5);
    });

    it ('should add very large numbers', () =>{
        const result = add(999999999, 1);
        expect(result).toBe(1000000000);
    });

    it ('should add decimal numbers', () =>{
        const result = add(3.14, 2.86);
        expect(result).toBe(6);
    });

    it ('should add positive and negative numbers', () =>{
        const result = add(10, -5);
        expect(result).toBe(5);
    });

    it ('should add when result is zero', () => {
        const result = add(5, -5);
        expect(result).toBe(0);
    });

    it ('should add fractions', () => {
        const result = add(0.1, 0.2);
        expect(result).toBeCloseTo(0.3);// Use toBeCloseTo for floating point!
    });

    it ('should add very small numbers', () => {
        const result = add(0.001, 0.002);
        expect(result).toBeCloseTo(0.003);
    });

    it ('should add with one number being zero', () => {
        const result = add(0, 10);
        expect(result).toBe(10);
    })
    //my tests
    // //ReferenceError: n is not defined
    // it ('wont add up a space', () =>{
    //     const result = add( n, 5);
    //     expect(result).toBe(null);
    // })
    
    // it ('wont add null into equation', () =>{
    //     const result = add(null, 5);
    //     expect(result).toBe(null);
    // })
    // AssertionError: expected 5 to be null //ualit Object.is eqy
    // - Expected: 
    // null
    // + Received: 
    // 5
});