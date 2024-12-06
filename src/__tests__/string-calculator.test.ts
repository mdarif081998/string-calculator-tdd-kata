import { calculator } from "./../index";

describe("Should test the add function", () => {
  it("should return 0 if input is empty string", () => {
    const result = calculator("");
    expect(result).toBe(0);
  });

  it("should return the number if input is string containing number", () => {
    expect(calculator("2")).toBe(2);
    expect(calculator("15")).toBe(15);
    expect(calculator("148")).toBe(148);
  });

  it("should return the sum of all comma delimated numbers in input string", () => {
    expect(calculator("2,4,7")).toBe(13);
    expect(calculator("1,2,3,4,5,6,7")).toBe(28);
  });

  it("should return the sum of all comma delimated numbers spread on multiple lines in input string", () => {
    expect(calculator("1,10,4\n3,5,6")).toBe(29);
    expect(calculator("1,2\n3,4\n5,6,7")).toBe(28);
  });

  it("should return the sum of all delimated numbers spread on multiple lines in input string with delimeter specified in starting like '//[delimiter]\n[numbers…]'", () => {
    expect(calculator("//;\n1;10;4\n3;5;6")).toBe(29);
    expect(calculator("//@\n1@2\n3@4\n5@6@7")).toBe(28);
  });

  it("should throw an exception if input string contains negative numbers", () => {
    try {
      calculator("//@\n1@2\n-3@4\n5@-6@-7");
    } catch (err) {
      expect(err).toBe("negative numbers not allowed -3,-6,-7");
    }
  });

  it("should ignore numbers greater than 1000", () => {
    expect(calculator("//;\n1;10;1001;4\n3;5;6;1520")).toBe(29);
    expect(calculator("//@\n1@2\n3@4@5789\n5@6@7@10000")).toBe(28);
  });

  it("delimeters can be of any length", () => {
    expect(calculator("//::::::::\n1::::::::10::::::::1001::::::::4\n3::::::::5::::::::6::::::::1520")).toBe(29);
    expect(calculator("//@@@\n1@@@2\n3@@@4@@@5789\n5@@@6@@@7@@@10000")).toBe(28);
  });

  it("delimeters can be multiple like '//[**][%%]\n1**2%%3'", () => {
    expect(calculator("//[:::][@@]\n1@@10:::1001:::4\n3@@5:::6:::1520")).toBe(29);
    expect(calculator("//[:::][@@][%%%]\n1@@10:::1001%%%4\n3@@5:::6:::1520")).toBe(29);
  });

  //*\n2*3 should return 6
  it.only("Should perform the operation based on the delimeter passed", () => {
    expect(calculator("//*\n2*3")).toBe(6);
  });
});
