## Named functions
#### Source: https://johnresig.com/apps/learn/

#### we can refer the function from inside of it
```
function yell(n){ 
  return n > 0 ? yell(n-1) + "a" : "hiy"; 
} 
assert( yell(4) == "hiyaaaa", "Calling the function by itself comes naturally." );
```

#### What is the name of a function?
```
var ninja = function myNinja(){ 
  assert( ninja == myNinja, "This function is named two things - at once!" ); 
}; 
ninja(); 
assert( typeof myNinja == "undefined", "But myNinja isn't defined outside of the function." ); 
log( ninja );
  
var ninja = function myNinja(){
  assert( ninja == myNinja, "This function is named two things - at once!" );
};
ninja(); // PASS This function is named two things - at once!
assert( typeof myNinja == "undefined", "But myNinja isn't defined outside of the function." ); // PASS But myNinja isn't defined outside of the function.
log( ninja ); // function myNinja() { asser ...

```
