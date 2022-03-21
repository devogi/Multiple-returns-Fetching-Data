import React from 'react'
import { useState } from 'react/cjs/react.production.min'
const url = "https://api.github.com/QuincyLarson"
function MultipleReturns() {
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)

  return (
    <div>MultipleReturns</div>
  )
}

export default MultipleReturns
