/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.assert(max(1, 3) === 3);
console.assert(max(0, 3) === 3);
console.assert(max(10, 3) === 10);
console.assert(max(-1, -3) === -1);
console.assert(max("aaa", 0) === 0);
console.assert(isNaN(max("aaa", "bbb")));


// * PART 1
// *
// * Define a function maxOfThree() that takes three
// * numbers as arguments and returns the largest of them.


function maxOfThree(a, b, c) {
    // YOUR CODE HERE
    if (a > b && c) {
        return a;
    } else if (b > a && c) {
        return b;
    } else {
        return b;
    }
}

console.assert(maxOfThree(1, 3, 2) === 3);
console.assert(maxOfThree(0, 3, -1) === 3);
console.assert(maxOfThree(10, 3, 50) === 50);
console.assert(maxOfThree(-1, -3, -10) === -1);
console.assert(maxOfThree("aaa", 0, 1) === 1);
console.assert(isNaN(maxOfThree("aaa", "bbb", "ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char) {
    // YOUR CODE HERE
    if (typeof char === "string") {
        return false;
    }
    if (char = 'a', 'e', 'i', 'o', 'u', 'y') {
        return true;

    } else {
        return false;
    }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);


/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(rovar) {
    // YOUR CODE HERE
    var output = "";
    for (var i = 0; i < rovar.length; i++) {

        if (rovar = "" !== 'a', 'e', 'i', 'o', 'u', 'y') {
            return rovar + "o" + rovar;

        } else
            output += rovar[i];
    }
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str) {
    // YOUR CODE HERE
    str.split('').map(function(v, i, arr) {
        return arr[arr.length - i - 1]
    }).join('')
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(text) {
        // remove punctuation from text
        text.replace(/[;'\-_!\.\?]/g, '')
        text.split(' ')
        return text.reduce(function(a, i, v, arr) {
                return (a.length < v.length ? v : a)
            }, ('')
        }

        console.assert(findLongestWord("book dogs") === "book")
        console.assert(findLongestWord("don't mess with Texas") === "Texas")
