import { add } from "./../index";

describe("Should test the add function", () => {
  it("should return 0 if input is empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });

  it("should return the number if input is string containing number", () => {
    expect(add("2")).toBe(2);
    expect(add("15")).toBe(15);
    expect(add("148")).toBe(148);
  });

  it("should return the sum of all comma delimated numbers in input string", () => {
    expect(add("2,4,7")).toBe(13);
    expect(add("1,2,3,4,5,6,7")).toBe(28);
  });

  it("should return the sum of all comma delimated numbers spread on multiple lines in input string", () => {
    expect(add("1,10,4\n3,5,6")).toBe(29);
    expect(add("1,2\n3,4\n5,6,7")).toBe(28);
  });

  it("should return the sum of all delimated numbers spread on multiple lines in input string with delimeter specified in starting like '//[delimiter]\n[numbers…]'", () => {
    expect(add("//;\n1;10;4\n3;5;6")).toBe(29);
    expect(add("//@\n1@2\n3@4\n5@6@7")).toBe(28);
  });

  it("should throw an exception if input string contains negative numbers", () => {
    try {
      add("//@\n1@2\n-3@4\n5@-6@-7");
    } catch (err) {
      expect(err).toBe("negative numbers not allowed -3,-6,-7");
    }
  });

  it("should ignore numbers greater than 1000", () => {
    expect(add("//;\n1;10;1001;4\n3;5;6;1520")).toBe(29);
    expect(add("//@\n1@2\n3@4@5789\n5@6@7@10000")).toBe(28);
  });

  it("delimeters can be of any length", () => {
    expect(add("//::::::::\n1::::::::10::::::::1001::::::::4\n3::::::::5::::::::6::::::::1520")).toBe(29);
    expect(add("//@@@\n1@@@2\n3@@@4@@@5789\n5@@@6@@@7@@@10000")).toBe(28);
  });

  it("delimeters can be multiple like '//[**][%%]\n1**2%%3'", () => {
    expect(add("//[:::][@@]\n1@@10:::1001:::4\n3@@5:::6:::1520")).toBe(29);
    expect(add("//[:::][@@][%%%]\n1@@10:::1001%%%4\n3@@5:::6:::1520")).toBe(29);
  });
});
