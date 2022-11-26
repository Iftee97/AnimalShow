import { useState } from 'react'
import bird from './assets/svg/bird.svg'
import cat from './assets/svg/cat.svg'
import cow from './assets/svg/cow.svg'
import dog from './assets/svg/dog.svg'
import gator from './assets/svg/gator.svg'
import horse from './assets/svg/horse.svg'
import heart from './assets/svg/heart.svg'
import './AnimalShow.css'

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
}

export default function AnimalShow({ type }) {
  const [clicks, setClick] = useState(0)

  const handleClick = () => {
    setClick(clicks + 1)
  }

  return (
    <div className='animal-show' onClick={handleClick}>
      <img
        src={svgMap[type]}
        alt="animal"
        className='animal'
      />
      <img
        src={heart}
        alt="heart"
        className='heart'
        style={{ width: `${10 + 10 * clicks}px` }}
      />
    </div>
  )
}
