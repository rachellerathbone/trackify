grades.filter(function(grade) {
  return grade >= 60;
}).map(function(grade) {
  switch(true) {
    case grade >= 90:
      return 'A'
    case grade >= 80:
      return 'B'
    case grade >= 70:
      return 'C'
    case grade >= 60:
      return 'D'
    default:
      return 'F'
  }
}).reduce(function(group, grade) {
  if (!group[grade]) {
    group[grade] = 0;
  }

  group[grade] += 1;

  return group
}, {});
