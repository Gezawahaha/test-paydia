import React, { useState } from 'react'


const NumberFour = () => {

    const data = [
        [1, 0, "Beranda", 0],
        [2, 0, "Product", 2],
        [3, 2, "Product 1", 0],
        [4, 2, "Product 2", 1],
        [5, 2, "Product 3", 2],
        
        [6, 0, "About Us", 1],
        [7, 6, "Contact Us", 0],
        [8, 4, "Product 2.1", 0]
        ]


        console.log(data[1][0])
    return (
        <div>
            <h2>No 4</h2>
            <div >
                {data.map(data => (
                <ul key={data[0][0]} >
                   {
                    data[1] ? <ul><li>{data[2]}</li> </ul> : <li>{data[2]}</li> 
                   }
                </ul>
                ))}
            </div>

        </div>
    )

}

export default NumberFour