import React, { useState,useEffect } from 'react'
import rgbToHex from './utils';

const SingleColor = ({weight,index,rgb}) => {
    const [alertmessage,setAlertMessage]=useState(false)
    useEffect(() => {
      const timeout = setTimeout(() => {
        setAlertMessage(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }, [alertmessage])
    const bcg= rgb.join(",")
    const hex=rgbToHex(...rgb)
    const styles = {
      paragraphColor: {
        color: index > 9 ? "white" : "black",
      },
    };
  return (
    <div onClick={()=>{
      setAlertMessage(true)
      navigator.clipboard.writeText(hex)
    }} className={`colorvalue`} style={{backgroundColor:`rgb(${bcg}) `}}>
{alertmessage && <p className='alert' style={styles.paragraphColor}>copied to clipboard</p>}
<p style={styles.paragraphColor}>{weight}%</p>
<p className='hex' style={styles.paragraphColor}>{hex}</p>


    </div>
  )
}

export default SingleColor