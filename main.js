const employees = [{ name: "David Carlson", age: 30  },
                   { name: "John Cena", age: 34 },
                   { name: "Mike Sheridan", age: 25 },
                   { name: "John Carte", age: 50 }];

var a=employees.find(function(e,d){
    if (d%2!=0){
document.write(`${e.name}<br>${d}<br>`);
    }
    
})
    
    