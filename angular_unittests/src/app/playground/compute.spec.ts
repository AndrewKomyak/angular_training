import { compute } from "./compute";

describe('compute func spec', () => {

        it('less 0', () => {
          const expected = 0;
          const actual = compute(-1);
          expect(actual).toBe(expected);
        });

        it('is 0', () => {
            const expected = 1;
            const actual = compute(0);
            expect(actual).toBe(expected);
          });

        it('more 0', () => {
        const expected = 3;
        const actual = compute(2);
        expect(actual).toBe(expected);
        });
})