'use strict'

// importing node file structure
const fs = require("fs")

// 1. Read the JSON file into a variable called students
const students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
let msg = "Hello"
students.forEach( (student) =>{ 
    const {firstName} = student // destructuring 
    const {lastName} = student
    console.log(`${msg} ${firstName} ${lastName}`)
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
let dStudents = students.filter((student) => {
    return student.lastName[0] === "D"
})

console.log(`Count of last names starting with D is ${dStudents.length}`)