import './App.scss';
import { useEffect, useState } from 'react';
import { usePrevious} from '../../infra/Hooks';
import axios from 'axios';

const url_path = "http://techywiththegoodhair.com/en_us";


const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dictionary, setDictionary] = useState([]);
  const getData = async () => {
    const data = await axios.get(url_path)
    .then((response) => {
      setDictionary(response);
    })
    .catch((err) => {
      setError('ERROR: fetch failed');
      
    });
    return data;
  }

  useEffect(() => {
    setLoading(true);
    getData().then(() => setLoading(false));
  }, []); 

  if (loading) {
    return (<div className="loading">Loading...</div>)
  }

  if (error) {
    return (<div className="error">{error}</div>)
  }

  return (
    <div className="App">
      {dictionary.data && (
        <div>
          <header className="App-header">
            {dictionary.data.TechyWithTheGoodHairTitle}
          </header>
        </div>
      )}
    </div>
  );
}

export default App;
