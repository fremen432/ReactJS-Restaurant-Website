import Menu from './OP_Menu'
import Cart from './OP_Cart'

export default function Body(props) {

  const { products, cartItems, onAdd, onRemove } = props;

  return (
    <div id="SECTION__Body" className="OrderPage_Body sm:grid sm:grid-cols-3">
      <Menu
        products={products}
        onAdd={onAdd}
      />
      <Cart
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  )
}