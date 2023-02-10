# Javascript

1. high level language (dont want to deal about memory management ?TODO)
2. multi paradigm (we can use multiple styles of programming declarative ?TODO ,imperative ?TODO)
3. object oriented (based on objects, for storing most kinds of data)

### Releases

Brendan Eich creates Javascript initially called mocha in 10days in 1995  
mocha changed to livescript in 1996  
1997 Ecmascript 1: first official standard for javascript  
2009 Ecmascript 5: released with lot of new features  
ES2015/ES6: biggest update to the language ever  
Ecmascript changes to annual release cycle inorder to ship less features per upgrade

ES5  
ES2015/ES6  
ES2016/ES7  
...  
ES2020/ES11

#### Backward compatibility:

code written in 1997 put in new browser will work  
old features are never removed  
javascript supports backward compatibility

#### forward compatibility:

code written in ES2089 will not work in current browser.  
In production we can use transpilers and polyfilling to support old browsers  
ES5 is support in all browsers eg: works in IE11  
javascript dont support forward compatibility

#### Dynamic typing:

we do not manually define type of the value, instead datatypes are determined automatically in javascript.

#### let,var,const

we cannot reassign using const,using let we can reassign.

var allows adding variables without adding var keyword.(notrecommended)

#### Type conversion and coercion

Type conversion: manually converting from one type to another.

coercion: javascript converts the type automatically from one type to another.

Number('Dias') // returns NaN

#### falsy values

0, '', undefined, null, NaN

#### == vs ===

=== will check the type and the value(will not perform coercion).prefer always this operator.
== will perform coercion and checks the value

## Notes:

1. Javascript can be used in the web servers(run outside of browsers eg: nodejs)
2. Javascript can be used in the native mobile applications(ionic, react)
3. Javascript can be used in the native desktop applications(electron)
4. instead of multiple if else block we can include switch so we can avoid multiple conditions and switch will be much more clear.
