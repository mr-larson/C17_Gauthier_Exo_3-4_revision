//exo_03_p1

//3.1
/* let tableau = [
    "Said",
    "Mahad",
    "Cem",
    "Antoine",
    "Cam",
    "Laurie",
    "Amine",
    "Abdel",
    "Mufasa"
] */

//3.1.2
/* console.log (tableau) */

//3.1.3
/* tableau.forEach(element =>{
    console.log(element.charAt(0))
}) */

//3.1.4
/* tableau.forEach(element =>{
    console.log(element.charAt(1))
}) */

//3.1.5
/* tableau.forEach(element =>{
    tableauA = element.charAt(1)
    console.log (tableauA + element)
}) */

//3.1.6
/* tableau.forEach (element =>{
    if(element.length%2==0){
        console.log (element.toUpperCase())
    }else{
        
    }
}) */
//-----------------------------------------
//exo_03_02
/* 
let tableau = [
    "Said",
    "Mahad",
    "Cem",
    "Antoine",
    "Cam",
    "Laurie",
    "Amine",
    "Abdel",
    "Mufasa"
]
 */
//3.2.2
/* tableau.forEach (element =>{
    if(element.index%2!=0){
        console.log (element.toUpperCase())
    }
}) */

//3.2.3
/* tableau.forEach (element =>{
    if(element.index%2==0){
        console.log (element.charAt(0).toUpperCase() + element.slice(1))
    }
}) */

//3.2.4
/* tableau.forEach (element =>{
    if(element.index%2!=0 && element.lenght>4){
        console.log (element)
    }
}) */

//3.2.5
/* tableau.forEach (element =>{
    if(element.index%2==0 && element.length>4){
        console.log (element.charAt(0).toUpperCase())
    }
}) */

//3.2.6
/* tableau.forEach(element => {
    let a = element.charAt(0).toLowerCase()
    if( a == "a" || a =="e" || a =="m" || a =="f" || a =="y" || a =="n"){
    console.log (element)
    }
})
ableau.forEach(element => {
    let a = element.charAt(0).toLowerCase()
    switch (a){
        case "a":
        case "e":
        case "m":
        case "f":
        case "y":
            console.log (element)
            break;        
    } 
*/

//3.2.7
/* tableau.forEach (element =>{
    let a = element.charAt(0)
    if((a == "A" || a =="E" || a =="M" || a =="F" || a =="Y" || a =="N") && element.length <= 5)
    console.log(element)
}) */
//-------------------------------------------------
// exo_03_03
//3.3.1
/* let tableau = [
    "Said",
    "Mahad",
    "Cem",
    "Antoine",
    "Camille",
    "Laurie",
    "Amine",
    "Abdel",
    "Mufasa"
]
 */
//3.3.2
/* tableau.forEach (element =>{
    let a = element.charAt(0).toUpperCase()
    if((a == "A" || a =="E" || a =="M" || a =="F" || a =="Y" || a =="N") && element.length <= 5)
    console.log(element)
}) */

//3.3.3
/* tableau.forEach (element =>{
    let a = element.charAt(0)
    if((a == "K" || a =="C" || a =="F" || a =="Y" || a =="N" || a =="A" || a =="E" || a =="P") && element. length%2 !=0)
    console.log(element)
}) */

//3.3.4
/* prenom.forEach(e=>{
        if (((e.charAt(0)=='k'e.charAt(0)=='c'e.charAt(0)=='m'e.charAt(0)=='f'e.charAt(0)=='y'e.charAt(0)=='n'e.charAt(0)=='a'e.charAt(0)=='e'e.charAt(0)=='p'||e.charAt(0)=='o') && e.length>5)  && e.length%2==0 ) {
          console.log(e.charAt(0).toLowerCase()+e.slice(1,2).toUpperCase()+e.slice(2,e.length -1)+e.charAt(e.length -1 ).toUpperCase());
        }
    }) */
//3.3.5
/* tableau.forEach (element =>{
    let a = element.charAt(0).toUpperCase(1)
    if((a == "S" || a =="M" || a =="C" || a =="L" || a =="N" || a =="A" || a =="E" || a =="O") && element. length%2 == 0 && element.length > 7)
    console.log(element)
}) */
//--------------------------------------------------
//exo_04
/* let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"]
 */
//4.1
/* leTableau.forEach(element => {
    switch(typeof (element)){
        case "boolean":
            console.log ("boolean")
        break
        case "number":
            console.log ("number")
        break
        case "string":
            console.log ("string")
        break
        case "object":
            console.log ("object")
        break
    default:
        break  
    }
}) */

//4.2
/* let lesIntegers =[]
let lesStrings =[]
let lesAutres =[]

leTableau.forEach(element => {
    switch(typeof (element)){
        case "number":
            lesIntegers.push(element)
        break;
        case "string":
            lesStrings.push (element)
        break;
        default:
        lesAutres.push (element)
        break;  
    }
}) 
console.table (lesIntegers)
console.table (lesStrings)
console.table (lesAutres)
*/

//4.3
/* let lesGrandsIntegers = []
let lesPetitsIntegers = []
let lesPetitsStrings = []
let lesGrandsString = []


leTableau.forEach(e => {
 if (typeof(e)=="number" && e<100) {
  lesPetitsIntegers.push(e)
 } else if (typeof(e)=="number" && e>=100) {
  lesGrandsIntegers.push(e)
 } else if (typeof(e)=="string" && e.length<6) {
  lesPetitsStrings.push(e)
 } else if (typeof(e)=="string" && e.length>=6){
  lesGrandsString.push(e)
 } 
});

console.table(lesGrandsIntegers);
console.table(lesPetitsIntegers);
console.table(lesPetitsStrings);
console.table(lesGrandsString);
 */

//4.4
/* let pot1 = []
let pot2 = []
let i = 0
while ( i <11 ) {
  let question = parseInt(prompt("donne moi un nombre"))
 if (question<=100 && question > 0 ) {
   i++
    pot1.push(question)
  }else if( question < 0) {
    alert("donnée invalide");
  } else{
    i++
    pot2.push(question)
  }
}
 
console.table(pot1);
console.table(pot2); */

//4.5
