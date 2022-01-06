import React from 'react'
import { useState } from 'react'
import BirthdayCard from './BirthdayCard'
import people from '../data/people'

const BirthdayList = () => {
  const [listOfPeople, setListOfPeople] = useState(people)

  return (
    <section className='container'>
      <h3>{listOfPeople.length} birthdays today</h3>
      {listOfPeople.map((person) => (
        <BirthdayCard key={person.id} person={person} />
      ))}
      <button onClick={() => setListOfPeople([])}>Clear All</button>
      <a href='https://unsplash.com/s/photos/person-face'>
        Images Provided by Unplash
      </a>
    </section>
  )
}
export default BirthdayList
