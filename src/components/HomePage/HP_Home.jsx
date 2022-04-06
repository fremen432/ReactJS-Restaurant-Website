import { hours, locations } from '../../Data.js'
import Logo from '../Logo'

export default function Home() {
  return (
    <>
      <div className="home_hero_parent text-sm">

        <div className=" home_hero_children home_hero_child1_image"></div>
        <div className=" home_hero_children home_hero_child2_fade"></div>

        <div id="Home" className="home_hero_children home_hero_child3_textContent snap-element">
          
          <Logo classes={'Logo_Home sm:max-w-full md:max-w-3xl'}/>

          <h2 className="italic sm:text-2xl">Central Texas Vietnamese Food & Asian Fusion</h2>
          <div className="description sm:text-lg" >

            <div className="locations " >
              <h2 className="text-center bg-1 " >Locations</h2>

              {locations.map(el => 
                <div className="flex flex-col justify-center items-center md:grid md:grid-cols-5 locations-box my-2 pl-2 p-1 rounded-lg">
                  <div className="col-div-1 text-center md:text-left">{el.name + ': '}</div>
                  <div className="col-span-3">{el.address}</div>
                  <a className="col-span-1" href="tel:+5555555555">{el.phone}</a>
                </div>
              )}

            </div>

            <div className="hours box " >
              <h2 className={"text-center bg-1 box  "} >Hours</h2>
              <div className="hours_wrapper md:px-40 " >

                {hours.map(el =>
                <div className={"grid grid-cols-2 box "} >
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
