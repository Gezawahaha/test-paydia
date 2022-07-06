import React, { useState } from 'react'


const NumberOne  = () => {
    const [number, setNumber]= useState(0)

    const calc = (lenght)=>{
        var n = lenght
        var string = "";
        for (var i = 1; i <= n; i++) {
        // printing spaces
        for (var j = 0; j < n - i; j++) {
            string += " ";
        }
        // printing star
        for (var k = 0; k < i; k++) {
            string += "*";
        }
        string += "<br>";
        }
        return (`<pre>${string}</pre>`);
    };

    
    return (
        <div>
            <h2>No 1</h2>
            <p>Masukan Angka</p>
            <input type="text" onChange={(e)=> setNumber(e.target.value)}/>
            <div dangerouslySetInnerHTML={{ __html: calc(number) }}/>
            
        </div>
    )

}

export default NumberOne