import React, { useState } from 'react';

import Dish from './OP_Dish'

function DishCategory(props) {

  const {categoryTitle, dishes, onAdd} = props;

  const [isHidden, setIsHidden] = useState('')

  const toggleHidden = () => {
    console.log(isHidden);
    setIsHidden(isHidden === '' ? 'hidden' : '')
  }

  return(
    <div className="box m-2">
    <h2 onClick={toggleHidden} className="OP_Menu_Title box text-center cursor-pointer rounded-lg">{categoryTitle}</h2>
    <div className={"OP_Menu_Dishes "}>
      {dishes.map(dish =>
        <Dish key={dish.id} dish={dish} onAdd={onAdd} hidden={isHidden}/>
      )}
    </div>
  </div>
  )
}

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

  const action = () => console.log('hey')

  const [isHidden, setIsHidden] = useState('')

  const toggleHidden = () => {
    console.log(isHidden);
    setIsHidden(isHidden === '' ? 'hidden' : '')
  }

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
          <DishCategory categoryTitle={arr[0].category} dishes={arr} onAdd={onAdd} isHidden={isHidden}/>
        )}

      </div>
    </div>
  )
}
// 