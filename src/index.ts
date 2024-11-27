const inputString = "";

export const add = (input: string): number => {
  let delimeter = ",";
  if (!input) return 0;

  if (input.startsWith("//[")) {
    let firstDelimeter = '';
    while(input.includes('[')) {
        firstDelimeter = input.substring(input.indexOf("[")+1, input.indexOf("]"));
        input = input.substring(input.indexOf("]") + 1);
        input = input.split(firstDelimeter).join(delimeter);
    }
  } else if (input.startsWith("//")) {
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
      if (num > 1000) return sum;
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
