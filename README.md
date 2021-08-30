# whiteSuggar.filtering
elements filtering.    
write in pure javascript.     

## How To Use
Quick Start
```js
//get element 
let table0 = document.getElementById('table0');

//View Only: ID or Name contain 'XXxxXx'
whiteSuggar.filtering.filter(
    table0,
    'tr',
    (row) => whiteSuggar.filtering.likeMatch('XXxxXx', row));
    
```
Use Main:   
filtering by user input contents.
```js
let input = document.getElementById('input0');

input.addEventListener('input', function(e){

    let box = document.getElementById('box0');
    
    whiteSuggar.filtering.filter(
        box,
        'li',
        (li) => whiteSuggar.filtering.likeMatch(e.target.value, li));
});    
```
