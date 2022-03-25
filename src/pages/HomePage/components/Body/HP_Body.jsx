import Home from './HP_Home'
import Menu from './HP_Menu'
import Contact from './HP_Contact'
import Menu1 from '../../../../misc-componenets/Menu1'

export default function Body() {
  return (
    <div id="SECTION__Body" className="Body snap-type-y">
        <Home/>
        <Menu1 page='HomePage'/>
        <Contact/>
    </div>
  )
}