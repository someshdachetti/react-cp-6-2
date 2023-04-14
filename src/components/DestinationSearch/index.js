// Write your code here
import {Component} from 'react'
import './index.css'
import Item from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <input type="search" onChange={this.onSearch} value={searchInput} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <li className="order">
          {searchResults.map(each => (
            <Item key={each.id} destinationItems={each} />
          ))}
        </li>
      </div>
    )
  }
}
export default DestinationSearch
