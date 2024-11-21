users = [
  {
    id: 1,
    name: "Allan",
  },
  {
    id: 2,
    name: "Matias",
  },
  {
    id: 3,
    name: "Joao",
  },
  {
    id: 4,
    name: "Mike",
  },
];
const sum = (n1, n2) => {
  return n1 + n2;
};

const getJoao = users.find((user) => user.name === "Joao");

console.log(sum(2, 3));
console.log(getJoao.id);
