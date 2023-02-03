// import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

// class CryptocurrencyTracker extends Component {
//     state = {isLoading:true}
//   render() {
//     return (
//       <div className="app-container">
//         <CryptocurrenciesList />
//       </div>
//     )
//   }
// }
const CryptocurrencyTracker = () => (
  <div className="app-container">
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
