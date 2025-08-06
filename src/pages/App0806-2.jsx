// import React from 'react'
import Card from '../components/Card';
import '../css/app0806-1.css'

const Arr=[
    {
        id:1,
        imgURL:'https://images.unsplash.com/photo-1751401373805-ee41ae83df75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
        title:'花',
        desc:"是花",
        btnName:'圖片來源',
        btnURL:'https://images.unsplash.com/photo-1751401373805-ee41ae83df75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id:2,
        imgURL:"https://images.unsplash.com/photo-1753872931676-79eaad94a36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        title:'星空',
        desc:"是星空",
        btnName:'圖片來源',
        btnURL:'https://images.unsplash.com/photo-1753872931676-79eaad94a36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'
    },
    {
        id:3,
        imgURL:"https://plus.unsplash.com/premium_photo-1675446536649-e0d90add63bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        title:'山',
        desc:"是山",
        btnName:'圖片來源',
        btnURL:'https://plus.unsplash.com/premium_photo-1675446536649-e0d90add63bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'
    }
]
// const App = () => {
//     // 資料抽離
//         const photos={
//         photo1:{
//             imgURL:'https://images.unsplash.com/photo-1751401373805-ee41ae83df75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
//             title:'花',
//             desc:"是花",
//             btnName:'圖片來源',
//             btnURL:'https://images.unsplash.com/photo-1751401373805-ee41ae83df75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'
//         },
//         photo2:{
//             imgURL:"https://images.unsplash.com/photo-1753872931676-79eaad94a36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//             title:'星空',
//             desc:"是星空",
//             btnName:'圖片來源',
//             btnURL:'https://images.unsplash.com/photo-1753872931676-79eaad94a36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'
//         },
//         photo3:{
//             imgURL:"https://plus.unsplash.com/premium_photo-1675446536649-e0d90add63bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//             title:'山',
//             desc:"是山",
//             btnName:'圖片來源',
//             btnURL:'https://plus.unsplash.com/premium_photo-1675446536649-e0d90add63bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'
//         }
//     }

//     return (
//         <>
//             <div className='container'>
//                 <Card 
//                 imgURL={photos.photo1.imgURL}
//                 title={photos.photo1.title}
//                 desc={photos.photo1.desc}
//                 btnName={photos.photo1.btnName}
//                 btnURL={photos.photo1.btnURL}
//                 ></Card>

//                 <Card 
//                 imgURL={photos.photo2.imgURL}
//                 title={photos.photo2.title}
//                 desc={photos.photo2.desc}
//                 btnName={photos.photo2.btnName}
//                 btnURL={photos.photo2.btnURL}
//                 ></Card>

//                 <Card 
//                 imgURL={photos.photo3.imgURL}
//                 title={photos.photo3.title}
//                 desc={photos.photo3.desc}
//                 btnName={photos.photo3.btnName}
//                 btnURL={photos.photo3.btnURL}
//                 ></Card>

//             </div>
//         </>
//     )
// }

const App=()=>{
    return(
        <div className='container'>
            {
                Arr.map((photo)=>{
                    return(
                        <Card key={photo.id} imgURL={photo.imgURL} title={photo.title} desc={photo.desc} btnName={photo.btnName} btnURL={photo.btnURL}/>
                    )
                })
            }
        </div>
    )
}

export default App;