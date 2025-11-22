import { describe, it, expect} from 'vitest';
import { add, toSnakeCase } from './utils.js'

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

describe ('toSnakeCase function', () =>{
    it ('should convert text with spaces to snake_case', () => {
        const result = toSnakeCase('Hello World');
        expect(result).toBe('hello_world');
    });
    it ('should convert to text to lowercase', ()=>{
        const result = toSnakeCase('HELLO WORLD');
        expect(result).toBe('hello_world');
    });
    it ('should handle single word', () =>{
        const result = toSnakeCase('Hello');
        expect(result).toBe('hello');
    });
    it ('should handle multiple spaces', () => {
        const result = toSnakeCase('Hello   World');
        expect(result).toBe('hello___world');
    });
    it ('should handle very long text', () => {
        const result = toSnakeCase('This Is A Very Long Sentence With Many Words');
        expect(result).toBe('this_is_a_very_long_sentence_with_many_words');
    });
    // it ('should handle text with special characters', () =>{
    //     const result = toSnakeCase('Hello World!');
    //     expect(result).toBe('hello_world!');
    // });
    it ('should handle numbers with text', () =>{
        const result = toSnakeCase('Hello 123 World');
        expect(result).toBe('hello_123_world');
    });

    it ('should handle text with no spaces', () => {
        const result = toSnakeCase('HELLOWORLD');
        expect(result).toBe('helloworld');
    });

    it ('should handle text with mixed case', () => {
        const result = toSnakeCase('HeLLo WoRLd');
        expect(result).toBe('hello_world');
    });

    it('should handle text with only spaces', () => {
        const result = toSnakeCase('   ');
        expect(result).toBe('___');
    })

    it ('should handle empty strings', () =>{
        const result = toSnakeCase('');
        expect(result).toBe('');
    })

    it ('should replace exclamation marks with underscores', () => {
        const result = toSnakeCase('Hello World!');
        expect(result).toBe('hello_world_')
    })
    //after running this (passed), test on line 93 failed

    it('should replace question marks with underscores', () =>{
        const result = toSnakeCase('Hello World?');
        expect(result).toBe('hello_world_');
    })

    it('should replace commas with underscores', () =>{
        const result = toSnakeCase('Hello, World');
        expect(result).toBe('hello__world');
    })

    it('should replace periods with underscores', () =>{
        const result = toSnakeCase('Hello.World');
        expect(result).toBe('hello_world');
    })

    it('should replace semicolons and colons with underscore', () =>{
        const result = toSnakeCase('Hello:World;');
        expect(result).toBe('hello_world_')
    })

    it ('should replace multiple punctuation together', () => {
        const result = toSnakeCase('Hello!!! World???');
        expect(result).toBe('hello____world___')
    })

    it('should replace multiple punctuation together(challenge)', () =>{
        const result = toSnakeCase('Hello!@#$%^&*()World');
        expect(result).toBe('hello__________world')
    })
});