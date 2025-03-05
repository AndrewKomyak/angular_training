import { countries } from "./countries";

describe('countries func spec', () => {

        it('contains 3 countries', () => {
          const expected = 3;
          const actual = countries();
          expect(actual.length).toBe(expected);
        });

        it('contains BY', () => {
            const expcted = 'BY';
            const actual = countries();
            expect(actual).toContain(expcted);
        })
})