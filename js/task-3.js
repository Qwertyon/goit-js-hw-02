const findLongestWord = function (string) {
    let makeArray = string.split(' ');
    let longestWordLength = 0;
    let longestWord;
    for (let i = 0; i < makeArray.length; i += 1) {
        if (makeArray[i].length > longestWordLength) {
            longestWordLength = makeArray[i].length;
            longestWord = makeArray[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));