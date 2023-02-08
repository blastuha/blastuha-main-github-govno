function Student(name, age) {
  this.name = name;
  this.age = age;
  this.technologies = [];
  this.setTechnologies = function(technologies) {
  this.technologies = [
  ...technologies,
  ];
  }
  this.setNewStatus = function(newStatus) {
  this.status = newStatus;
  }
}

const student = new Student ('Maxim', 20);
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student.setNewStatus('Middle');
console.log(student);

// class


class Student2 {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.technologies = [];
  }

  setTechnologies(technologies) {
    this.technologies = [
      ...technologies,
    ];
  }

  setNewStatus(newStatus) {
    this.status = newStatus
  }
}

const student2 = new Student2 ('Maxim', 20)
student2.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student2.setNewStatus('Middle');
console.log(student2)