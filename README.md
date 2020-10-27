# Javascript Concepts



# JS Overview

##### Source: Dan Abramov's series on javascript mental models https://justjavascript.com/
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

### Prototypes

- When reading obj.prop, if obj doesn’t have a prop property, JavaScript will look for obj.__proto__.prop, then it will look for obj.__proto__.__proto__.prop, and so on, until it either finds our property or reaches the end of the prototype chain.
- When writing to obj.prop, JavaScript will usually write to the object directly instead of traversing the prototype chain.
- We can use obj.hasOwnProperty('prop') to determine whether our object has an own property called prop. In other words, it means there is a property wire called prop attached to that object directly.
- We can “pollute” a prototype shared by many objects by mutating it. We can even do this to the Object Prototype — the default prototype for {} objects! But we shouldn’t do that unless we’re pranking our colleagues.
- You probably won’t use prototypes much directly in practice. However, they are fundamental to how JavaScript objects work, so it is handy to understand their underlying mechanics. Some advanced JavaScript features, including classes, can be expressed in terms of prototypes.



# Learning Advanced Javascript
##### A practical approach to some of the advanced concepts of javascript. Source: https://johnresig.com/apps/learn/ derived from  Secrets of the JavaScript Ninja by John Resig.

### Named functions
##### We can refer the function from inside of it
```
function yell(n){ 
  return n > 0 ? yell(n-1) + "a" : "hiy"; 
} 
assert( yell(4) == "hiyaaaa", "Calling the function by itself comes naturally." );
```

##### What is the name of a function?
```
var ninja = {
  yell: function(n){
    return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
  }
};
assert( ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either." ); // PASS

var samurai = { yell: ninja.yell };
var ninja = null;

try {
  samurai.yell(4); // FAIL
} catch(e){
  assert( false, "Uh, this isn't good! Where'd ninja.yell go?" ); // FAIL
}

```

##### Let's give the anon function a name
```
var ninja = { 
  yell: function yell(n){ 
    return n > 0 ? yell(n-1) + "a" : "hiy"; 
  } 
}; 
assert( ninja.yell(4) == "hiyaaaa", "Works as we would expect it to!" );  // PASS
 
var samurai = { yell: ninja.yell }; 
var ninja = {}; 
assert( samurai.yell(4) == "hiyaaaa", "The method correctly calls itself." ); // PASS
```


#### Function as Objects - can be used as cache
```
function getElements( name ) { 
  var results; 
 
  if ( getElements.cache[name] ) { 
    results = getElements.cache[name]; 
  } else { 
    results = document.getElementsByTagName(name); 
    getElements.cache[name] = results; 
  } 
 
  return results; 
} 
getElements.cache = {}; 
 
console.log( "Elements found: ", getElements("pre").length ); 
console.log( "Cache found: ", getElements.cache.pre.length );
````

### Context
```
function katana(){ 
  this.isSharp = true; 
} 
katana(); 
assert( isSharp === true, "A global object now exists with that name and value." ); // PASS
 
var shuriken = { 
  toss: function(){ 
    this.isSharp = true; 
  } 
}; 
shuriken.toss(); 
assert( shuriken.isSharp === true, "When it's an object property, the value is set within the object." ); // PASS
```

##### Changing context (this)

```
var object = {}; 
function fn(){ 
  return this; 
} 
assert( fn() == this, "The context is the global object." ); 
assert( fn.call(object) == object, "The context is changed to a specific object." );
assert( fn() == this, "The context is the global object." ); 
assert( fn.apply(object) == object, "The context is changed to a specific object." );
```

##### Looping and making the callback context our array

```
function loop(array, fn){ 
  for ( var i = 0; i < array.length; i++ ) {
    fn.call( array, array[i], i );
  }
} 
var num = 0; 
loop([0, 1, 2], function(value, i){ 
  assert(value == num++, "Make sure the contents are as we expect it."); 
  assert(this instanceof Array, "The context should be the full array."); 
});
```

### Instances
##### `new` operator
```
function Ninja(){ 
  this.name = "Ninja"; 
} 
 
var ninjaA = Ninja(); 
assert( !ninjaA, "Is undefined, not an instance of Ninja." ); 
 
var ninjaB = new Ninja(); 
assert( ninjaB.name == "Ninja", "Property exists on the ninja instance." );
```

##### arguments.callee is the function itself - and this way we make sure a new instance is created
```
function User(first, last){ 
  if ( !(this instanceof arguments.callee /* or User */) ) 
    return new User(first, last); 
   
  this.name = first + " " + last; 
} 
 
var name = "Resig"; 
var user = User("John", name); 
 
assert( user, "This was defined correctly, even if it was by mistake." ); 
assert( name == "Resig", "The right name was maintained." );
```

### Flexible arguments
##### Using variable number of arguments
```
function merge(root){
  for ( var i = 1; i < arguments.length; i++ )
    for ( var key in arguments[i] )
      root[key] = arguments[i][key];
  return root;
}

var merged = merge({name: "John"}, {city: "Boston"}, {weather: "Cold"});
assert( merged.name == "John", "The original name is intact." );
assert( merged.city == "Boston", "And the city has been copied over." );
assert( merged.weather == "Cold", "Third argument also copied over." );
```

##### Implement a multiplication function (first argument by largest number)
```
function multiMax(multi){ 
  // Make an array of all but the first argument 
  var allButFirst = Array().slice.call( arguments, 1 ); 
 
  // Find the largest number in that array of arguments 
  var largestAllButFirst = Math.max.apply( Math, allButFirst ); 
 
  // Return the multiplied result 
  return multi * largestAllButFirst; 
} 
assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)" );
```

### Closure
##### Simple Closure
```
var count = 0; 
 
var timer = setInterval(function(){ 
  if ( count < 5 ) { 
    log( "Timer call: ", count ); 
    count++; 
  } else { 
    assert( count == 5, "Count came via a closure, accessed each step." ); 
    assert( timer, "The timer reference is also via a closure." ); 
    clearInterval( timer ); 
  } 
}, 100);
```

##### Private properties using closures (and `new` keyword)
```
function Ninja(){ 
  var slices = 0; 
   
  this.getSlices = function(){ 
    return slices; 
  }; 
  this.slice = function(){ 
    slices++; 
  }; 
} 
 
var ninja = new Ninja(); // using new keyword
ninja.slice(); 
assert( ninja.getSlices() == 1, "We're able to access the internal slice data." ); 
assert( ninja.slices === undefined, "And the private data is inaccessible to us." );
```


##### Checking value of variables
```
var a = 5;
function runMe(a){
 assert( a == 6, "Check the value of a." );

 function innerRun(){
   assert( b == 7, "Check the value of b." );
   assert( c == undefined, "Check the value of c." );
 }

 var b = 7;
 innerRun();
 var c = 8;
}
runMe(6);

for ( var d = 0; d < 3; d++ ) {
 setTimeout(function(){
   assert( d == 3, "Check the value of d." );
 }, 100);
}
```

### Temporary Scope
##### Self executing temporary function
```
(function(){
  var count = 0;

  var timer = setInterval(function(){
    if ( count < 5 ) {
      log( "Timer call: ", count );
      count++;
    } else {
      assert( count == 5, "Count came via a closure, accessed each step." );
      assert( timer, "The timer reference is also via a closure." );
      clearInterval( timer );
    }
  }, 100);
})();

assert( typeof count == "undefined", "count doesn't exist outside the wrapper" );
assert( typeof timer == "undefined", "neither does timer" );
```

##### Fix the broken clojures in this loop
```
var count = 0; 
for ( var i = 0; i < 4; i++ ) { 
  setTimeout(function(){ 
    assert( i == count++, "Check the value of i." ); 
  }, i * 200); 
}
```
###### FIX:
```
var count = 0; 
for ( var i = 0; i < 4; i++ ) (function(i){ 
  setTimeout(function(){ 
    assert( i == count++, "Check the value of i." ); 
  }, i * 200); 
})(i);
```
