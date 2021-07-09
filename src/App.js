import logo from './logo.svg';
import './App.css';
import CurrencyRow from "./CurrencyRow";
import CurrencyOutput from "./CurrencyOutput";
import EmailPush from "./EmailPush";
import {useEffect, useState} from "react";
// берём данные с цб рф
const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])


  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [currency, setCurrency] = useState(0)
  function handleCurrency(e) {
    setCurrency(e.target.valueAsNumber)
  }
  function handleToCurrency(e) {
    setToCurrency(e.target.value)
  }
  const valuteToArray = (valute)=>{
    return Object.values(valute)
  }
  // преобразуем полученные данные в обект
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.Valute)[10]
        setCurrencyOptions(valuteToArray(data.Valute))
        setFromCurrency(data.Valute.RUS)
        setToCurrency(firstCurrency)
      })
  }, [])
  // отрисовываем компаненты
  return (
   <div className={'App'}>
    <h1>Convert</h1>
     <CurrencyRow value={currency} onChange={handleCurrency}/>
     <CurrencyOutput currency={currency} onChange={handleToCurrency} selectCurrency={toCurrency} valute={currencyOptions}/>
     <h2>Email</h2>
     <EmailPush/>
   </div>
  );
}

export default App;
