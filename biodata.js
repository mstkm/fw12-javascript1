const biodata = {
    name : "Mugi Mustakim",
    age : 28,
    hobbies : ["Futsal", "Nonton Youtube"],
    isMarried : false,
    schoolList: [ 
        {
            name : "Unsoed",
            yearIn : 2013,
            yearOut : 2019,
            major : "Agribisnis"
        },
        {
            name : "Al Imaroh",
            yearIn : 2019,
            yearOut : 2012,
            major : "IPA"
        }
    ],
    skills : [
        {
            skillName : "HTML",
            level : "Beginner"
        },
        {
            skillName : "CSS",
            level : "Beginner"
        },
        {
            skillName : "Javascript",
            level : "Beginner"
        }
    ],
    interestInCoding : true
}

// console.log(biodata);
/* expected output:
{
  name: 'Mugi Mustakim',
  age: 28,
  hobbies: [ 'Futsal', 'Nonton Youtube' ],
  isMarried: false,
  schoolList: [
    {
      name: 'Unsoed',
      yearIn: 2013,
      yearOut: 2019,
      major: 'Agribisnis'
    },
    { name: 'Al Imaroh', yearIn: 2019, yearOut: 2012, major: 'IPA' }
  ],
  skills: [
    { skillName: 'HTML', level: 'Beginner' },
    { skillName: 'CSS', level: 'Beginner' },
    { skillName: 'Javascript', level: 'Beginner' }
  ],
  interestInCoding: true
} */
// console.log(biodata.name); // expected output: Mugi Mustakim
// console.log(biodata.age); // expected output: 28
// console.log(biodata.hobbies); // expected output: [ 'Futsal', 'Nonton Youtube' ]
// console.log(biodata.isMarried); // expected output: false
// console.log(biodata.schoolList[1].name); // expected output: Al Imaroh
// console.log(biodata.skills); 
/* expected output:
[
  { skillName: 'HTML', level: 'Beginner' },
  { skillName: 'CSS', level: 'Beginner' },
  { skillName: 'Javascript', level: 'Beginner' }
] */
// console.log(biodata.interestInCoding); // expected output: true