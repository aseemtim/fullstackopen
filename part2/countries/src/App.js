import {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({ country, handleShow, toShow }) => {
  if(!toShow){
    return(
      <div>
        {country.name.common} <button onClick={handleShow}>show</button>
      </div>
    )
  }
  else {
    return(
      <div>
          {country.name.common} <button onClick={handleShow}>hide</button>
          <CountryInfo key={country.name.common} country={country} />
      </div>
    )
  }    
}

const CountryInfo = ({ country }) => {
  return(
    <div>
      <h1>{country.name.common}</h1>
      <div>
        capital {country.capital} <br />
        area {country.area}
      </div>
      <h1>languages:</h1>
      <ul>
        {Object.keys(country.languages).map((key, index) => (
          <li key={index}>{country.languages[key]}</li>
        ))}
      </ul>
      <div>
        <img src={country.flags.png} alt={country.name.common + " flag"} 
          height={200} width={200} />
      </div>
    </div>
  )
}

const App = () => {
  // do this next
  const [countries, setCountries] = useState([])
  const [countryToSearch, setCountryToSearch] = useState('')
  const [foundCountries, setFoundCountries] = useState([])
  const [toShow, setToShow] = useState(false)

  const handleSearch = (event) => {
    const keyWord = event.target.value.toLowerCase()
    console.log(keyWord)
    setCountryToSearch(keyWord)
    setFoundCountries(countries.filter(country => (
      country.name.common.toLowerCase().includes(keyWord)
    )))
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  },[])

  const handleShow = () => {
    if(toShow) {
      setToShow(false)
    }
    else {
      setToShow(true)
    }
  } 
  
  return (
    // 'show' btn needs to be fixed
    <div>
      find countries <input onChange={handleSearch} value={countryToSearch}/>
      {(foundCountries.length === 1) &&
        <CountryInfo country={foundCountries[0]} />
      } 
      {(foundCountries.length > 1) && (foundCountries.length <= 10) &&
         foundCountries.map(country => (
          <Country key={country.name.common}country={country} handleShow={handleShow} toShow={toShow}/>
        ))
      }
      {(foundCountries.length > 10) && (countryToSearch !== '') &&
        <div>
          Too many matches, specify another filter
        </div>
      } 
    </div>
    
  );
}

export default App;
