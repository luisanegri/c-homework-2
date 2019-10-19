function groupAdultsByAgeRange(peopleArr) {
  // filter 18 and older - Works but test doesnt pass
  const EighteenAndOlder = peopleArr.filter(person => person.age >= 18);
  // reduce to grouped arrays - Works but test doesnt pass
  const groupedByAge = EighteenAndOlder.reduce(
    (obj, person) => {
      if (person.age <= 20) {
        obj['20 and younger'].push(person);
      } else if (person.age >= 21 && person.age <= 30) {
        obj['21-30'].push(person);
      } else if (person.age >= 31 && person.age <= 40) {
        obj['31-40'].push(person);
      } else if (person.age >= 41 && person.age <= 50) {
        obj['41-50'].push(person);
      } else {
        obj['51 and older'].push(person);
      }
      return obj;
    },
    {
      '20 and younger': [],
      '21-30': [],
      '31-40': [],
      '41-50': [],
      '51 and older': []
    }
  );
}

module.exports = { groupAdultsByAgeRange };
