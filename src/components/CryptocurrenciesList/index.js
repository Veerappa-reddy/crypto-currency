import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {dataList: [], isLoading: true}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({dataList: updatedData, isLoading: false})
  }

  render() {
    const {dataList, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="tracker-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="tracks-container">
          <div className="titles-container">
            <p>Coin Type</p>
            <div className="values-container">
              <p className="usd-title">USD</p>
              <p className="euro-title">EURO</p>
            </div>
          </div>
          <ul className="unorder-list">
            {dataList.map(eachListItem => (
              <CryptocurrencyItem
                itemDetails={eachListItem}
                key={eachListItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
