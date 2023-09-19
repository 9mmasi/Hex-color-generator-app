import { useState,useEffect } from 'react'
import Values from "values.js"
import SingleColor from './SingleColor'


function App() {
  const [color, setColor] = useState("")
  const[list,setList]=useState(new Values('#c01').all(10))
  const[alert,setAlert]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
   
    try {
      const colors=new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setAlert(true)
      return error
      
    }
  }

  

  return (
    <main className='container'>

      <section className="form">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="color">hexColor:</label>
          <input name='color' className={alert?"error":"input"} type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
          <button type='submit'>generate</button>
        </form>

      </section>
      <section className="list">
        {list.map((colorvalue,index)=>{
          console.log(colorvalue)
          return <SingleColor key={index} {...colorvalue} index={index} />
        })}

      </section>
      
    </main>
  )
}

export default App
