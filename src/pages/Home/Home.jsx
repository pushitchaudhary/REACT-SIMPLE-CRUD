import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import './Home.css'
function Home() {
  return (
   <> 
   <header>
        <h1>Stylish Blog</h1>
    </header>
    <Navbar/>
   <main>
   <article>
       <h2>Blog Post Title</h2>
       <p class="post-meta">Posted by <span class="author">Author</span> on <time datetime="2023-10-29">October 29, 2023</time> in <a href="#">Category</a></p>
       <p>This is the main content of your blog post. Write an engaging and informative article here.</p>
       <a href="#" class="read-more">Read More</a>
   </article>
   
</main>

<footer>
   <p>&copy; 2023 Stylish Blog</p>
</footer>
   </>
  )
}

export default Home
