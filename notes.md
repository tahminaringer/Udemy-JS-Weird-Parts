# Notes

## Sections 1-3

**Syntax Parser** A program that reads your code and determines what it des and if its grammar is valid

- Code written by programmers to make your code work and computer understand(how it understands funtion, variable, etc.)

**Lexical Environment** Lexical means having to do with words or grammar. A lexical environment exists in programming languages in which where you write something is important. (scope, )

**Execution Context** A wrapper to help manage the code that is running

- There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond wht you've written in your code.

**Object** a collection of name value pairs

**Hoisting** Setup Memory space for variables and fuctions.

**Single Threaded** One command at a time

**Synchronous** One at a time and in order

**Invocation** Running a function calling a function. invoke functions by adding parenthesis ()

**Variable Environment** Where the variables live and how they relate to each other in memory

**Scope** Where a variable is available in your code and if it is truly the same variable or a new copy.

**ES6** Block scoping - let const

**Asynchronous Callbacks** More than one running at a time

**Dynamic Typing** You don't tell the engin what type of data a variable holds, it figures it our while your code is running.

- Variable can hold different types of values because it's all figured out during execution.

- **Primitive Type** A type of Data that represents a single value that is not an object
  - Undefined
  - Null
  - Boolean
  - Number - Floating point number (there is always some decimals). Unlike other programming languages, there's only one 'number' type
  - String - a sequence of characters
  - Symbol (ES6) - used in newest version of JS

**Operators** A special function that is syntactically (written) defferently. Generally, operators take two parameter and return one result.

- +, -, %, <, >, &&, !, ==, ===, ++, ||

- **Operator Precedence** Which operator function gets called first. Functions are called in order of precedence(Higher precedence wins).

- **Operator Associativity** What order operator functions get called in left-to-right or right-to-left. When functions have the same precedence

**Coercion** Converting a value from one type to another

## Section 4

**method** function connected to an object

**Namespace** A container for variable and functions - Typically to keep variable and functions with the same name separate

**JSON** JavaScript Object Notation