import TextFileReader from './TextFileReader'

const Home = () => {

  return (
    <div className='views'>
        <h3>
          Affirmations
        </h3>
        <TextFileReader fileName={'/quotes.txt'} />
        <small>to wake up to</small>
    </div>
  )
}

export default Home