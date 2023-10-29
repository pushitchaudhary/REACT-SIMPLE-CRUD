import Navbar from '../Component/Navbar/Navbar'
import './Home.css'
import axios from 'axios'
import {useEffect, useState} from 'react'


function Home() {

   const [ blog, setBlog ] = useState([])

   const fetchBlog = async ()=>{
      const response = await axios.get('http://localhost:4000/blogs')
      console.log(response)
     setBlog[response]
   }

   useEffect(()=>{
      fetchBlog()
   },[])


  return (
   <> 
   <header>
        <h1>Stylish Blog</h1>
    </header>
    <Navbar/>
   <main>
   <article>
      this is artical
   </article>
   
</main>

<footer>
   <p>&copy; 2023 Stylish Blog</p>
</footer>
   </>
  )
}

export default Home
