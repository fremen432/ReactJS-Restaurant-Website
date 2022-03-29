import Cart from './OP_Cart'
import Menu from '../../../../misc-componenets/Menu'; 

export default function Body(props) {

  const { products, cartItems, onAdd, onRemove } = props;

  return (
    <div id="SECTION__Body" className="OP_Body sm:grid sm:grid-cols-3">
      {/* <Menu
        products={products}
        onAdd={onAdd}
      /> */}
      <Menu
        products={products}
        onAdd={onAdd}
        page="OrderPage"
      />
      <Cart
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  )
}