import './ShowCount.css'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const ShowCount = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const restar = () => {
    setCount(count - 1)
  }

  const sumar = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h2>You clicked here {count} times</h2>
      <div className='buttons'>
        <button onClick={restar}>Restar</button>
        <button onClick={sumar}>Sumar</button>
      </div>
    </div>
  )
}

export default ShowCount
