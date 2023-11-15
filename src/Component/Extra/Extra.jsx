import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../assets/tab/tab.jpg'
import img2 from '../../assets/tab/tab-2.jpg'
import img3 from '../../assets/tab/tab-3.jpg'
import img4 from '../../assets/tab/tab-4.jpg'

import tab1 from '../../assets/tab-2/img-1.jpg'
import tab2 from '../../assets/tab-2/img-2.jpg'
import tab3 from '../../assets/tab-2/img-3.jpg'
import tab4 from '../../assets/tab-2/img-4.jpg'


const Extra = () => {
    return (
       <div className=' mt-12'>
        <h2 className='text-2xl text-center mt-6'>Choose Your Language</h2>


      <div className='px-24 py-12'>

      <Tabs>
    <TabList>
      <Tab>English</Tab>
      <Tab>German</Tab>
      <Tab>Spanish</Tab>
      
    </TabList>

    <TabPanel>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
 <div className='border-2'><img src={img1} alt="" />
 <p className='mb-6 text-center font-light'>Intensive Course</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$320</button>
  </div>
  
  
  
  <div className='border-2'><img src={img2} alt="" />
 <p className='mb-6 text-center font-light'>Language Training</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$150</button>
  </div>
     
     
     
     
     
     
     
  <div className='border-2'><img src={img3} alt="" />
 <p className='mb-6 text-center font-light'>English Fort Children</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-red-600 rounded-3xl w-16 text-white ml-8'>Free</button>
  </div>
     
     
  <div className='border-2'><img src={img4} alt="" />
 <p className='mb-6 text-center font-light'>Professional English</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$300</button>
  </div>
     </div>
    </TabPanel>
 
 
    <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
 <div className='border-2'><img src={tab1} alt="" />
 <p className='mb-6 text-center font-light'>Mastering Grammar</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$320</button>
  </div>
  
  
  
  <div className='border-2'><img src={tab2} alt="" />
 <p className='mb-6 text-center font-light'>Advance Speaking</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$150</button>
  </div>
     
     
     
     
     
     
     
  <div className='border-2'><img src={tab3} alt="" />
 <p className='mb-6 text-center font-light'>Professional Intend</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-red-600 rounded-3xl w-16 text-white ml-8'>Free</button>
  </div>
     
     
  <div className='border-2'><img src={tab4} alt="" />
 <p className='mb-6 text-center font-light'>Professional English</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$300</button>
  </div>
     </div>
    </TabPanel>
 
    <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
 <div className='border-2'><img src={img1} alt="" />
 <p className='mb-6 text-center font-light'>Mastering Spanish</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$420</button>
  </div>
  
  
  
  <div className='border-2'><img src={tab1} alt="" />
 <p className='mb-6 text-center font-light'>Advance Speaking</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$250</button>
  </div>
     
     
     
     
     
     
     
  <div className='border-2'><img src={img2} alt="" />
 <p className='mb-6 text-center font-light'>Professional Intend</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-red-600 rounded-3xl w-16 text-white ml-8'>Free</button>
  </div>
     
     
  <div className='border-2'><img src={tab2} alt="" />
 <p className='mb-6 text-center font-light'>Professional English</p>
 <div className="rating rating-sm">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
 <button className='border-2 bg-teal-700 rounded-3xl w-16 text-white ml-8'>$200</button>
  </div>
     </div>
    </TabPanel>
 
 
 
  
  
  
  
       </Tabs>

      </div>
        
       </div>
    );
};

export default Extra;