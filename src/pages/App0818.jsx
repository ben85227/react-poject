import React, { useState } from 'react'

// 建立元件方法一
function Mycomponent() {
    
        const [counts, setCounts] = useState(0);
        const handleClick = () => {
            setCounts(counts + 1);
        }
return( 
    <button id='btn1' onClick={handleClick}>點擊次數:{counts}</button>
    )
}

// 方法二
// const Mycomponent=()=>{
//     return(

//     )
// }

const App0818 = () => {
    // let counts=0;
    // const [counts,setCounts]=useState(0);
    return (
        <div>
        {/* <button id='btn1' onClick={() => {
        setCounts(counts+1);
        console.log(counts);
         }}>點擊次數:{counts}</button> */}
        <Mycomponent/>
    </div >
  )
}

export default App0818