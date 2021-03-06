﻿//explicit type declaration
var bool: boolean;
var number: Number;
var string: String;
var array: Array<Number>;

enum myEmuns { one, two, three };
var anEnum: myEmuns;
var myAny: any;
var myVoid: void;

//inferred type declaration
var bool2 = true;
var numberArray = [1, 2, 3];
var stringArray = ['test', null];

window.onclick = function (mouseEvent) {  
    // MouseEvent is type is MouseEvent because the window.onclick
    // accepts a function that takes a vairable of type MouseEvent.
};

//works

bool = true;
number = 1 + 1;
string = 'Typescript';
array = [1, 2];
anEnum = myEmuns.three;
myAny = 'what ever' + 1 + true;
bool2 = bool;
numberArray.push(4);
stringArray.push('third string');


////doesn't work


//bool = 1;
//number = 1 + 'typescript';
//string = true;
//array = [1, 'two'];
//anEnum = 'one';
//bool2 = number;
//numberArray.push('5');
//stringArray.push(5);
