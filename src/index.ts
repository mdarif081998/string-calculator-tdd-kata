const inputString = "";

export const add = (input: string): number => {
  let delimeter = ",";
  if (!input) return 0;

  if (input.startsWith("//")) {
    delimeter = input.substring(2, input.indexOf("\n"));
    input = input.substring(input.indexOf("\n") + 1);
  }
  const negativeNumbers = new Array();
  const output = input
    .split("\n")
    .join(delimeter)
    .split(delimeter)
    .map((element) => Number(element.trim()))
    .reduce((sum, num) => {
      if (num < 0) negativeNumbers.push(num);
      return Number(num + sum);
    });

  if (negativeNumbers.length > 0)
    throw `negative numbers not allowed ${negativeNumbers.join(",")}`;
  return Number(output);
};

try {
  add(inputString);
} catch (err: any) {
  console.error(err.toString());
}
