/*
register: current value, not part of stack
operations that require 2 values removes value from stack, performs operation, and stores result in register

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

input: string

Rules
  - All operations are integer operations (which is only important with DIV and REMAINDER).
  - assume all arguments are valid
    will not try to pop a value from the stack when stack is empty
    will not contain unknown tokens
  - initalize stack to [] and register to 0;

//examples
stack [3, 6, 4] (4 is top of stack)
register 7

the MULT operation removes 4 from the stack, times it by 7 and stores the result in the register
stack [3, 6]
register [28]


*/

function minilang(string) {
  function checkStack() {
    if (stack.length === 0) {
      console.log("Error the stack is empty, invalid operation");
      return false;
    }
    return true;
  }

  function validInstruction(instruction) {
    const VALID_INSTRUCTIONS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP', 'PRINT'];
    return VALID_INSTRUCTIONS.includes(instruction) || !!instruction.match(/[\d]+/);
  }

  let stack = [];
  let register = 0;
  let instructions = string.split(/[ ]+/).reverse();
  while (instructions.length > 0) {
    let instruction = instructions.pop();
    // console.log(`stack: ${stack}`);
    // console.log(`register: ${register}`);
    // console.log(`instruction: ${instruction}`);
    // console.log();
    if (!validInstruction(instruction)) {
      console.log(`Error: invalid instructions: ${instruction}`);
      break;
    }

    switch (instruction) {
      case 'PUSH':
        stack.push(register)
        break;
      case 'ADD':
        if (!checkStack()) break;
        register += stack.pop();
        break;
      case 'SUB':
        if (!checkStack()) break;
        register -= stack.pop();
        break;
      case 'MULT':
        if (!checkStack()) break;
        register *= stack.pop();
        break;
      case 'DIV':
        if (!checkStack()) break;
        register /= stack.pop();
        register = parseInt(register, 10);
        break;
      case 'REMAINDER':
        if (!checkStack()) break;
        register %= stack.pop();
        register = parseInt(register, 10);
        break;
      case 'POP':
        if (!checkStack()) break;
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(instruction);
        break;
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PrINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8
//
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
