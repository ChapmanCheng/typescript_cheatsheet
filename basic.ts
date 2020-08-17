// TYPESCRIPT CHEET SHEET
// basic type declaration
// --------------------

// - numbers
var decimal: number = 6;
var hex: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;
var big: bigint = 100n;

// --------------------
// - string
var color: string = "red";
color = "blue";

// --------------------
// Array
var list: number[] = [1, 2, 3]; // or
var list2: Array<string> = ["one", "two", "three"];

// --------------------
// Tuple
// (fixed number of elements of specific type)
var tuple: [string, number];

tuple = [10, "foobar"]; // wrong type
tuple = ["foobar", 10];
// or declare directly
var tuple2: [string, number] = ["foobar", 10];

console.log(tuple[1].substring(1)); // alert method doens't exist on type
tuple[3] = "world"; // fixed length, 3rd element not allowed

// --------------------
// Enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
var c: Color = Color.Green; // @return 2
var colorName: string = Color[2]; // @return 'Green'

// --------------------
// Unknown
// e.g. user input could be unknown type
var notsure: unknown = 4;
notsure = "could be a string";
notsure = false;

// --------------------
// Any
// opt out of type checking
function getValue(key: string): any {
  return key;
}

// Void
// returns nothing
function nothingReturns(): void {
  return null;
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never

// --------------------
// Ojbect
declare function create(o: object): void {
  return null;
};

create({ key: "value" });
create(null);
create(undefined);
create(42);
create("string");
create(false);
