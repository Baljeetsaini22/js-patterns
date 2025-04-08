//! => Print BALJEET with star pattren
let pattern = "";
//? First part for "B"
for(let i = 0; i < 5; i++) {
    if(i === 0 || i === 2 || i === 4) {
        pattern += "*****\n";
    } else {
        pattern += "*    *\n";
    }
}
//? Space between letters
pattern += "\n";
//? Second part for "A"
for(let i = 0; i < 5; i++) {
    if(i === 0) {
        pattern += "  *  \n";
    } else if(i === 2) {
        pattern += "*****\n";
    } else {
        pattern += "*   *\n";
    }
}
//? Space between letters
pattern += "\n";
//? Third part for "L"

let num = 5;
if (num > 1) {
    for (let i = 1; i <=num; i++) {    
        for (let j = 1; j <= num; j++) {      
            if (i==num || j==num) {     
                pattern += "*";    
            } 
        }
        pattern += "\n"; 
    }
}
//? Space between letters
pattern += "\n";
//? Fourth part for "J"

for(let i = 0; i < 5; i++) {
    if(i == 0 ||  i == 4) {
        pattern += "*****\n";
    } else if (i == 0 ||  i == 1){
        pattern += "    *\n";
        
    } else {
        pattern += "*   *\n";
    }
}

// Space between letters
pattern += "\n";
// Fifth part for "E"
for(let i = 0; i < 5; i++) {
        if(i === 0 || i === 2 || i === 4) {
            pattern += "*****\n";
        } else {
            pattern += "*\n";
        }
}
//? Space between letters
pattern += "\n";
//? Sixth part for "E"
for(let i = 0; i < 5; i++) {
        if(i === 0 || i === 2 || i === 4) {
            pattern += "*****\n";
        } else {
            pattern += "*\n";
        }
}
//? Space between letters
pattern += "\n";
//? Seventh part for "T"
for(let i = 0; i < 5; i++) {
        if(i === 0 ) {
            pattern += "*****\n";
        } else {
            pattern += "  *\n";
        }
}

console.log(pattern);