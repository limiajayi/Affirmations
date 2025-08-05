import TextFileReader from './TextFileReader'

const Home = () => {

  return (
    <>
      <TextFileReader fileName={'/quotes.txt'} />
    </>
  )
}

export default Home