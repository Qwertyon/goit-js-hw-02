const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  const validResult = login.length >= 4 && login.length <= 16;
  return !validResult;
};

const isLoginUnique = function (allLogins, login) {
  const unicResult = allLogins.includes(login);
  return unicResult;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  if (isLoginUnique(allLogins, login)) {
    return "Такой логин уже используется!";
  }
  return "Логин успешно добавлен!";
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
