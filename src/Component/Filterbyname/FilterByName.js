import React from 'react'
import {Form} from 'react-bootstrap'
const FilterByName = ({inputSearch,setInputSearch}) => {
  return (
    <div>   <Form.Control type="text" placeholder="Enter Movie Name" value = {inputSearch} onChange={(e) => (setInputSearch.target.value)}/></div>
  )
}

export default FilterByName
