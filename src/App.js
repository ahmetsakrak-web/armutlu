import foto1 from "./images/foto1.jpg"
import foto2 from "./images/foto2.jpg"
import foto3 from "./images/foto3.png"
import foto4 from "./images/foto4.jpg"
import foto5 from "./images/foto5.jpg"
import foto6 from "./images/foto6.jpg"
import foto7 from "./images/foto7.jpg"
import foto8 from "./images/foto8.jpg"
import foto9 from "./images/foto9.jpg"
import React  from 'react';



function App() {


  
const posts =[];
let deneme =[];
const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9
];

let imageIndex =0;

for(let i =0;i<10;i++){
  let item ={
    id:i,
    title:`Post ${i}`,
    image:images[imageIndex]
  }
  posts.push(item);
  imageIndex++;
  if(imageIndex>images.length-1) imageIndex=0;
}

const Images =({columns,posts})=>{

  let columnWrappers={}
  
  for(let i=0; i<columns;i++){
    columnWrappers[`column${i}`]=[];
  }
  
  for(let i=0; i<posts.length;i++){
  
      const column = i % columns;
      columnWrappers[`column${column}`].push(posts[i]);
  }
 
  for(let i=0;i < 3; i++){
   
   let columnPosts  = columnWrappers[`column${i}`];
   
     deneme[i]=  columnPosts;
           
  }
  return <div className="images">
    {deneme.map(c=>{
      return  <div className="column">
                    {c.map(post=>{
                      console.log(post.length);
                    return <div className="post" key={post.id}> 
                                            <img src={post.image} alt='deneme'/> 
                                            <div className="overlay"></div>
                                          </div>
                    })}
               </div>
  })}
  </div> 
  
 
} 









  return (
    <div className='container'>
      <nav>
          <a href='#'>Anasayfa</a> 
          <ul>
            <li><a href='#'>Galeri</a></li>
            <li><a href='#'>Hakkımızda</a></li>
            <li><a href='#'>Haberler</a></li>
          </ul>
      </nav>

      <div className="showcase">
              <h1>Armutlu ile Tanışın</h1>
              <h2>Hatay'da Bir Cennet</h2>
          
      </div>

    <div className='contents'>
    
          <div className='hakkimizda'>
            <div className='img'></div>
            <div className='metin'>
            <h2 className='baslik'>Hakkımızda</h2>
              <p>Quisque varius, ipsum in pharetra consectetur, est lectus maximus mi, eu fringilla sapien ipsum sed enim. Aliquam lacinia odio vitae ultrices consequat. Phasellus ut lectus nisi. Nam nulla purus, placerat id nisi dapibus, efficitur ornare est. Mauris blandit sem et nibh ullamcorper, at bibendum arcu iaculis. Vivamus pharetra ligula sit amet tincidunt bibendum. Nam velit odio, imperdiet sed gravida vitae, rutrum et purus.</p>
            </div>
          </div>

          <div className='galeri'>
            <h2>Armutludan Manzaralar!</h2>
          <Images columns={3} posts={posts}  />
          </div>


          <a className='oneri'>Fikrini Paylaş!</a>
      </div>
     
    </div>
   
  );
}

export default App;
