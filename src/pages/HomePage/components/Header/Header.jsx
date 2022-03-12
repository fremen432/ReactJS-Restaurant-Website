import { useState } from 'react';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpen_Toggle = () => isOpen == false ? setIsOpen(true) : setIsOpen(false)

    return(
        <li  className="dropdown">
            <button onClick={isOpen_Toggle} >Order</button>
            {/* <button onClick={() => console.log(isOpen)} >CLG</button> */}
            <ul className={"dropdown-content " + (isOpen == false ? "hidden" : "block")}>
                <li className="dropdown-location"><a href="/order">Dripping Springs</a></li>
                <li className="dropdown-location"><a href="/order">Bee Cave</a></li>
                <li className="dropdown-location"><a href="/order">Marble Falls</a></li>
            </ul>
        </li>
    )
}

export default function Header() {

    return (
        <div id="SECTION__Header" className="Header box">
            <div className="logo">
                <a href="/">
                    <img className="" src="assets/Simply-Pho-House.png" alt="restaurant logo" />
                </a>
            </div>
            <ul className="navbar_elements">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Menu">Menu</a></li>
                <DropDown />
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    )
}

// function App() {
  
//     const [isChecked, setIsChecked] = React.useState(false);
    
//     return (
//       <div style={{ display: 'block', padding: 30 }}>
//         <h4>How to use Collapse Component in ReactJS?</h4>
//         <FormControlLabel
//           control={<Switch checked={isChecked} onChange={() => {
//             setIsChecked((prev) => !prev);
//           }} />}
//           label="Toggle me to see Collapse Effect"
//         />
//         <div style={{ display: 'flex' }}>
//           <Collapse in={isChecked}>
//             <Paper
//               elevation={5}
//               style={{ margin: 5 }} >
//               <svg style={{ width: 100, height: 100 }}>
//                 <polygon points="0,80 45,00, 80,70"
//                   style={{
//                     fill: 'orange',
//                     stroke: 'dimgrey',
//                     strokeWidth: 1,
//                   }} />
//               </svg>
//             </Paper>
//           </Collapse>
//         </div>
//       </div>
//     );
//   }