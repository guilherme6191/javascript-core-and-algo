*Source: https://johnresig.com/apps/learn/* 
#### Named functions
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

#### Context
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

#### Instances

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

#### Flexible arguments
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

#### Closure
