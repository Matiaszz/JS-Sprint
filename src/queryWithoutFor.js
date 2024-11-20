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

const acessName = users.find(function (user) {
  return user.name === "Joao";
});
console.log(acessName);
