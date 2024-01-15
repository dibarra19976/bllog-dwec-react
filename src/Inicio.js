import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {
  const [blogs, setBlogs] = useState(null);
  const [cargando, setCarganddo] = useState(true);
  //   const handleEliminarBlog = (id) => {
  //     const nuevoBlog = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(nuevoBlog);
  //   };

  useEffect(() => {
    console.log("useEffect en marcha");
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs`)
        .then((res) => {
          return res.json();
        })
        .then((datos) => {
          // console.log(datos);
          setBlogs(datos);
          setCarganddo(false);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {cargando && <div>Cargando...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          titulo="Listado de Blogs"
          // handleEliminarBlog={handleEliminarBlog}
        />
      )}
      {/* <BlogList blogs = {blogs.filter(blog => blog.autor === "Dani")} titulo = "Blogs de Dani" /> */}
    </div>
  );
};

export default Inicio;

// useEffect
