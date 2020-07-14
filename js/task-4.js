const formatString = function (string) {
    let formattedString = string;
    if (string.length > 40) {
        formattedString = string.substr(0, 40) + '...';
    }
    return formattedString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));