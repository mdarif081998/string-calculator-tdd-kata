const inputString = "";

export const add = (input: string): number => {
  if (!input) return 0;
  const output = input
    .split(",")
    .map((element) => Number(element.trim()))
    .reduce((sum, num) => Number(num + sum));
  return Number(output);
};

add(inputString);
