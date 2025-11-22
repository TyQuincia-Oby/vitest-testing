import {describe, expect, it } from 'vitest';
import { makeGreeting, addSignature , decorateMessage, createFullGreeting} from './greeting-utils';

describe("make greeting", () => {

    it("will tell you happy anniversary", () => {
        const result = makeGreeting('Jason', 'Anniversary');
        expect(result).toBe('Happy Anniversary , Jason');
    })

    it("will tell you happy birthday", () => {
        const result = makeGreeting('Ian', 'Birthday');
        expect(result).toBe('Happy Birthday , Ian');
    })

    it("will tell you happy new year", () => {
        const result = makeGreeting('Linda', 'New Year');
        expect(result).toBe('Happy New Year , Linda');
    })
})

describe('will add a signature to message', () => {

    it("will add any name to message", () => {
        const result = addSignature('Happy Birthday', 'Jenny');
        expect(result).toBe('Happy Birthday - from Jenny')
    })

    it('will add a name to a greeting', () => {
        const result = addSignature('Have a great day', 'Dayton');
        expect(result).toBe('Have a great day - from Dayton')
    })
})

describe('will give the message decoration', () => {

    it('will wrap your message with flowers', () => {
        const result = decorateMessage('Have a beautiful life!');
        expect(result).toBe('🌸🌸Have a beautiful life!🌸🌸')
    })

    it('will wrap your name with flowers', () => {
        const result = decorateMessage('TyQuincia');
        expect(result).toBe('🌸🌸TyQuincia🌸🌸')
    })
})

describe(' will produce a decorated message with signature', () =>{
    it('will wrap your signed message with flowers', () => {
        const result = createFullGreeting('TyQuincia', 'Anniversary', "Renee'");
        expect(result).toBe("🌸🌸Happy Anniversary , TyQuincia - from Renee'🌸🌸")
    })
})