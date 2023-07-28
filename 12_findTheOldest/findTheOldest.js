const findTheOldest = function(people) {

  const peopleAge = people.map((person) => {
    if (!person.yearOfDeath) {
      const date = new Date();
      person.yearOfDeath = date.getFullYear();
    }
    person.age = person.yearOfDeath - person.yearOfBirth;
    return person;
  })

  let oldestPerson = peopleAge[0];

  for (person of peopleAge) {
    if (person.age > oldestPerson.age)
      oldestPerson = person;
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
