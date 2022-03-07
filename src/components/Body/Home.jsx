import './Body.scss'

export default function Home() {
  return (
    <div id="Home" className="Home section">
      <div className="restaurant_name" ><h1>SIMPLY PHO HOUSE</h1></div>
        <div><h2>Central Texas Vietnamese Food & Asian Fusion</h2></div>
      <div className="description" >
        <div className="locations hours" >
          <div className="hour_grid" ><span>Belterra: </span><a href="tel:+5555555555">512-531-9506</a></div>
          <div className="hour_grid" ><span>Bee Cave: </span><a href="tel:+5555555555">512-263-8889</a></div>
          <div className="hour_grid" ><span>Marble Falls: </span><a href="tel:+5555555555">830-220-5013</a></div>
        </div>
        <div className="hours" >
          <div className="hour_grid" >
            <div className="grid_el" >Monday – Thursday: </div>
            <div className="grid_el" >11:00 am - 8:45 pm</div>
          </div>
          <div className="hour_grid" >
            <div className="grid_el" >Friday & Satday: </div>
            <div className="grid_el" >11:00 am - 9:45 pm</div>
          </div>
          <div className="hour_grid" >
            <div className="grid_el" >Sunday: </div>
            <div className="grid_el" >12:00 pm - 8:45 pm</div>
          </div>
        </div>
      </div>
    </div>
  )
}
