import React, { useState } from 'react'


const NumberTwo  = () => {
    const [panjang, setPanjang]= useState(0)
    const [lebar, setLebar]= useState(0)
    const [Keliling, setKeliling]= useState(0)
    const [Luas, setLuas]= useState(0)
    
console.log(panjang, "dan le" , lebar)
    const calc = ()=>{

        var p = panjang * 1
        var l = lebar * 1
        setKeliling((p+l) *2)
        setLuas(p * l)
    };

    
    return (
        <div>
            <h2>No 2</h2>
            <p>Masukan Panjang</p>
            <input type="text" onChange={(e)=> setPanjang(e.target.value)}/>
            <p>Masukan Lebar</p>
            <input type="text" onChange={(e)=> setLebar(e.target.value)}/><br/>
            <button type='submit' onClick={calc} >submit</button>
            <p>Perhitungan Keliling:{Keliling}</p>
            <p>Perhitungan Luas:{Luas}</p>
            


        </div>
    )

}

export default NumberTwo