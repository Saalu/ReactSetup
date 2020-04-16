import React, { Component } from 'react'
import axios from 'axios'

 const url = 'https://covid19.mathdro.id/api'

 export const fetchData = async()=>{
    try {
        const{data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)

        return {confirmed, recovered, deaths, lastUpdate}
    } catch (err) {
       console.log('Error: ', err) 
    }
}



// export const getData =()=>{
//      axios.get(url)
//      .then(data=>{

//          console.log(data)
//      }
//         )
//      .catch(err=>console.log(err))
//  }