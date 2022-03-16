import Dish from './OP_Dish'

export default function Menu(props) {
  const { products, onAdd } = props;

  const sortMenu = arr => {
    let apps = []
    let friedRice = []
    let pho = []
    let specials = []

    arr.forEach(el => {
      el.category == 'Appetizers' && apps.push(el)
      el.category == 'Fried Rice' && friedRice.push(el)
      el.category == 'Noodle Soup – Pho' && pho.push(el)
      el.category == 'Pho House Specials' && specials.push(el)
    });

    return [apps, friedRice, pho, specials]
  }
  const sortedMenu = sortMenu(products);

  return (
    <div id="OP_Body_Menu" className="
    OP_Body_Menu
    box 
    rounded-lg

    col-span-2 
    m-4">
      {/* <h1 className="text-center">Menu</h1> */}

      {/* Menu Categories */}
      <div className="
      grid xl:grid-cols-3 
      lg:grid-cols-2 
      md:grid-cols-1
      ">

        {/* Returns h1 with all category and respective menu items inside */}
        {sortedMenu.map(arr =>
          <div className="box mx-2">
            <h2 className="box text-center">{arr[0].category}</h2>
            <div className="">
              {arr.map(dish =>
                <Dish key={dish.id} dish={dish} onAdd={onAdd} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
// 