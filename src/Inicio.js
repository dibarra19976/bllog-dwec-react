import { useState } from "react";

const Inicio = () => {

    const [blogs, setBlogs] = useState([
        {titulo: "Mi Nueva web", body: "texto a mostar....", autor: "jonesy fortnite", id: 1},
        {titulo: "Yeah Perdonen", body: "Kamehameha, despues del tema del tetris viene l dragon ball rap", autor: "Porta", id: 2},
        {titulo: "Mi Nueva web 2: ahora Es Personal", body: "texto a mostarkjdgkbhjasgdhas....", autor: "freddy fivebear", id: 3}
    ])
    return ( 
        <div className="home">
            { blogs.map((blog)=>{
                return (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.titulo} </h2>
                    <p>Escrito por <span className="author">{ blog.autor }</span></p>
                    <p>{ blog.body }</p>
                </div>
                );
            }) }
        </div>
     );
}
 
export default Inicio;