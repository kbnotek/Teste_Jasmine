describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });
    it("Substrações válidas", function () {
        expect(subtracao(5, 2)).toBe(3);
        expect(subtracao(9, 8)).toBe(1);
    });
    it("Multiplicações válidas", function () {
        expect(multiplicacao(2, 2)).toBe(4);
        expect(multiplicacao(9, 2)).toBe(18);
    });
    it("Divisões válidas", function () {
        expect(divisao(6, 2)).toBe(3);
        expect(divisao(10, 2)).toBe(5);
    });
});