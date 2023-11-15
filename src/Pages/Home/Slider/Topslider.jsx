
import img1 from '../../../assets/image/Image-1.jpg'
import img2 from '../../../assets/image/img-6.jpg'
import img3 from '../../../assets/image/image 3.jpg'
import img4 from '../../../assets/image/image-4.jpg'


const Topslider = () => {
    return (
      <div className='p-12'>
        <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[400]" />
    
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
         <h2 className='mt-20 text-justify px-10'> </h2>
        
        </div>
     
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
       

      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-[400]" />
       
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
        <h2 className='mt-20 text-justify px-10'> </h2>
        
        </div>
     
     
       
        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        
      
      
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-[400]" />
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
        <h2 className='mt-20 text-justify px-10'> </h2>
       
        </div>
   
   
   
   
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
       
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-[400]" />
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
        <h2 className='mt-20 text-justify px-10'></h2>
         <button className="btn mt-3 btn-sm text-white btn-success ml-10"></button>
        </div>
     
     
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      
      
      
      </div>
     
    </div>
      </div>
    );
};

export default Topslider;