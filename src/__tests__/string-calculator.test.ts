import { add } from './../index';

describe("Should test the add function", () => {
    it("should return 0 if input is empty string", () => {
        const result = add("")
        expect(result).toBe(0);
    });

    it("should return the number if input is string containing number", () => { 
        expect(add("2")).toBe(2);
        expect(add("15")).toBe(15);
        expect(add("148")).toBe(148);
    });
});