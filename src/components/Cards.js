import React, { useState } from 'react'
import Card from "./Card"

const Cards = () => {

    const [items, setItems] = useState([
        { id: 1, img: '/img/apple.png', stat: "" },
        { id: 1, img: '/img/apple.png', stat: "" },
        { id: 2, img: '/img/pineapple.png', stat: "" },
        { id: 2, img: '/img/pineapple.png', stat: "" },
        { id: 3, img: '/img/grapes.jpg', stat: "" },
        { id: 3, img: '/img/grapes.jpg', stat: "" },
        { id: 4, img: '/img/orange.png', stat: "" },
        { id: 4, img: '/img/orange.png', stat: "" },
        { id: 5, img: '/img/pear.png', stat: "" }, 
        { id: 5, img: '/img/pear.png', stat: "" },
        { id: 6, img: '/img/strawberry.png', stat: "" },
        { id: 6, img: '/img/strawberry.png', stat: "" },
        { id: 7, img: '/img/water.jpg', stat: "" },
        { id: 7, img: '/img/water.jpg', stat: "" },
        { id: 8, img: '/img/cherry.jpg', stat: "" },
        { id: 8, img: '/img/cherry.jpg', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){

        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }
        
        else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

  return (
    <div className='container'>
        {
            items.map((item,index) =>(
                <Card  key= {index} id= {index} item={item} handleClick={handleClick}/>

            ))
        }
    </div>
  )
}

export default Cards