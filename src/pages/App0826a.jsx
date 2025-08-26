import React, { use } from 'react'
import $ from 'jquery'
import { useEffect } from 'react'
import "../css/app0826a.css"

const App = () => {
    useEffect(() => {
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale')
        })
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale')
        })
    },[])


    return (
        <div>
            <h1>useEffect</h1>
            <h2>jQuery-圖片縮放</h2>
            <a href="#" className='zoom'>
                <img src="../src/images/p3.jpg" alt="" />
            </a>
        </div>
    )
}

export default App