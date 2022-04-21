// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
var pairValues = (target, inpValue = [] ) => {
    var pairs = [];
    for (var i = 0; i < inpValue.length; i++) {
      for (var j = i + 1; j < inpValue.length; j++) {
        if (inpValue[i] + inpValue[j] === target) {
          pairs.push({
            num1: inpValue[i],
            num2: inpValue[j]
          });
        }
      }
    }
    console.log(pairs);
  };
  
  var input = [5,6,8,3,4,5,2,8,1];
  pairValues(10,input);
  
  // Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
  function reverseThisArr (inp) {
    var start = 0;
    var end = inp.length - 1;
    while (start < end) {
      var swapper = inp[start];
      inp[start] = inp[end];
      inp[end] = swapper;
      start += 1;
      end -= 1;
    }
    return inp;
  };
  var inp = [1, 5, 7, 2, 3, 10, 4];
  console.log(reverseThisArr(inp));
  
  // Q3. Write a program to check if two strings are a rotation of each other?
  var checkRotatin = (input1 = "", input2 = "") => {
    if (input1.length !== input2.length) 
    return false;

    var newInp = "";
    for (var i = input2.length - 1; i >= 0; i--) {
      newInp += input2[i];
    }
    return input1 === newInp;
  };
  var input1 = "qwerty";
  var input2 = "ytrewq";
  var input3 = "qwerty";
  console.log( checkRotatin(input1, input2));
  console.log(checkRotatin(input1, input3));
  
  // Q4. Write a program to print the first non-repeated character from a string?
  
  var nonRepeatChar = (input) => {
    var storeObj = {};
    for (var i = 0; i < input.length; i++) {
      if(storeObj[input[i]]){
        storeObj[input[i]]++
      }
      else{

        (storeObj[input[i]] = 1);
      }
    }
    var result = Object.keys(storeObj).find((key) => storeObj[key] === 1);
    return result;
  };
  var input = "asdasdazddfhrfht";
  console.log( nonRepeatChar(input) );
  
  // Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
  
  function tohAlgo(cnt, strPnt, numDes, num2){
    if (cnt === 1)
      console.log( strPnt,  numDes);
    else {
      tohAlgo(cnt - 1, strPnt, num2, numDes);
      console.log( strPnt,  numDes);
      tohAlgo(cnt - 1, num2, numDes, strPnt);
    }
  };
  tohAlgo(4, "X", "Y", "Z");
  
  // creating a basic stack
  function Stack() {
    this.items = [];
  
    
    this.push = (element) => {
      
      this.items.push(element);
    };
   
    this.pop = () => {
      if (this.items.length > 0) return this.items.pop();
    };
  
   
    this.peek = () => {
      return this.items[this.items.length - 1];
    };
  
    this.isEmpty = () => {
      return this.items.length === 0;
    };
  }
  
  function checkOpr(x) {
    switch (x) {
      case "+":
      case "-":
      case "/":
      case "*":
        return true;
    }
    return false;
  }
  
  //   Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
  function changeToPrefixExp(input) {
    var stack = new Stack();
    var n = input.length;
    for (var i = 0; i < n; i += 1) {
      if (checkOpr(input[i])) {
        var opearator1 = stack.pop();
        var operator2 = stack.pop();
        var result = input[i] + operator2 + opearator1;
        stack.push(result);
      } else {
        stack.push(input[i] + "");
      }
    }
    var finalRes = "";
    while (stack.items.length > 0) finalRes += stack.pop();
    return finalRes;
  }
  
  var input = "xyz/+ab*a-/";
  console.log("Prefix expression is " + changeToPrefixExp(input));
  
  //   Q7. Write a program to convert prefix expression to infix expression.
  function infixExpression(input) {
    var stack = new Stack();
    var n = input.length;
    for (var i = n - 1; i >= 0; i -= 1) {
      var operator = input[i];
      if (checkOpr(operator)) {
        var opearator1 = stack.pop();
        var operator2 = stack.pop();
        var result = "(" + opearator1 + operator + operator2 + ")";
        stack.push(result);
      } else {
        stack.push(operator + "");
      }
    }
    return stack.pop();
  }
  
  var input = "/-a*ab+/xyz";
  console.log("Infix expression " + infixExpression(input));
  
  //   Q8. Write a program to check if all the brackets are closed in a given code snippet.
  function checkParanthesis(input) {
    var stack = new Stack();
    for (var i = 0; i < input.length; i++) {
      var pass = input[i];
  
      if (pass === "(" || pass === "[" || pass === "{") {
        stack.push(pass);
        continue;
      }
      if (stack.isEmpty()) return false;
  
      var nextPass;
      switch (pass) {
        case ")":
          nextPass = stack.pop();
          if (nextPass === "{" || nextPass === "[") return false;
          break;
        case "}":
          nextPass = stack.pop();
          if (nextPass === "(" || nextPass === "[") return false;
          break;
        case "]":
          nextPass = stack.pop();
          if (nextPass === "(" || nextPass === "{") return false;
          break;
      }
    }
    return stack.isEmpty();
  }
  
  var input = "([{}])]}";
  
  checkParanthesis(input)?console.log(true):console.log(false);
  
  // Q9. Write a program to reverse a stack.
  let stack = new Stack();
  
  function pickLastElem(x) {
    if (stack.isEmpty()) stack.push(x);
    else {
      let lastEle = stack.pop();
      pickLastElem(x);
      stack.push(lastEle);
    }
  }
  function reverse() {
    if (stack.items.length > 0) {
      let swapElem = stack.pop();
      reverse();
      pickLastElem(swapElem);
    }
  }
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  stack.push(7);
  stack.push(8);
  stack.push(9);
  stack.push(10);
  
  console.log(stack.items);
  
  reverse();

  console.log(stack.items);
  
  // Q10. Write a program to find the smallest number using a stack.
  
  function minValue() {
    var stack = new Stack();
    stack.push(50);
    stack.push(30);
    stack.push(55);
    stack.push(23);
    stack.push(25);
    stack.push(9);
    var popedItem = stack.pop();
  
    for (i = 0; i < stack.items.length; i++) {
      if (!stack.isEmpty()) {
        if (stack.items[i] < popedItem) {
          popedItem = stack.items[i];
        }
      }
    }
    return popedItem
  }

  console.log(minValue());
  