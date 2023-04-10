import React, { useState, useEffect } from 'react'
import { getTechnology } from '../../../api/technologies';

type Props = {
    technologyId: []
}

const Technology = ({technologyId}: Props) => {
    technologyId.map((id) => console.log(id))
    
    // const [technology, setTechnology] = useState([]);
    // useEffect(() => {
    //   getTechnology(technologyId)
    //   .then(({data}) => setTechnology(data))
    // },[])
  return (
    <>
        <i className="bx bxl-nodejs projects__tag-icon"></i>
    </>
  )
}

export default Technology