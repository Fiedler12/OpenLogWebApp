import React from 'react'

function ListExample() {
    const options = [ 'bruce', "mango", "banana","James"]

    return (

    <div>
        <h2>{options[0]}</h2>
        <h2>{options[1]}</h2>
        <h2>{options[2]}</h2>
        <h2>{options[3]}</h2>

    </div>
  )
}

export default ListExample