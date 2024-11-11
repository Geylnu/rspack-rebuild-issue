import React from 'react'
import { useState } from 'react'
import { t } from './others'

const App = () => {
  const [count, setCount] = useState(0)
  return <div onClick={() => setCount(count + 1)}>{t('locale')}</div>
}

export default App
