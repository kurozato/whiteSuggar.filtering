
whiteSuggar = whiteSuggar || {};

/**
 * light table control module
 */
whiteSuggar.table = whiteSuggar.table || {};

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {boolean} headerClear 
 */
whiteSuggar.table.clearRows = function(table, headerClear){
  
    if(headerClear !== true){
        let thead = table.getElementsByTagName('thead');
        let tbody = table.getElementsByTagName('tbody');

        if(thead !== null){
            if(tbody !== null)
                tbody[0].innerHTML = '';                
        }
        else
            table.innerHTML = '';
    }
    else{
        table.innerHTML = '';
    }
}

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {Array} data 
 * @param {Function} render 
 */
whiteSuggar.table.createRows = function(table, data, render){
    let tbody = document.createElement('tbody');
    for(var i = 0; i < data.length; i++){
        let tr = render(data[i]);
        if(tr !== null)
            tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

/**
 * filtering table rows.
 * view rows where 'filter' return true. 
 * @param {Element} table 
 * @param {Function} filter 
 */
 whiteSuggar.table.filtering = function (table, filter) { 
    let rows = table.getElementsByTagName('tr');
    for(var i = 0; i < rows.length; i++){
        if(filter(rows[i]) === true){
            rows[i].style.display = '';
        }
        else{
            rows[i].style.display = 'none';
        }
    }
};

/**
 * return row content contain 'key'.
 * @param {string} key -  key
 * @param {HTMLTableRowElement} row - tableRow
 * @returns {boolean}
 */
 whiteSuggar.table.likeMatch = function (key, row) {
    return row.innerText.indexOf(key) > -1;
};

/**
 * return row content equal 'key'.
 * @param {string} key 
 * @param {HTMLTableRowElement} row 
 * @returns {boolean}
 */
whiteSuggar.table.match = function (key, row) {
    return row.innerText === key;
};
