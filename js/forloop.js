// ++++++++++++++++++++++++++++++++++++++++           Table using For loop                      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for (let i = 2; i <= 10; i++) {
    // console.log( "Table of "+ i + " is")
   
   for (let j = 1; j <=10; j++) {
   
        //  console.log(i+ " x "+ j +" = "+ i*j);
         
   }
   
}


// +++++++++++++++++++++++++++++++++++++ For Arrays ++++++++++++++++++++++++++++++++++++++++++++++++++



let myArray = ["Luffy","Zoro" , "Sanji", "Ussop"] 

for (let index = 0; index < myArray.length; index++) {
    
    // console.log(index);
    
    
}

// break and continue


for (let i = 0; i < 10; i++) {
    if (i==7) {
        // console.log(`${i}+" Thala for a reson"`);
        break;                                     //break statement
    }
    // console.log(i );
    
}
for (let i = 0; i < 10; i++) {
    if (i==7) {
        console.log(`${i}+" Thala for a reson"`);
        continue;                                     //continue statement
    }
    console.log(`"vlaue of i is"+ ${i}` );
    
}











