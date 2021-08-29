# whiteSuggar.table
operate a table element lightly.   
'filtering' is main.    
write in pure javascript.     

## How To Use
Quick Start
```js
//get table element 
let table0 = document.getElementsById('table0');

//View Only: ID or Name contain 'XXxxXx'
whiteSuggar.table.filtering(
    table0,
    (row) => whiteSuggar.table.likeMatch('XXxxXx', row));

//may not need...
whiteSuggar.table.clearRows(table0, true);

whiteSuggar.table.createRows(
    table0, 
    data, 
    (row) => {
        let box0 = document.createElement('div');
        box0.innerHTML = 'ID:' + row['id'].toString();
        row.appendChild(box0);
        let box1 = document.createElement('div');
        box1.innerHTML = 'Name:' + row['name'];
        row.appendChild(box1);
    });
```
