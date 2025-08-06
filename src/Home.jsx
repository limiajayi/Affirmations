import TextFileReader from './TextFileReader'

const Home = () => {

  return (
    <div className='views'>
        <h3>
          Affirmations
        </h3>
        <TextFileReader fileName={'/quotes.txt'} />
    </div>
  )
}

export default Home