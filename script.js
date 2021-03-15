function check(){
    var charcheck = document.getElementById('charcase').value;
    var charlow = charcheck.toLowerCase();
    console.log(charlow)
    if(charcheck.length === 1){
        if(charlow === charcheck){
           document.getElementById('ans').innerHTML = `The character is Lower Case`
        }
        else{
            document.getElementById('ans').innerHTML = `The character is Upper Case`
        }
    }
    else{
       document.getElementById('ans').innerHTML = `please enter a character`
    }
    
}

function week(){
    var daycheck = document.getElementById('daynum').value;   
    var weekarr = ['Sunday' ,' Monday' , 'Tuesday' ,' Wednesday' , 'Thursday' ,' Friday' , 'Saturday' ]
    if(daycheck => 6){
        document.getElementById('ans').innerHTML = `The day of the week is ${weekarr[daycheck]}`   
    }
    else{
        document.getElementById('ans').innerHTML = `Please valid value`
    }
}

function month(){
    var monthcheck = document.getElementById('monthnum').value;   
    var montharr = ['January' ,'Fabruary' , 'March' ,'April' , 'May' ,'June' , 'July', 'Augest' ,'september', 'October' , 'November' , 'December' ]

    // if(daycheck => 11){
    //     document.getElementById('ans').innerHTML = `The day of the  is ${weekarr[daycheck]}`   
    // }
    // else if(daycheck <= 6){
    //     document.getElementById('ans').innerHTML = `Please valid value`
    switch(monthcheck) {
        case '1':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[0]} is 28 `;
          break;
          case '2':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[1]} is 28 `;
          break;
          case '3':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[2]} is 28 `;
          break;
          case '4':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[3]} is 28 `;
          break;
          case '5':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[4]} is 28 `;
          break;
          case '6':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[5]} is 28 `;
          break;
          case '7':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[6]} is 28 `;
          break;
          case '8':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[7]} is 28 `;
          break;
          case '9':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[8]} is 28 `;
          break;
          case '10':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[9]} is 28 `;
          break;
          case '11':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[10]} is 28 `;
          break;
          case '12':
            document.getElementById('ans').innerHTML = ` The days in ${montharr[11]} is 28 `;
          break;
          default:
            document.getElementById('ans').innerHTML = ` Please enter valid value`;
}
}
function triangle(){
    var angcheck = document.getElementById('angle1').value;   
    var anglcheck = document.getElementById('angle2').value;   
    var anglecheck = document.getElementById('angle3').value; 
    var trianglecheck = parseInt(angcheck) + parseInt(anglcheck) + parseInt(anglecheck);  
    console.log(trianglecheck)
    if(trianglecheck === 180){
        document.getElementById('ans').innerHTML = `The Angles ${angcheck} , ${anglcheck} and ${anglecheck} make a right triangle`   
    }
    else{
        document.getElementById('ans').innerHTML = `these angle donot make a triangle`
    }
}
function triangleType(){
    var angtypecheck = document.getElementById('angle01').value;   
    var angltypecheck = document.getElementById('angle02').value;   
    var angletypecheck = document.getElementById('angle03').value; 
    var trianglecheck = parseInt(angtypecheck) + parseInt(angltypecheck) + parseInt(angletypecheck); 
    if(angtypecheck === angltypecheck && angltypecheck === angletypecheck){
        document.getElementById('ans').innerHTML = `The Angles ${angtypecheck} , ${angltypecheck} and ${angletypecheck} make a Equilateral triangle`   
    } 
    else if(trianglecheck === 180){
        if(angtypecheck === angltypecheck || angtypecheck=== angletypecheck || angltypecheck === angletypecheck){
            document.getElementById('ans').innerHTML = `The Angles ${angtypecheck} , ${angltypecheck} and ${angletypecheck} make a Isosceles triangle`   
        }
        else {
            document.getElementById('ans').innerHTML = `these angle make a Scalene triangle`
        }
    }
    else{
        document.getElementById('ans').innerHTML = `these angle donot make a triangle`
    }
   }
   function quadEq(){
    var val1check = document.getElementById('val1').value;   
    var val2check = document.getElementById('val2').value;   
    var val3check = document.getElementById('val3').value; 
    var a = parseInt(val1check)
    var b = parseInt(val2check)
    var c = parseInt(val3check)
    var forminus = (- b - Math.sqrt((b*b) - (4*a*c)))/(2*a)
    var forplus = (- b + Math.sqrt((b*b) - 4*a*c))/(2*a)
    document.getElementById('ans').innerHTML = `The roots of ${a}x2 + ${b}x + ${c} is ${forplus} and ${forminus}`
}
function profitLoss(){
    var investval1 = document.getElementById('investval1').value;   
    var investval2 = document.getElementById('investval2').value;   
    var check = parseInt(investval2) - parseInt(investval1)
    if(check > 0){
        document.getElementById('ans').innerHTML = `The profit is ${check} dollars`   
    }
    else{
        document.getElementById('ans').innerHTML = `The loss is ${check}  dollars`
    }
   
}
function occur(){
  var text = document.getElementById('wordenter').value;   
  var chartocheck = document.getElementById('charenter').value;
  let count = 0;
  for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == chartocheck) {
          count += 1;
      }
  }
  document.getElementById('ans').innerHTML = `${count}`
}
function frequency() {
  var text = document.getElementById('freqinput').value;
  var freq = {};
  for (var i=0; i<text.length;i++) {
      var character = text.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }
  console.log(freq)
  document.getElementById('ans').innerHTML = `check console`
};

function removefirst(){
  var text = document.getElementById('removefirst').value
  var res = text.replace(text.charAt(0), "");
  document.getElementById('ans').innerHTML = `string with remove of last character is = ${res}`
}
function removelast(){
  var text = document.getElementById('removelast').value
  var res = text.replace(text.charAt(text.length-1), "");
  document.getElementById('ans').innerHTML = `string with remove of last character is = ${res}`
}
function removeall(){
  var text = document.getElementById('removeall').value
  var char = document.getElementById('chartoremove').value
  var res = text.replace(/char/g, "red");
  document.getElementById('ans').innerHTML = `all occurence is replace by '.' = ${res}`
}
function natural(){
  const number = document.getElementById('natinput').value

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
document.getElementById('ans').innerHTML =`Sum of natural number till ${number} is ${sum}`
}
function even(){
  const number = document.getElementById('eveninput').value
let sum = 0;
for (let i = 0; i <= number; i += 2) { 
    sum += i;
}
document.getElementById('ans').innerHTML =`Sum of even number till ${number} is ${sum}`
}
function odd(){
  const number = document.getElementById('oddinput').value
let sum = 0;
for (let i = 1; i <= number; i += 2) { 
    sum += i;
}
document.getElementById('ans').innerHTML =`Sum of even number till ${number} is ${sum}`
}
function table(){
const number = document.getElementById('tableinput').value;
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    document.getElementById('ans').innerHTML =`check console`;
    console.log(`${number} * ${i} = ${result}`)
}
}
function countnum(){
  const number = document.getElementById('countnum').value;
  const count = number.length;
  document.getElementById('ans').innerHTML =`Number of digits in ${number} is ${count}`
}
function displaynum(){
  const number = document.getElementById('displaynum').value;
  const count = number.length-1;
  const first = number.charAt(0);
  const last = number.charAt(count)
  document.getElementById('ans').innerHTML =`the ${number} has first digit is ${first} and last digit is ${last}`
}

function addnum(){
  const number = document.getElementById('addnum').value;
  const count = number.length-1;
  const first = number.charAt(0);
  const last = number.charAt(count)
  document.getElementById('ans').innerHTML =`the ${number} has first digit is ${first} and last digit is ${last} and sum is ${first + last}`
}

function multiplynum(){
  const number = document.getElementById('multiplynum').value;
  const count = number.length-1;
  const first = parseInt(number.charAt(0));
  const last = parseInt(number.charAt(count))
  document.getElementById('ans').innerHTML =`the ${number} has first digit is ${first} and last digit is ${last} and sum is ${first * last}`
}