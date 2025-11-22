import { describe, it, expect} from 'vitest';
import { toSnakeCase } from './utils.js'

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