import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

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
    { value: 'Nashville', label: 'Nashville'},
    { value: 'Guitar', label: 'Guitar'},
    { value: 'Classical', label: 'Classical'},
    { value: 'live gigs', label: 'live gigs'},
    { value: 'jazz', label: 'jazz'},
    { value: 'piano', label: 'piano'},
    { value: 'band', label: 'band'},
    { value: 'audition', label: 'audition'},
    { value: 'studio session', label: 'studio session'},
    { value: 'singer', label: 'singer'},
    { value: 'r&b', label: 'r&b'},
    { value: 'male', label: 'male'},
    { value: 'female', label: 'female'},
    { value: 'background vocalist', label: 'background vocalist'},
    { value: 'interview', label: 'interview'},
    { value: 'acoustic', label: 'acoustic'},
    { value: 'lounge', label: 'lounge'},
    { value: 'electronic/dance', label: 'electronic/dance'},
    { value: 'showcase', label: 'showcase'},
    { value: 'bass', label: 'bass'},
    { value: 'horns', label: 'horns'},
    { value: 'strings', label: 'strings'},
    { value: 'keyboards', label: 'keyboards'},
    { value: 'producer', label: 'producer'},
    { value: 'songwriter', label: 'songwriter'},
    { value: 'DJ', label: 'DJ'},
    { value: 'Agent/Manager', label: 'Agent/Manager'},
    { value: 'Label Rep', label: 'Label Rep'},
    { value: 'A&R', label: 'A&R'},
    { value: 'Competition', label: 'Competition'},
    { value: 'topline', label: 'topline'},
    { value: 'Emcee', label: 'Emcee'},
    { value: 'pop', label: 'pop'},
    { value: 'rock', label: 'rock'},
    { value: 'standards', label: 'standards'},
    { value: 'restaurant/bar', label: 'restaurant/bar'},
    { value: 'residency', label: 'residency'},
    { value: 'hiphop/rap', label: 'hiphop/rap'},
    { value: 'country', label: 'country'},
    { value: 'choral', label: 'choral'},
    { value: 'orchestra', label: 'orchestra'},
    { value: 'church', label: 'church'},
    { value: 'gig', label: 'gig'},
    { value: 'festival', label: 'festival'},
  ]

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}


