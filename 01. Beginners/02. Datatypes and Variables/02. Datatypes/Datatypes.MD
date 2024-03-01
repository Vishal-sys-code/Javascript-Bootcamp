# **Data Types**

Data types in programming defien the kind of data that can be stored and manipulated.

There are two categories in the datatypes:
* *Primitive Datatypes*
* *Non-Primitive Datatypes*

There are again the subdivisions of these two categories.

#### **Primitive Data Types**
* **Number**: Represents both integer and floating-point numbers.
* **String**: Represents a sequence of characters, enclosed in double or single quotes.
* **Boolean**: Represents a logical value either `true` or `false`.
* **Undefined**: Represents a variable that has been declared but not assigned a value yet.
* **Null**: Represents an intentional absence of any value.
* **Symbol**: Represents a unique identifier. Introduced in ECMAScript 6(ES6).

#### **Non-Primitive Data Types**
* **Object**: Represents a collection of key-value pairs, where values can be of any data type, including other objects. Objects include arrays, functions and regular expressions.
* **Array**: A special type of object used to store multiple values in a single variable.
* **Function**: A block of reusable code that performs a specific task.
* **Date**: Represents a specific date and time.
* **RegEx**: Represents a regular expression object, used for matching patterns in the strings.

<hr>

Lets talk about in detail of everything.

### **Number**
The `number` type represents both integer and floating point numbers.
Besides regular numbers, there are some "special numeric values" which also belong to this data type: `Infinity`, `-Infinity` and `Nan`.
* **Infinity**: represents the mathematical infinity `∞`.
* **NaN**: represents the computational error. It is a result of an incorrect or an undefined mathematical operation. There is only an exception that `NaN*0 = 1`.

### **BigInt**
In JavaScript, the "number" type cannot safelt represent integer values larger than (2<sup>53</sup>-1) that's 9007199254740991 or less than -(2<sup>53</sup>-1) for negatives.

### **String**
In JavaScript, there are 3 types of quotes.

* Double quotes: "Hello".
* Single quotes: 'Hello'.
* Backticks: `Hello`.

***Note: There is no character type.***
```
In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.

In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.
```

### **Boolean**
The boolean type has only two values: `true` and `false`.

This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

```js
let bool1 = true;
let bool2 = false;
console.log(bool1); // Outputs: true
console.log(bool2); // Outputs: false
```

### **"Null" Value**

The special `null` value does not belong to any of the tpes described above. In JavaScript, `null` is not a "reference to a non-existing object" or a "null pointer" like in some other languages. It's just a special value which represents "nothing", "empty" or "value unknown".

```js
let age = null;
console.log(age); // Outputs: null
```

### **"undefined" Value**
The special valie `undefined` also stands apart. It makes a type of its own, just like `null`. The meaning of `undefined` is "value is not assigned". If the variable is declared but not assigned, then it is called as `undefined`.

```js
let age;
console.log(age); // undefined
```

### **`typeof` Operator**
It returns the type of the operand. 

```js
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "Symbol"
typeof Math // "object" (1)
typeof null // "object" (2)
typeof alert // "function" (3)
```