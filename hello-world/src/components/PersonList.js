import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {
            id: 1,
            name: "Luffy",
            age: 17,
            skill: "Rubber"
        },
        {
            id: 2,
            name: "Zoro",
            age: 20,
            skill: "Sword"
        }
    ]
    const names = ["Luffy", "Zoro", "Sanji"]
    const namesList = names.map((name,index) =>
        <h2 key={index}>{index} {name}</h2>)
    const personsList = persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))
    return (
        <div>
            <div>{personsList}</div>
            <div>{namesList}</div>
        </div>
    )
}

export default PersonList
