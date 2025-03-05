import { greet } from "./greet";

describe('greet func spec', () => {

        it('should be "Hi " only', () => {
          const expected = 'Hi ';
          const actual = greet('');
          expect(actual).toBe(expected);
        });

        it('should be "Hi James"', () => {
            const expected = 'Hi James';
            const actual = greet('James');
            expect(actual).toBe(expected);
          });

        it('containes requested name "James"', () => {
        const expected = 'James';
        const actual = greet(expected);
        expect(actual).toContain(expected);
        });
})