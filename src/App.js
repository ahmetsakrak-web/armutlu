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




const Images =({columnsCount,images})=>{
  let columns =[]
  let columnWrappers={}
  
  for(let i=0; i<columnsCount;i++){
    columnWrappers[`column${i}`]=[];
  }

  


 
  for(let i=0; i<images.length;i++){
    
      const c = i % columnsCount;
      columnWrappers[`column${c}`].push(images[i]);
  }


 
  for(let i=0; i < columnsCount; i++){
   
    columns.push(columnWrappers[`column${i}`]);
    
     
  }


  
  return  columns.map((column,icol)=>{
      return  <div key={icol} className="column">
                    {column.map((image,ikey)=>{
                      
                    return <div key={ikey} className="post" > 
                                            <img src={image} alt='deneme'/> 
                                            <div className="overlay"></div>
                                          </div>
                    })}
               </div>
  })
  
  
 
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
            <div className="images"> <Images columnsCount={3} images={images}  /> </div>
          </div>


          <a className='oneri'>Fikrini Paylaş!</a>
      </div>
     
    </div>
   
  );
}

export default App;
