const calculateEngravingPrice = function (message, pricePerWord) {
    const countWords = message.split(" ").length;
    const totalPrice = countWords * pricePerWord;
    return totalPrice;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));