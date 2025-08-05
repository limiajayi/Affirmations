import TextFileReader from './TextFileReader'

const Home = () => {

  return (
    <>
    <h3>
      Affirmations
    </h3>
      <TextFileReader fileName={'/quotes.txt'} />
    </>
  )
}

export default Home