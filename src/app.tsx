import React from 'react'
import { useState } from 'react'
import { t } from './others'
import { Layout } from './locales/layout'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div onClick={() => setCount(count + 1)}>
      <Layout />
      {count}
    </div>
  )
}

export default App
