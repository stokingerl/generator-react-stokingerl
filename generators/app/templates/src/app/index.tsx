import React, { useState } from 'react'
import styles from './index.scss'

export const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>{counter}</h1>
      <button
        className={styles.counterButton}
        onClick={() => setCounter(counter + 1)}
        >
          press me
      </button>
    </>
  )
}
