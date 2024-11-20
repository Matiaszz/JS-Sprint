let course = {
  name: "JS For begginers",
  hours: 3,
};
console.log(course);
console.log(course.name); // or course['name']
console.log(course.hours); // or course['hours']

course.j = "test"; // i can modify the existents keys too
console.log(course.j);
