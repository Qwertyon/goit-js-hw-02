const checkForSpam = function (message) {
    const lowerCaseMessage = message.toLowerCase();
    const result = lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
    return result;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));