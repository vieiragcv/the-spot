import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Miami', label: 'Miami'},
  { value: 'Houston', label: 'Houston'},
  { value: 'New York', label: 'New York'},
  { value: 'Las Vegas', label: 'Las Vegas'},
  { value: 'Los Angeles', label: 'Los Angeles'},
  { value: 'Atlanta', label: 'Atlanta'},
  { value: 'Chicago', label: 'Chicago'},
  { value: 'New Orleans', label: 'New Orleans'},
  { value: 'Baltimore', label: 'Baltimore'},
  { value: 'Nashville', label: 'Nashville'}
]


const Location = () => (
    <Select options={options} />

);



export default Location;