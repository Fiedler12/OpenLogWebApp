import { render } from '@testing-library/react'
import React from 'react'
import ListExample from '../components/ListExample'


function createData(
  id: number,
  name: string,
  unit: string
) {
  return {id, name, unit}; 
}

const values = [
  createData(1, "blodsukker", "units"),
  createData(2, "blodsukker", "units"),
  createData(3, "blodsukker", "units"),
  createData(4, "blodsukker", "units"),
  createData(5, "blodsukker", "units"),
  createData(6, "blodsukker", "units"),
  createData(7, "blodsukker", "units"),
  createData(8, "blodsukker", "units"),
  createData(9, "blodsukker", "units"),

]

export const LogCycle = () => {
  return (
    
    <div>LogCycle
      <div> 
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        
        </select>
        <input type="text" />
      </div>
    </div>
    
  
  )
}

const nameid = [ 'bruce', "mango", "banana","James"]





