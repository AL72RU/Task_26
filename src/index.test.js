import {definerPrime} from "./index.js";

describe("test definerPrime", () => {
    it('простое', () => {
        expect(definerPrime(17)).toBe('Число 17 - простое число');
    }),
    it('составное', () => {
        expect(definerPrime(18)).toBe('Число 18 - составное число');
    }),
    it('ошибка', () => {
        expect(definerPrime(1001)).toBe('Данные неверны');
    })
});