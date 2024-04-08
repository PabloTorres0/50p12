import React from 'react'
import { dataContext } from '../App'
import { MdCancel } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const AskComponent = ({index}) => {
    const data = React.useContext(dataContext)
    const [active, setActive] = React.useState(false)
  return (
    <div className={`component-container ${active && 'active'}`}>
        <div>
            <p>{data[index][0]}</p>         
            <div onClick={()=>{setActive(!active)}}>
                {active ? <MdCancel size={40}/> : <MdExpandMore size={40}/> }
            </div>
        </div>
       {active && <div>
            <h3>
                {data[index][1]}
            </h3>
        </div>}
    </div>

  )
}
export default AskComponent