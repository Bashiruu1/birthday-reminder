import React from 'react'

const BirthdayCard = ({ person }) => {
  const { name, age, img } = person
  return (
    <article className='person'>
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default BirthdayCard
