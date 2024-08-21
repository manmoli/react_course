import React, { useEffect } from "react";

interface Person {
    name: string
    age: string
    nationality: string
}

export const ComponentWithUseEffect: React.FC = () => {
    useEffect(() => {

    }, [])
    return <>
        <p></p>
        <p></p>
    </>
}
const largeArrayListOfPersons = [
    { "name": "Laura", "age": "46", "nationality": "Japanese" },
    { "name": "Alex", "age": "65", "nationality": "Australian" },
    { "name": "Emily", "age": "24", "nationality": "American" },
    { "name": "Laura", "age": "30", "nationality": "Japanese" },
    { "name": "Alex", "age": "46", "nationality": "Australian" },
    { "name": "Emily", "age": "27", "nationality": "Chinese" },
    { "name": "Jane", "age": "20", "nationality": "British" },
    { "name": "Alex", "age": "68", "nationality": "Canadian" },
    { "name": "David", "age": "23", "nationality": "American" },
    { "name": "David", "age": "66", "nationality": "French" },
    { "name": "David", "age": "62", "nationality": "French" },
    { "name": "Anna", "age": "45", "nationality": "Canadian" },
    { "name": "Emily", "age": "71", "nationality": "German" },
    { "name": "David", "age": "21", "nationality": "American" },
    { "name": "David", "age": "38", "nationality": "American" },
    { "name": "Anna", "age": "42", "nationality": "Japanese" },
    { "name": "Emily", "age": "39", "nationality": "Australian" },
    { "name": "John", "age": "35", "nationality": "Mexican" },
    { "name": "Laura", "age": "67", "nationality": "French" },
    { "name": "Emily", "age": "58", "nationality": "Chinese" },
    { "name": "Jane", "age": "40", "nationality": "Indian" },
    { "name": "David", "age": "25", "nationality": "Australian" },
    { "name": "Anna", "age": "60", "nationality": "Indian" },
    { "name": "Jane", "age": "27", "nationality": "Mexican" },
    { "name": "Sarah", "age": "71", "nationality": "Canadian" },
    { "name": "Sarah", "age": "61", "nationality": "German" },
    { "name": "Emily", "age": "65", "nationality": "Indian" },
    { "name": "Michael", "age": "54", "nationality": "French" },
    { "name": "Laura", "age": "23", "nationality": "Australian" },
    { "name": "Jane", "age": "47", "nationality": "Australian" },
    { "name": "David", "age": "23", "nationality": "Mexican" },
    { "name": "James", "age": "38", "nationality": "Canadian" },
    { "name": "Anna", "age": "20", "nationality": "Canadian" },
    { "name": "James", "age": "73", "nationality": "Indian" },
    { "name": "Emily", "age": "55", "nationality": "Mexican" },
    { "name": "Jane", "age": "36", "nationality": "German" },
    { "name": "Alex", "age": "77", "nationality": "British" },
    { "name": "Alex", "age": "54", "nationality": "Australian" },
    { "name": "James", "age": "24", "nationality": "Australian" },
    { "name": "Anna", "age": "38", "nationality": "Australian" },
    { "name": "Alex", "age": "53", "nationality": "German" },
    { "name": "Michael", "age": "59", "nationality": "German" },
    { "name": "David", "age": "42", "nationality": "Indian" },
    { "name": "John", "age": "33", "nationality": "French" },
    { "name": "Alex", "age": "52", "nationality": "Chinese" },
    { "name": "Alex", "age": "19", "nationality": "Indian" },
    { "name": "Michael", "age": "20", "nationality": "American" },
    { "name": "David", "age": "55", "nationality": "Australian" },
    { "name": "Anna", "age": "62", "nationality": "British" },
    { "name": "Jane", "age": "31", "nationality": "Japanese" },
    { "name": "David", "age": "18", "nationality": "French" },
    { "name": "Anna", "age": "52", "nationality": "Canadian" },
    { "name": "Jane", "age": "34", "nationality": "Chinese" },
    { "name": "Laura", "age": "61", "nationality": "Japanese" },
    { "name": "Alex", "age": "21", "nationality": "German" },
    { "name": "Sarah", "age": "31", "nationality": "Chinese" },
    { "name": "Jane", "age": "44", "nationality": "British" },
    { "name": "Sarah", "age": "49", "nationality": "Canadian" },
    { "name": "Anna", "age": "30", "nationality": "Indian" },
    { "name": "Anna", "age": "41", "nationality": "Indian" },
    { "name": "Alex", "age": "55", "nationality": "Canadian" },
    { "name": "Sarah", "age": "62", "nationality": "Mexican" },
    { "name": "Laura", "age": "49", "nationality": "Australian" },
    { "name": "Michael", "age": "45", "nationality": "Chinese" },
    { "name": "Anna", "age": "30", "nationality": "French" },
    { "name": "James", "age": "34", "nationality": "American" },
    { "name": "Laura", "age": "71", "nationality": "Chinese" },
    { "name": "James", "age": "26", "nationality": "German" },
    { "name": "Alex", "age": "48", "nationality": "Chinese" },
    { "name": "James", "age": "75", "nationality": "Australian" }
]