import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
    it("should decrease not change benefit and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
            [new Drug("test", 1, 0)],
        );
    });
});

describe("Dafalgan", () => {
    it("should decrease the benefit * 2 and expiresIn", () => {
        expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Dafalgan", 1, 1)],
        );
    });
});


describe("Magic Pill", () => {
    it("should not change", () => {
        expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Magic Pill", 2, 3)],
        );
    });
});

describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Herbal Tea", 1, 4)],
        );
    });
    it("should increase the benefit * 2 and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", -2, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Herbal Tea", -3, 5)],
        );
    });
    it("should not change benefit and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
            [new Drug("Herbal Tea", 1, 50)],
        );
    });
});

describe("Fervex", () => {
    it("should put benefit to 0 and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Fervex", 0, 45)]).updateBenefitValue()).toEqual(
            [new Drug("Fervex", -1, 0)],
        );
    });
    it("should increase the benefit and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Fervex", 19, 4)],
        );
    });
    it("should increase the benefit * 2 and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Fervex", 9, 5)],
        );
    });
    it("should increase the benefit * 3 and decrease expiresIn", () => {
        expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()).toEqual(
            [new Drug("Fervex", 4, 6)],
        );
    });
});
