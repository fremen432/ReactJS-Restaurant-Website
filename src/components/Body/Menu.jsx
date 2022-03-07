import React from 'react'

import menu from '../../Data'

// const sortedMenu = menu.map(el => {
//   let apps = []
//   let drinks = []
//   let friedRice =[]
//   let pho = []
//   let specials = []

//   if (el.category == 'Appetizers') apps.push(el)
//   if (el.category == 'Beverages') drinks.push(el)
//   if (el.category == 'Fried Rice') friedRice.push(el)
//   if (el.category == 'Noodle Soup – Pho') pho.push(el)
//   if (el.category == 'Pho House Specials') specials.push(el)
//   return [apps, drinks, friedRice, pho, specials]
// }
//   )

  const sortMenu = arr => {

    let apps = []
    let drinks = []
    let friedRice =[]
    let pho = []
    let specials = []

    arr.forEach(el => {
      if (el.category == 'Appetizers') apps.push(el)
      if (el.category == 'Beverages') drinks.push(el)
      if (el.category == 'Fried Rice') friedRice.push(el)
      if (el.category == 'Noodle Soup – Pho') pho.push(el)
      if (el.category == 'Pho House Specials') specials.push(el)
    });

    return [apps, drinks, friedRice, pho, specials]
  }

  const sortedMenu = sortMenu(menu)


export default function Menu() {
  return (
    <div id="Menu" className="Menu section">

      <div className="menu_section">
        <h2>Appetizers</h2>
        <div className="menu_items" >
          {sortedMenu[0].map(el => 
          <>
          <div className="grid" >
            <h3>{el.name}</h3>
            <span>{'$'+el.price}</span>
          </div>
            <p>{el.description}</p>
          </>
        )}

        </div>

      </div>
      <div className="menu_section">
        <h2>Beverages</h2>
      </div>
      <div className="menu_section">
        <h2>Fried Rice</h2>
      </div>




      {/* {console.log(sortedMenu[0])} */}
      {/* {console.log(menu)} */}

    </div>

    
  )
}
