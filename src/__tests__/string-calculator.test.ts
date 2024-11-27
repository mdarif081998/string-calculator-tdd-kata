import { add } from './../index';
describe("Should test the add function", () => {
    it("add function should return 0 if input is empty string", () => {
        const result = add("")
        expect(result).toBe(0);
    });
});