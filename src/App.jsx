
import Weather from './Weather';
import History from './History';
import { useState,useEffect } from 'react';

function App() {

  const [weather, setWeather] = useState(null)
  const [history, setHistory] = useState([]);
  const [load,setLoad] = useState()
  const [ham,setHam] = useState(false)
  const API_KEY = `21805bff7224936fa25d6cec016a0a4b`;

  
  async function fetchData(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const resp = await fetch(api)
    const data = await resp.json()
    const getFilterCity = history.filter(
      (d,i) => {
        return city != d.name
      }
    )

    if (data.cod == "200") {
      setWeather(data)
      setHistory([
        ...getFilterCity,
        {
          name: city,
          timestamp: new Date().getTime()
        }
      ])
      setLoad(false)
    } else if(data.cod == "404") {
      setWeather('City not found')
      setLoad(false)
    }
  }
  useEffect(
    () => {

      if (history.length != 0) localStorage.setItem("history", JSON.stringify(history))
    }
    , [history]
  )
  useEffect(
    () => {
      const lsH = localStorage.getItem("history")
      if (lsH != null) setHistory(JSON.parse([lsH]))
    }, []
  )
  function clearAll(){
    setHistory([])
    localStorage.removeItem("history")
  }

  return (
    <div className='sm:grid max-w-[1000px] gap-2 px-2 sm:px-0 grid-cols-4 mx-auto'>
      <History history={history}  fetch={fetchData} clear={clearAll} ham={ham} setHam={setHam}/>
      <Weather weather={weather} fetch={fetchData} load={load} setHam={setHam} ham={ham} loadHand={setLoad} whHand={setWeather}/>
    </div>
  );
}

export default App;
