export default function Home() {
  return (
    <div id="Home" className="Home section">
      <div className="restaurant_name" ><h1>SIMPLY PHO HOUSE</h1></div>
        <div><h2>Central Texas Vietnamese Food & Asian Fusion</h2></div>
      <div className="description" >
        <div className="locations hours" >
          {/* {console.log(locations)}
          {locations.forEach(element => {
            console.log('first')
            {locations.map(el => {
              <div className="hour_grid">
                <span>{el.name}</span>
                <a href="">{el.phone}</a>
              </div>
            })}
          })}
          <div className="hour_grid" >
            <span>{locations[0].name}: </span>
            <div>
              <a href={'tel:+' + locations[0].phone}>{locations[0].phone}</a>
              <span>{locations[0].address}</span>

            </div>

          </div> */}
          <div className="hour_grid" ><span>Dripping Springs: </span><a href="tel:+5555555555">555-555-5555</a></div>
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
