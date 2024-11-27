const inputString = "";

export const add = (input: string): number => {
  let delimeter = ",";
  if (!input) return 0;

  if (input.startsWith("//")) {
    delimeter = input.substring(2, input.indexOf("\n"));
    input = input.substring(input.indexOf("\n") + 1);
  }

  const output = input
    .split("\n")
    .join(delimeter)
    .split(delimeter)
    .map((element) => Number(element.trim()))
    .reduce((sum, num) => Number(num + sum));
  return Number(output);
};

add(inputString);
