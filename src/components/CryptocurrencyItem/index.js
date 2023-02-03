import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = itemDetails

  return (
    <li>
      <div className="crypto-item-container">
        <div className="logo-container">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="name-container-1">
          <p className="usd">{usdValue}</p>
          <p className="euro">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
