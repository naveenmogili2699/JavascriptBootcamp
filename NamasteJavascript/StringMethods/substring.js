{/* 
//--------------- substring() ------------------//
-> It is used to extract a portion of a string based on a specified start and end index.
*/}

//1//
            //0123456789
const str1 = 'HelloWorld';

 const newStr1 =str1.substring(3,6); //loW (start index will be added, End indext will be removed => in between the string will be printed );
 const newStr2 =str1.substring(5); // including 6th index the result will be printed 
 const newStr3 =str1.substring(-6,-2); // including 6th index the result will be printed 
 const newStr4 =str1.substring(-6,2); // including 6th index the result will be printed 

 console.log(newStr1, 'substring'); // loW
console.log(newStr2, 'substring'); // World
console.log(newStr3, 'substring'); // "He"
console.log(newStr4, 'substring'); // ""










