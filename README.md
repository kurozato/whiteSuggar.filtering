# whiteSuggar.filtering
elements filtering.    
write in pure javascript.     

## How To Use
Quick Start
```js
//get table element 
let table0 = document.getElementById('table0');

//View Only: ID or Name contain 'XXxxXx'
whiteSuggar.filtering.filter(
    table0,
    'tr',
    (row) => whiteSuggar.filtering.likeMatch('XXxxXx', row));
    
```
