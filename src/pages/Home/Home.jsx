import Navbar from "../Component/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:4000/blogs");
    console.log(response);
    setBlogs(response.data.blogs)
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <main>

         {blogs.map((blog)=>{
           return(
            <article key={blog._id}>
            <h2>{blog.title}</h2>
            <h3>{blog.subTitle}</h3>
            <p>
              {blog.description}
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </article>
           )
         })}
        
     

      </main>

      <footer>
        <p>&copy; 2023 Stylish Blog</p>
      </footer>
    </>
  );
}

export default Home;
