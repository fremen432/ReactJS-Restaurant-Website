import { hours, locations } from '../../../../Data'

export default function Home() {
  return (
    <>
      <div className="home_hero_parent">
        <div className=" home_hero_children home_hero_child1_image"></div>
        <div className=" home_hero_children home_hero_child2_fade"></div>

        <div id="Home" className=" home_hero_children home_hero_child3_textContent snap-element">
          <h1 className="restaurant_name" >SIMPLY PHO HOUSE</h1>
          <h2>Central Texas Vietnamese Food & Asian Fusion</h2>
          <div className="description" >

            <div className="locations" >
              <h2 className="text-center" >Locations</h2>

              {locations.map(el => 
                <div className="grid grid-cols-5 ">
                  <span className="col-span-1">{el.name + ': '}</span>
                  <span className="col-span-3">{el.address}</span>
                  <a className="col-span-1" href="tel:+5555555555">{el.phone}</a>
                </div>
                )}
            </div>

            <div className="hours" >
              <h2 className="text-center" >Hours</h2>
              <div className="hours_wrapper mx-40" >
                {hours.map(el =>
                <div className="grid grid-cols-2 " >
                  <span>{el.day}</span>
                  <div>
                    <span>{el.opening + ' - '}</span>
                    <span>{el.closing}</span>
                  </div>
                </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
