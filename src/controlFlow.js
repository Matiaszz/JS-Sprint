let course = {
  name: "js for begginers",
  hours: 3,
  sections: 8,
};

for (const key in course) {
  console.log(course[key]);
}
