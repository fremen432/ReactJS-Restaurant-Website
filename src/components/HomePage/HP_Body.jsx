import Home from './HP_Home'
import Contact from './HP_Contact'
import Menu from '../Menu'

export default function Body() {
  return (
    <div id="SECTION__Body" className="Body snap-type-y">
        <Home/>
        <Menu page='HomePage'/>
        <Contact/>
    </div>
  )
}