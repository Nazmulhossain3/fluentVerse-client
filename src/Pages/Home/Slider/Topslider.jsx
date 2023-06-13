
import img1 from '../../../assets/image/Image-1.jpg'
import img2 from '../../../assets/image/img-6.jpg'
import img3 from '../../../assets/image/image 3.jpg'
import img4 from '../../../assets/image/image-4.jpg'


const Topslider = () => {
    return (
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-[400]" />
    
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
         <h2 className='mt-20 text-justify px-10'>Welcome to FluentVerse, the premier online language school dedicated to <br /> helping you become a fluent speaker in a foreign language. At FluentVerse, <br /> we believe that learning a new language opens doors to endless opportunities </h2>
         <button className="btn mt-3 btn-sm text-white btn-success ml-10">See More</button>
        </div>
     
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
       

      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-[400]" />
       
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
        <h2 className='mt-20 text-justify px-10'>Discover a world of linguistic possibilities at FluentVerse. Our online language school offers expert instruction,
         interactive learning experiences, and a supportive community to help you achieve fluency in your chosen foreign language. Join us today and embark  on a transformative language learning journey. </h2>
         <button className="btn mt-3 btn-sm text-white btn-success ml-10">See More</button>
        </div>
     
     
       
        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        
      
      
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-[400]" />
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
        <h2 className='mt-20 text-justify px-10'>FluentVerse is your passport to fluency in foreign languages. Our comprehensive online language school combines expert instruction, personalized learning paths, and immersive experiences to accelerate your language skills. </h2>
         <button className="btn mt-3 btn-sm text-white btn-success ml-10">See More</button>
        </div>
   
   
   
   
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
       
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-[400]" />
        <div className="absolute shadow-2xl bg-black bg-opacity-40    text-white  h-full  w-full text-opacity-80 text-xl">
        <h2 className='mt-20 text-justify px-10'>Experience language mastery like never before with FluentVerse, the leading online language school. Our innovative curriculum, dynamic instructors, and cutting-edge learning platform empower learners of all levels to achieve fluency in foreign languages </h2>
         <button className="btn mt-3 btn-sm text-white btn-success ml-10">See More</button>
        </div>
     
     
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      
      
      
      </div>
     
    </div>
    );
};

export default Topslider;