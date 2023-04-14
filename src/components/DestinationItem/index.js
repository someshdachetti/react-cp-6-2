// Write your code here
import './index.css'

const Item = props => {
  const {destinationItems} = props
  const {name, imgUrl} = destinationItems
  return (
    <div className="img-container">
      <ul className="order">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </ul>
    </div>
  )
}
export default Item
