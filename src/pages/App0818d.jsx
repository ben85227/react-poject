import React, { useState } from 'react'

const App0818d = () => {
    const [subject, setsubject] = useState('');
    const opList = ['HTML', 'CSS', 'JAVESCRIPT', 'REACT'];
    const opListValue = ['html', 'css', 'javascript', 'react'];
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <select name="" id="" value={subject} onChange={(e) => {
                setsubject(e.target.value);
                console.log(e.target.value);
            }}>
                <option value="" disabled>請選擇</option>
                {
                    opList.map((item, index) => {
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
                {/* <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JAVASCRIPT</option>
            <option value="react">REACT</option> */}
            </select>
        </div>
    )
}

export default App0818d