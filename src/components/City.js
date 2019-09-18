import React from 'react'

const City = (props) => {
    console.log("props", props) 
    const { city } = props
    console.log("this is in city", city)
    return(
        <div>
            <p>Country: {city.country}</p>
            <p>Capitol: {city.capitol}</p>
            <p>Language: {city.language}</p>
            <p>Population: {city.population}</p>
        </div>
    )
}

export default City 