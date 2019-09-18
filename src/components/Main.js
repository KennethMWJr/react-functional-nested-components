import React from 'react'
import City from './City'
import data from '../data'

const Main = () => {
    console.log(data)
    return(
        <div>
            {data.map( (city, index) => {
                return <City city={city} />
            })}
        </div>
    )
}

export default Main  