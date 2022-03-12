import Dish from './OP_Dish'

export default function Menu(props) {
  const { products, onAdd } = props;

  const sortMenu = arr => {
    let apps = []
    let friedRice = []
    let pho = []
    let specials = []

    arr.forEach(el => {
      if (el.category == 'Appetizers') apps.push(el)
      if (el.category == 'Fried Rice') friedRice.push(el)
      if (el.category == 'Noodle Soup – Pho') pho.push(el)
      if (el.category == 'Pho House Specials') specials.push(el)
    });

    return [apps, friedRice, pho, specials]
  }
  const sortedMenu = sortMenu(products);

  return (
    <div id="Menu" className="
    box 
    OrderPage_Menu 
    section 
    col-span-2 
    m-4">
      <h1 className="text-center">Menu</h1>

      {/* Menu Categories */}
      <div className="
      menu_categories 
      grid xl:grid-cols-3 
      lg:grid-cols-2 
      md:grid-cols-1
      ">

        {/* Returns h1 with all category and respective menu items inside */}
        {sortedMenu.map(arr =>
          <div className="menu_category box m-2">
            <h2 className="box text-center">{arr[0].category}</h2>
            {arr.map(dish =>
              <Dish key={dish.id} dish={dish} onAdd={onAdd} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
// 