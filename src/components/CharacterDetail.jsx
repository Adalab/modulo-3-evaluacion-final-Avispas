import React from 'react'

function CharacterDetail({filterData}) {
  return (
    <div className='card'>                                   
    <div className='card__boxImg'>
      <img src={filterData.image} alt="ad" />
    </div>
  </div>
  )
}

export default CharacterDetail
