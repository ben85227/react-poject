import React from 'react'


function MyComponent(props) {

    return <>
        <div>{props.a}</div>
        <div>{props.b}</div>
        <div>{props.a}{props.b}</div>
        {props.c()}
    </>
}


// function MyComponent(props){
function MyComponent2({ a, b, c }) {
    c();
    return <>
        <div>{a}</div>
        <div>{b}</div>
    </>
}

function MyComponent3({ a, b = '我是預設值', c }) {

    return <>
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

const App0819a = () => {
    return (
        <>
            <MyComponent a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <MyComponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log("456") }} />
            <MyComponent3 a="我是屬性a" c={() => { console.log("789") }} />
        </>
    )
}

export default App0819a