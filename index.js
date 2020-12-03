
console.log("Hola desde index.js")

/* variables */
var x = 10 
var y = 55.55
console.log("x= "+x+" y= "+y)

var nombre = "pedro"
var text ="Mi nombre es pedro perez"


var text= "hola a todos... Soy Plinio Grau un estudiante que quiere aprender a programar."
console.log(text)
document.write(text)

var x = 19
console.log(x)

/* ejemplo */

var x=10+5
console.log(x)

/*Operadores de ingremento y decremmento */ 
var f = 10;
var g = ++ f;
var h = 20; 
var i = --h;
console.log("incremento:" +g);
console.log("decremento:" +i);

/*operadores de asignacion  */ 
console.log("x; " + x);
console.log("y; " + y);
console.log(x -= y +=9);

/*Operadores de Comparacíon */ 
var m1 = 4;
var m2 = 4;
console.log ( m1 == m2);

/*Operadores logicos */ 
console.log(4>2)&&(10<15);
var x=10;
var y=x+5+22+1000+50;
console.log(y)

var z=x*2;
console.log(z)
var y=y/4;
console.log(y)

var d=26%6;
console.log(d)

/*Ten en cuenta que puedes colocar vario operadores*/ 

 var x=x-(y+9)     /* que equivale a */
 
/* Igual que */


var x= 4==10; /* retorna falso */
console.log(4==10)
var x=(4>2)&&(10<15)
console.log(x)

var course = 3;
if (course == 1 ) {
     document.write ("<h1>html tutorial</h1>");
} else if (course ==2) {
    document.write ("<h1>html CSS Tutorial </h1>");
} else {
    document.write("<h1>HTML javascript tutorial</h1>");
}

/*switch "para evaluar nultiples condiciones" */ 
var day = 2;
switch (day) {
    case 1:
        document.write ("monday");
        break;
    case 2:
        document.write ("tuesday")
        break
    case 3:
        document.write ("wednesday");    
        break;
    default:
        document.write ("Another day");
}

/* Operadores de  cadena de texto*/ 
/*Operadores de cadena de texto
El operador más útil es el de concatenación, que se representa con el signo (+). Se utiliza para unir o juntar
cadenas de textos, ó cadena de textos con otros tipos de datos.
*/ 
var nombre="Plinio Grau"
var text1="Mi nombre es Plinio Grau"
var text2="Aprendo javaScript"
console.log(text)
document.write(text1 + text2);

/*El resultado es: Mi nombre es Plinio Grau Aprendo JavaScript */

var x="50";
console.log(x)
var y="200";
console.log(y)
document.write(x+y);

/* 
El resultado será: 50200  los números entre comillas son tratados como texto y no como números. */

/*Bucles for */ 
for (i = 1; i <=5; i++) {
    document.write(i + "<br/>");
}
/* while */
var i = 0;
while (i <=10 ) {
    document.write(i + "<br/>");
    i++;
}
/*do while */

var i =20;
do {
    document.write(i +"<br/>");
    i++;
}
while (i <=25);
for (i =0;i =10; i ++) {
    if (i == 5) {
        break;
    }
    document.write(i +"<br/>");
}
for (i = 0; i <=10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br/>");
}

/*Funciones  */

function sayhello(name) {
    alert("hi, " + name);
}
sayhello ("Plinio Grau");

function sayhello (naem, age) {
    document.write(name + "is" + age +"year old.");
}

/*Funciones  */

function sayhello(name) {
    alert("hi, " + name);
}
sayhello ("Plinio Grau");

function sayhello (naem, age) {
    document.write(name + "is" + age +"year old.");
}

function myfunction (p, q) {
    return p *q;
}

var r = myfunction (5, 6);
console.log(myfunction(5, 6));

/*Ventanas de alerta */

alert ("Deverdad quiere salir de esta pagina?");

/*Ventana prompt */

var use = prompt ("por favor esbriba su nombre");
alert (user);

/*Ventana confi */

var result = confirm ("La verdad quiere estar en esta pagina?");
if (result == true) {
    alert ("Gracias opor visitarnos");
}
else { 
    alert("Gracias por estar con nosotros");

}
/*CONDICIONALES */
/*var y let*/ 

function verText () {
    var s =1;
    if(true) {
    var s =2;
    console.log (s); // 2
  }
    console.log (s); //2
}

varTest ()

function letTest () {
    let s = 1;  
    if (true) {
        let s= 2;
    }
        console.log (s);
}

letTes
/*ventanas: confirm */

function letTest () {
    let x = 2;
    console.log(x);
    }
    console.log(x);
    
    /*Ejemplos del uso de let en bucles */

for (let i = 0; i <3; i++) {
    document.write(i);
}

/*Templetes literals */

let name_1="Plinio";
let msg='Welcome ${ name_1}';
console.log(msg);

let num_1=4;
let num_2=3;

let msg_2='The son is ${num_1+num_2}';
console.log(msg_2);
 
/*Bucles y funciones */

let list =["x","y","z"];
for  (let val of list) {
    console.log (val)
}

/*funciones */

const add =(n,m) => {
    let sum = n + m;
    console.log(sum);
}

const test = (u, v = 3, w = 42)=>
{
return a + b + c ;
}
console.log(test(5));

/*Objetos */

let tree = {
    heigth:10,
    color:'red',
    grow() { 
        this.heigth +=2;
    }
};

tree.grow();
console.log(tree.heigth);

let heigth=5;
let health=100;

let athlete={
    heigth,health
};
 /*Nombre de propiedades calculadas */

 let prop ='name';
 let id = '1234';
 let mobile = '08923';

 let user= {
    [prop]:'plinio',
    ['user_${id}']:'{mobile}'
 };

 var i =0;
 var a={
     ['foo'+ ++i]:1,
     ['foo'+ ++i]:1,
     ['foo'+ ++i]:1
 };

 var param ='size';
 var config = {
     [param]: 12,
     ['mobile'+ param.charAt(0).toUpperCase()+param.slice(1)]: 4
 };
 console.log(config);

 /*Objetos de asignacion */

let person = {
    name:'Antonio',
    age:'38',
    sex:'male'
};

let student = {
    name:'Juan',
    age:'25',
    xp:'5'
};

let newStudent = Object.assign ({}, person,student);
console.log(person.name);

let person_1 = {
    name: 'Antonio',
    age: '38',
};

let newPerson =Object.assign({},person);
newPerson.name = 'pedro';
console.log(person.name);      

/*Descomponer objetos */

let obj ={h:100, s: true};
let {h, s} = obj;

console.log(h); /*100 */ 
console.log(s); /*true */

let an, bn; ({an,bn} ={an:'hello',bn:'Antonio'});
console.log(an+bn);   /* helo Antonio*/

/*sin utilizar los paréntesis */

let {am, bm} = {am:'hola', bm:'Antonio'};
console.log(am + bm);

/*Asignar objetos */

var o = {h: 42, s: true};
var {H: foo, s: bar} = o;
// console.log(h)  // error
console.log(foo);  // 42

// Asignar valores preterminados a variables 
var obj1 = {idn: 42 ,name: 'Sonia'};
let {idn =18, age = 25} = obj1;
 
console.log(id);  // 42
console.log(age); // 25

// parametros Rest y Spread

function containsALL (arr, ...nums) 

// Spread es parecido al operador rest //
/*Spread en funciones Antes */
function myfunction (w, x, y, z) {
    console.log(w + x  + y + z);
}
var args =[1, 2 , 3];
myfunction.apply(null,args.concat(4));

/*Despues */

const myfunction2 =  (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args_ =[1, 2, 3];
myfunction2(...args_,4);

//ejemplo

var datefields = [1970, 0, 1]; // 1 jan 1970 
var date = new Date(...datefields);
console.log(date);

/* INTERADORES */ 



