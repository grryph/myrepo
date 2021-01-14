# **PHP Syntax Guide**
_Gryphon Strother_  -  _12/01/2021_

![PHP graphic](http://scwebsrv-eleven.site/web107/phpsplash.jpg)

## PHP Comments

**Single line PHP comments** are executed with the following:

>// This is also a single line PHP comment

**Multi Line PHP comments** are performed as follows:

>/* Multi line PHP comment */

## PHP Variables

- does not need to be declared for a value to be added to it 
- auto converted to correct data type depending on value
- ( = ) is used to assign value to a variable 
- **Demonstrated below:**

><?php
// Declaring variables
$words = "Hello";
$numbers = 22;
?> 

><?php
// Displaying variables value
echo words;  // Output: Hello
echo $numbers; // Output: 22
?>

## PHP Constants

- Like a variable but once defined, cannot be undefined or changed 
- Useful for storing data that doesn't change while script is running, such as usernames, passwords, base URL etc
- **Defined using the following function:**

><?php
// Defining constant
define("SITE_URL", "https://www.twitch.tv/grryph");
?>

><?php
// Using constant
echo 'Watch me at - ' . SITE_URL;
?>

## PHP Echo & Print Statements

### Echo Statements

**Here is how text is rendered with echo:**

><?php
// Displaying string of text
echo "Hello";
?>

**Here is how HTML is rendered with echo:**

><?php
// Displaying HTML code
echo "<h4>This is a small header.</h4>";
echo "<h4 style='color: yellow;'>This is yellow header.</h4>";
?>

**Here is how variables are rendered with echo:**

><?php
// Defining variables
$message = "Hello";
$phone = 2505056781;
$favcolor = array("BLue", "Yellow", "Purple");
?>

><?php
// Displaying variables
echo $message;
echo "<br>";
echo $phone;
echo "<br>";
echo $favcolor[2];
?>

### Print Statements

**Here is how text is rendered with print:**

><?php
// Displaying string of text
print "Hello";
?>

**Here is how HTML is rendered with print:**

><?php
// Displaying HTML code
print "<h4>This is a small header</h4>";
print "<h4 style='color: yellow;'>This is a yellow header.</h4>";
?>

**Here is how variables are rendered with print:**

><?php
// Defining variables
$message = "Hello";
$phone = 2505056781;
$favcolor = array("Blue", "Yellow", "Purple");
?>

><?php
// Displaying variables
print $message;
print "<br>";
print $phone;
print "<br>";
print $favcolor[0];
?>

## PHP Data Types

There are **eight** different data types:

- Integer
- Float
- String
- Boolean
- Array
- Object
- Resouce
- NULL

### PHP Integers

- Whole numbers 
- May be specified in 
    - decimal (base 10) 
    - hexadecimal (base 16 - prefixed with 0x) 
    - octal (base 8 - prefixed with 0) 
- Optionally preceded by a sign (- or +)
- **Examples:**

><?php
$a = 505; // positive decimal number
var_dump($a);
echo "<br>";
?>

><?php
$b = -505; // a negative decimal number
var_dump($b);
echo "<br>";
?>

><?php
$c = 0x2A; // hexadecimal number
var_dump($c);
echo "<br>";
?>
 
><?php
$d = 0505; // octal number
var_dump($d);
?>

### PHP Strings

- sequences of characters where every character takes up **1 byte**
- A string can hold letters, numbers, and special characters and it can be as large as up to 2GB (2147483647 bytes)
- May use single or double quotes 
- **Example:**

><?php
// double quotes work
$a = "Best string ever!";
?>

><?php
// but so do single quotes!
$b = 'Still a great string!';
?>

### PHP Floats ( Floating number points, doubles...)

These are decimal or fractional numbers. They are demonstrated **below:**

><?php
$a = 1.505;
var_dump($a);
echo "<br>";
?>

><?php
$b = 10.2e7;
var_dump($b);
echo "<br>";
?>

><?php
$c = 1E-5;
var_dump($c);
?>

### PHP Booleans

- True
- False
- **Example:**
- 
>><?php
// Assign the value of FALSE to a variable
$show_error = false;
var_dump($show_error);
?>

### PHP Arrays

- Variables that can hold more than one value at a time. Useful to put a bunch of things that are related into one variable. 
- Known as a indexed collection of data values. Each item in an array can be referenced by calling its individual index.
- **Example**:

><?php
$theme = array("Orange", "Black", "White");
var_dump($theme);
echo "<br>";
?>

><?php
$color_codes = array(
    "Orange" => "##995500",
    "Black" => "#000000",
    "White" => "#ffffff"
);
var_dump($color_codes);
?>

### PHP Objects

- Data type that allows storing as well as processing of data
- **Example:**

><?php
// Class definition
class greeting{
    // properties
    public $str = "Hello";
    
>    // methods
    function show_greeting(){
        return $this->str;
    }
}
?>

<?php
// Create object from class
$message = new greeting;
var_dump($message);
?>

### PHP NULL

Used to represent **empty variables** in PHP. NULL Variables are variables without data. 

><?php
$a = NULL;
var_dump($a);
echo "<br>";
?>

><?php
$b = "Hello";
$b = NULL;
var_dump($b);
?>

_When a variable is created without a value in PHP like $var; it is automatically assigned a value of null. Many novice PHP developers mistakenly considered both $var1 = NULL; and $var2 = ""; are same, but this is not true. Both variables are different — the $var1 has null value while $var2 indicates no value assigned to it._ 

### PHP Resources

A special variable that references to an external resource, typicallly holds special handlers to opened files and database connections.

**Example:**

><?php
// Open a file for reading
$handle = fopen("note.txt", "r");
var_dump($handle);
echo "<br>";
?>

><?php
// Connect to MySQL database server with default setting
$link = mysql_connect("localhost", "root", "");
var_dump($link);
?>

## PHP Operators

##### Arithmatic

> ( + ) addition
( - ) subtraction
( * ) multiplication
( / ) division
( % ) modulus

##### Assignment

> ( = ) Assign
( += ) Add and assign
( -= ) Subtract and assign
( *= ) Multiply and assign
( /= ) Divide and assign
( %= ) Divide and assign modulus 

##### Comparison

> ( == ) Equal
( === ) Identical
( != ) Not equal
( <> ) Not equal
( !== ) Not identical
( < ) Less than
( > ) Greater than 
( <= ) Less than or equal to 
( >= ) Greater than or equal to

##### Incrementing and Decrementing 

> ( ++$x ) Pre increment. Increments by one then returns $x
( $x++ ) Post increment. Returns $x then increments by one  
( --$x ) Pre decrement. Decrements by one then returns $x
( $x-- ) Post decrement. Returns $x then decrements by one 

##### Logical

> ( and ) ( $x and $y ) True if both $x and $y are true
( or ) ( $x or $y ) True if either $x and $y are true
( xor ) ( $x xor $y ) True if either $x and $y are true, but not both
( && ) ( $x && $y ) True if both $x and $y are true
( || ) ( $x || $y ) True if either $x and $y are true
( ! ) ( !$x ) True if $x is not true

##### String 

> ( . ) ( $str1 . $str2 ) Concatenation combines two strings
( .= ) ( $str1 .= $str2 ) Concatenation assignment combines two strings into one ( $str1 .= str2 turns into $str1 )

##### Array 
> ( + ) ( $x + $y ) **Union** of $x and $y
( == ) ( $x == $y ) **True if** $x and $y have the same key/value pairs
( === ) ( $x === $y ) **True if** $x and $y have the same key/value pairs in the same order and of the same types
( != ) ( $x != $y ) **True if** $x is not equal to $y
( <> ) ( $x <> $y ) **True if** $x is not equal to $y
( !== ) ( $x !== $y ) **True if** $x is not identical to $y

##### PHP 7 Spaceship

This operator ( <=> ) is used for comparing two expressions. It is also known as the **combined comparison oeprator.**

It returns **0** if both operands are **equal**, **1** if the left is greater and **-1** if the right is greater.

>$x < $y ( $x <=> $y ) === -1
$x == $y ( $x <=> $y ) === 0
$x > $y	( $x <=> $y ) === 1

## PHP "if" "else" Statements 

> if ( expression )
statement;

Allows for conditional execution which is of course very important.
**If** the value of the **expression** is **true**, the **statement** is executed.

If something else needs to happens when the value is **false**, make use of **else**.

>if (expression){
   statement1;
   statement2;
   ..
} else {
   statement3;
   statement4;
   ..
}

## PHP Functions

PHP has functions, like other languages, that are self contained blocks of code written to perform a certain task. 

PHP has many **built-in functions** that can be called directly within scripts. 

**Example"**

> function functionName(){
    // Code to be executed
}

...can be used to create a function.
Parameters can also be used **like so:**


> function myFunc($oneParameter, $anotherParameter){
    // Code to be executed
}

**For each parameter, an argument must be passed to the function.**
The parameters work like placeholder variables within a function; they're replaced at run time by the values (known as argument) provided to the function at the time of invocation.

## PHP Arrays

A **PHP Array** is a variable that allows the storage of more than one value or a group in a single name.
**Example:**


><?php
$color1 = "Red";
$color2 = "Green";
$color3 = "Blue";
?>

There are **three kinds of arrays:**

- Indexed: Array with a number key
- Associative: Array where each key has its own value
- Multidimensional: Array containing one or more arrays within itself

##### Indexed

**An indexed or numeric array stores each array element with a numeric index.**

><?php
// Define an indexed array
$colors = array("Red", "Green", "Blue");
?>

You can assign indexes manually aswell:

><?php
$colors[0] = "Red"; 
$colors[1] = "Green"; 
$colors[2] = "Blue"; 
?>

##### Associative

**In an associative array, the keys assigned to values can be arbitrary and user defined strings.**

><?php
// Define an associative array
$ages = array("Peter"=>22, "Clark"=>32, "John"=>28);
?>

The following method is equivalent to the previous:

><?php
$ages["Peter"] = "22";
$ages["Clark"] = "32";
$ages["John"] = "28";
?>

##### Multidimensionial

**The multidimensional array is an array in which each element can also be an array and each element in the sub-array can be an array and so on.**

><?php
// Define a multidimensional array
$contacts = array(
    array(
        "name" => "Peter Parker",
        "email" => "peterparker@mail.com",
    ),
    array(
        "name" => "Clark Kent",
        "email" => "clarkkent@mail.com",
    ),
    array(
        "name" => "Harry Potter",
        "email" => "harrypotter@mail.com",
    )
);
// Access nested value
echo "Peter Parker's Email-id is: " . $contacts[0]["email"];
?>

## PHP Loops

##### "While" Loop

> while(condition){
    // Code to be executed
}

The while statement will **loop through a block of code** as long as the condition specified in the while statement evaluates to **true.**

><?php
$i = 1;
while($i <= 3){
    $i++;
    echo "The number is " . $i . "<br>";
}
?>

##### "Do While" Loop

>do{
    // Code to be executed
}

>while(condition);

The do-while loop is a variant of while loop, which **evaluates the condition at the end of each loop iteration.** This is the main difference from the **while loop** in which the condition is evaluated at the **beginning** of each loop iteration. 

##### "For" Loop

> for(initialization; condition; increment){
    // Code to be executed
}

This loop **repeats code as long as a certain condition is met.** 

><?php
for($i=1; $i<=3; $i++){
    echo "The number is " . $i . "<br>";
}
?>

##### "Foreach" Loop

This loop is used to **iterate over arrays.**

> foreach($array as $value){
    // Code to be executed
}

><?php
$colors = array("Red", "Green", "Blue");
 
>// Loop through colors array
foreach($colors as $value){
    echo $value . "<br>";
}
?>

There is also **alternative syntax** for these:

>foreach($array as $key => $value){
    // Code to be executed
}

This can be useful for situations **as follows:**

><?php
$superhero = array(
    "name" => "Peter Parker",
    "email" => "peterparker@mail.com",
    "age" => 18
);
 
>// Loop through superhero array
foreach($superhero as $key => $value){
    echo $key . " : " . $value . "<br>";
}
?>











