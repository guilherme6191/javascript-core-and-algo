# js Mental Model - cheatsheet

### Values and Types
  - There are values, and then there’s everything else. We can think of values as different things “floating” in our JavaScript universe. They don’t exist inside our code, but we can refer to them from our code.
  - There are two categories of values: there are Primitive Values, and then there are Objects and Functions. In total, there are nine separate types. Each type serves a specific purpose, but some are rarely used.
  - Some values are lonely. For example, null is the only value of the Null type, and undefined is the only value of the Undefined type. As we will learn later, these two lonely values are quite the troublemakers!
  - We can ask questions with expressions. JavaScript will answer to us with values. For example, the 2 + 2 expression is answered with 4.
  - We can inspect the type of something by wrapping it in a typeof expression. For example, typeof(4) is the string value "number".

#### Primitive Values
* Undefined (undefined), used for unintentionally missing values.
* Null (null), used for intentionally missing values.
* Booleans (true and false), used for logical operations.
* Numbers (-100, 3.14, and others), used for math calculations.
* Strings ("hello", "abracadabra", and others), used for text.
* Symbols (uncommon), used to hide implementation details.
* BigInts (uncommon and new), used for math on big numbers.
#### Objects and Functions
* Objects ({} and others), used to group related data and code.
* Functions (x => x * 2 and others), used to refer to code.

```
console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/(hello|goodbye)/)); // "object"
```

##### Ps.: js has no variable types, but it does have value types

- Primitive Values Are Immutable

```
let fifty = 50;
fifty.shades = 'gray'; // No!
```

- Variables are wires, they are not values, they point to values

```
function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money);
```
We're passing the value of money, not the variable money. So the `console.log` results 10.


##### Some more info on types and its values:

- Undefined: Only one value, undefined.
- Null: Only one value, null.
- Booleans: Two values: true and false.
- Numbers: One value for each floating point math number.
- BigInts: One value for every conceivable integer.
- Strings: One value for every conceivable string.
- Objects: One value for every object literal we execute.
- Function: One value for every function expression we execute.

##### Interesting facts about JavaScript numbers:
- Not all numbers can be perfectly represented in JavaScript. Their decimal part offers more precision closer to 0, and less precision further away from it. We can say that their decimal point is “floating”.
- Numbers from invalid math operations like 1 / 0 or 0 / 0 are special. NaN is one of such numbers. They may appear due to coding mistakes.
typeof(NaN) is a number because NaN is a numeric value. It’s called “Not a Number” because it represents the idea of an "invalid" number.

*PS.: Writing 2 or "hello" always “summons” the same number or a string value. But writing {} or function() {} always creates a brand new, different value. This idea is crucial to understanding equality in JavaScript* 



### Equality

###### JavaScript has several kinds of equality. They include Same Value Equality, Strict Equality, and Loose Equality.

- Same Value Equality, or Object.is(a, b), matches the concept of the sameness of values that we introduced in the previous module.
    - Understanding this kind of equality helps prevent bugs! You will often need to know when you’re dealing with the same value, and when you’re dealing with two different values.
    - When we draw a diagram of values and variables, the same value cannot appear twice on it. Object.is(a, b) is true when variables a and b point to the same value on our diagram.
    - Same Value Equality is the easiest to explain, which is why we started with it. However, it’s verbose and a bit annoying to write.
- In practice, you will use Strict Equality, or a === b, most often. It is equivalent to the Same Value Equality except for two rare special cases:
    - NaN === NaN is false, even though they are the same value.
    - 0 === -0 and -0 === 0 is true, but they are different values.
- You can check whether x is NaN using Number.isNaN(x).
- Loose Equality (==) is a set of arcane rules and is often avoided.

### Mutation

- Objects are never “nested” in our universe. Properties "point" to objects
- Pay close attention to which wire is on the left side of assignment.
- Changing an object’s property is also called mutating that object.
- If you mutate an object, your code will “see” that change via any wires pointing at that object. Sometimes, this may be what you want. However, mutating accidentally shared data may cause bugs.
- Mutating the objects you’ve just created in code is safe. Broadly, how much you’ll use mutation depends on your app’s architecture. Even if you won’t use it a lot, it’s worth your time to understand how it works.
- You can declare a variable with const instead of let. That allows you to enforce that this variable’s wire always points at the same value. But remember that const does not prevent object mutation!
