# string-calculator-tdd-kata

This is a Test Driven Developemnt exercise.

## Instructions to Complete
### Step 1: the simplest thing
Create a simple String calculator with a method int add(String numbers).
#### Input: a string of comma-separated numbers
#### Output: an integer, sum of the numbers
Examples:
###### Input: “”, Output: 0
##### Input: “1”, Output: 1
##### Input: “1,5”, Output: 6

### Step 2: handle an unknown amount of numbers
Allow the add() method to handle any unknown amount of numbers.

### Step 3: handle new lines between numbers
Allow the add() method to handle new lines between numbers (instead of commas).

the following input is ok: "1\n2,3" (will equal 6)
the following is INVALID input so do not expect it : “1,\n” (not need to write a 
test for it) 

### Step 4: support different delimiters
Support different delimiters: to change a delimiter, the beginning of the string will contain a separate line that looks like this:

"//[delimiter]\n[numbers...]"

For example "//;\n1;2" should return 3 where the default delimiter is ';'.

The first line is optional. All existing scenarios should still be supported.

### Step 5: negative numbers
Calling add() with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.

For example add("1,4,-1") should throw an exception with the message "negatives not allowed: -1".

If there are multiple negatives, show all of them in the exception message.

### Step 6: ignore big numbers
Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2



## Setup Instructions

1. **Downoad and install NodeJs**

2. **Clone the Repository:**

   ```git clone https://github.com/mdarif081998/string-calculator-tdd-kata.git```
   ```cd string-calculator-tdd-kata```

3. **Install Dependencies:**
Run `npm  install`

4. **update the input variable in line no 2 inside src/index.ts file**

5. **Build the project**
Run `npm run build`

6. **Execute the program by running below command**
Run `npm run prod`