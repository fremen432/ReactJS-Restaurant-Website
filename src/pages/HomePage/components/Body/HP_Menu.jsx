// import { sortedMenu } from '../../../../Data'

import FullMenu from '../../../../misc-componenets/FullMenu'

export default function Menu() {
  return (
    <div id="Menu" className="Menu "> 
      <h1 className="text-center text-2xl ">Menu</h1>

      {/* Menu Categories */}
      <div className="menu_categories grid grid-cols-2">
        
        {/* Returns h1 with all category and respective menu items inside */}
        <FullMenu/>
      </div>
    </div>
  )
}
