import TextFileReader from './TextFileReader.jsx';
import GoalsFileReader from './GoalsFileReader.jsx';

const Home = () => {

  return (
    <div className='views'>
        <h3>
          Affirmations
        </h3>
        <TextFileReader fileName={'/quotes.txt'} />
        <small>. . . to wake up to</small>
        <GoalsFileReader />
    </div>
  )
}

export default Home;