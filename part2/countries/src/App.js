import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  // do this next
  const [countries, setCountries] = useState([])
  const [countryToSearch, setCountryToSearch] = useState('')

  const handleSearch = (event) => {
    console.log(event.target.value)
    setCountryToSearch(event.target.value)
  }

  return (
    <div>
      find countries <input onChange={handleSearch} value={countryToSearch}/>
    </div>
  );
}

export default App;
