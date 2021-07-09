import {useMemo} from "react";


function CurrencyOutput({valute,selectCurrency,currency,onChange}) {
  const converted = useMemo(()=>{
    const findObject = valute.find((e)=>e.CharCode === selectCurrency)
    if(findObject){
      return currency / findObject.Value / findObject.Nominal
    }else{
      return ""
    }
  },[currency,selectCurrency,valute])
  return (
    <div className="CurrencyOutput">
      <input type="number" readOnly value={converted}/>
      <select value={selectCurrency} onChange={onChange} name="converter" id="">
        {valute && valute.map((v)=>(
          <option value={v.CharCode}>{`${v.CharCode} ${v.Name}`}</option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyOutput