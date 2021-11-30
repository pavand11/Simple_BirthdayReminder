import React, { useState, useEffect} from 'react'
import axios from "axios"
// import { Link } from "react-router-dom"



let url = "http://localhost:52525/bdata"

const App = () => {

  const [people, setPeople] = useState([])

  const Handlindbdata = async() => {
   await axios
      .get(`${url}`)
      .then((bdataresult) => setPeople(bdataresult.data))
  }
  useEffect(() => {
    Handlindbdata();

  }, [])

  return (
    < main >
        <section className='container'>
      <h3> Today BirthDays</h3>

      
    {
      people.map((res) => {
  
        return (
          <article key={res.id} className='person'>
          
            <img src={res.image} alt={res.name} />
       
            <div>
              <h4>{res.name}</h4>
           
              <p>{res.age} years</p>
              <button  id="view">wish</button>
             
            </div>
          </article>
        );
      })
    }
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
    </main >
  )
  

}

export default App
