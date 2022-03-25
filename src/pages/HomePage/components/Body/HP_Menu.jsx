// import { sortedMenu } from '../../../../Data'

import FullMenu from '../../../../misc-componenets/FullMenu'

export default function Menu() {
  return (
    <div id="Menu" className="Menu"> 
      <h1 className="text-center text-2xl ">Menu</h1>

      {/* Menu Categories */}
      <div className="menu_categories grid grid-cols-2">
        
        {/* Returns h1 with all category and respective menu items inside */}

        <FullMenu/>

        {/* {sortedMenu.map(arr => 
          <div className="menu_category box m-2">
            <h2 className="box text-center">{arr[0].category}</h2>

            {arr.map(el => 
              <div className="menu_item my-4">
                <div className="grid grid-cols-4 box" >
                  <h3 className="text-lg col-start-1 col-span-3">{el.name}</h3>
                  <span className="text-sm col-start-4 col-span-1">{
                    (el.price !== '' ? '$' + el.price : '') +
                    (el.price_small  ? 'Small: $' + el.price_small + ' ' : '') +
                    (el.price_large  ? 'Large: $' + el.price_large : '')
                  }</span>
                </div>
                <p className="text-sm">{el.description}</p>
              </div>
            )}
          </div>
        )} */}

      </div>
    </div>
  )
}
