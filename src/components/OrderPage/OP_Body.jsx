import Cart from '../Cart';
import Menu from '../Menu';

export default function Body(props) {

  const { products, cartItems, onAdd, onRemove } = props;

  return (
    <div id="SECTION__Body" className="OP_Body sm:grid sm:grid-cols-3">
      <Menu
        products={products}
        onAdd={onAdd}
        page="OrderPage"
      />
      <Cart
        products={products}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  )
}