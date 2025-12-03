const findTheOldest = function(arr) {
    let oldestPerson;
    let oldestAge = 0;

    for (let person of arr){
        let age;
        if(!("yearOfDeath" in person)){
            let currentYear = new Date().getFullYear()
            age = currentYear - person.yearOfBirth;
        }
        else{
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if(age > oldestAge){
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
