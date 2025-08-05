import { useState, useEffect } from 'react'
import TextFileReader from './TextFileReader'

const Home = () => {

  return (
    <>
      <TextFileReader text={'motivation'} fileName={'/quotes.txt'} />
    </>
  )
}

export default Home