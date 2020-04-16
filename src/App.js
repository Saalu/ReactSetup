import React, { Component } from 'react'
// import axios from 'axios'

import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import {fetchData} from './api'
 class App extends Component {

   state={
     data:{},
   }


    async componentDidMount() {
      const fetchedData = await fetchData()

      this.setState({data:fetchedData})
   }


 
  render() {
    const {data}=this.state
    return (
      <div  className={styles.container}>
        <h1>App</h1>
        <Cards data={data}/>
        <CountryPicker/>
        <Charts/>
      </div>
    )
  }
}

export default App
