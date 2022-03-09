// import data from '../../../../Data'
// const menu = data.menu

import Dish from './Dish'

export default function Menu(props) {
  const { products, onAdd } = props;

  const sortMenu = arr => {
    let apps = []
    let friedRice =[]
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
  const dish_name_classes = 'grid grid-cols-4'

  
  return (
    <div id="Menu" className="box Menu section col-span-2 mx-2"> 
      <h1 className="text-center">Menu</h1>

      {/* Menu Categories */}
      <div className="menu_categories grid grid-cols-2">
        
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
