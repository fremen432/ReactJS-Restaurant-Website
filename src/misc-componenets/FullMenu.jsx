import { sortedMenu } from '../Data'

export default function FullMenu() {
    return (
        <>
            {sortedMenu.map(arr => 
                <div className="menu_category box m-2">
                <h2 className="box text-center">{arr[0].category}</h2>
            
                {/* Menu Items inside categories */}
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
            )}
        </>
    )
}