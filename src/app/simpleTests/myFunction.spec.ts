import { greet } from "./myFunction";

describe('My Functions', () => {
    it('Should greet', () => {
        const expectedName = 'Andre'
        const result = greet(expectedName);
        expect(result).toContain(expectedName);
    })
})