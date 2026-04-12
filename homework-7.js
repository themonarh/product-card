import { socialMediaComments } from "./comments.js";

const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbersFromFive = numbers.filter(n => n >= 5);

console.log("Числа >= 5:", numbersFromFive);

const products = ["Ноутбук", "Телефон", "Планшет"];
const searchItem = "Телефон";

const exists = products.includes(searchItem);
console.log(`Есть ли "${searchItem}"?`, exists);

function reverseArray(arr) {
  return [...arr].reverse();
}

console.log("Перевернутые числа:", reverseArray(numbers));
console.log("Перевернутые товары:", reverseArray(products));

console.log("Количество комментариев:", socialMediaComments.length);

const comEmails = socialMediaComments.filter(c =>
  c.email.includes(".com")
);

console.log("Почты с .com:", comEmails);

const updatedComments = socialMediaComments.map(c => ({
  ...c,
  postId: c.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

const shortComments = socialMediaComments.map(c => ({
  id: c.id,
  name: c.name
}));

console.log(shortComments);

const validatedComments = socialMediaComments.map(c => ({
  ...c,
  isInvalid: c.body.length > 180
}));

console.log(validatedComments);

const emailsReduce = socialMediaComments.reduce((acc, c) => {
  acc.push(c.email);
  return acc;
}, []);

const emailsMap = socialMediaComments.map(c => c.email);

console.log("Через reduce:", emailsReduce);
console.log("Через map:", emailsMap);

const emailsString1 = emailsMap.join(", ");
const emailsString2 = emailsMap.toString();

console.log("join:", emailsString1);
console.log("toString:", emailsString2);