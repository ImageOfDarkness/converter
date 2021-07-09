

function CurrencyRow({onChange, value}) {
  return (
    <div className="CurrencyRow">
      <input placeholder={'сумма в RUB'} type="number" value={value} onChange={onChange}/>
    </div>
  )
}

export default CurrencyRow