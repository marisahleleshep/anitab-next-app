import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import { faFacebook } from '@fortawesome/free-solid-svg-icons';


const Products =() =>{
    return (
      <div>

<div className="text-white mr-80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="py-6">
            <p className="font-bold text-6xl mt-20 text-red-500">All Fast Food is <br /> Available at Foodle</p>
            <p className="text-2xl text-black mt-4">We Are Just a Click Away When You <br /> Crave For Delicious First Food</p>
            <button className="bg-red-500 text-black font-bold py-5 px-14 rounded">Buy Now</button>
            <span className="text-black ml-5 pl-24 font-bold">How To Order</span>
          </div>
          
          <div className="hidden md:block">
          <img src={"/pitsa.png"} alt={"icon"} className={"ml-60"}/>
          </div>
        </div>        
        
        
     <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-16 mt-20 bg-gray-100 rounded-lg p-8" style={{ marginLeft: '10%' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src={"/icon3.png"} alt={"icon"} style={{ width: "70px", height: "100%" }}/>

    <div style={{ marginLeft: "5px" }}>
      <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>First Delivery</p>
      <p style={{ color: '#333', fontSize: '16px', margin: '' }}>
        The food will be delivered to <br/> your home within 1-2 hours of <br/> your ordering
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={"/icon2.png"} alt={"icon"} style={{ maxWidth: "70px", height: "auto" }}/>

    <div style={{ marginLeft: "5px" }}>
      <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>Fresh Food</p>
      <p style={{ color: '#333', fontSize: '16px', margin: '' }}>
        Your Food will Be Delivered  <br/> 100% Fresh To Your Home. We<br/>Do Not Deliver Stale Food
      </p>
    </div>
  </div>
  
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={"/icon1.png"} alt={"icon"} style={{ maxWidth: "70px", height: "auto" }}/>

    <div style={{ marginLeft: "5px" }}>
      <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>Free Delivery</p>
      <p style={{ color: '#333', fontSize: '16px', margin: '' }}>
        Your food Delivery Is <br/> Absolutely Free. No Cost <br/>Just Order And Enjoy.
      </p>
    </div>
  </div>
</section>



      </div>
    </div>

  <section>

  <div>
  <h1 style={{ fontSize: '35px', marginTop: '50px', marginLeft: '35%', marginBottom: '30px' }}>Best Delivery <br/> Categories</h1>


  <div className="delivery" style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '8%' }}>
    <div className="category" style={{ textAlign: 'center', margin: '0 10px' }}>
      <img src={"/pizza1.png"} alt={"icon"} className={"w-1/2 max-w-full"} style={{ maxWidth: '100%',marginLeft:'18%' }}/>
      <h2 style={{ fontSize: '30px', marginTop: '10px',marginRight:'15%' }}>Chicken Burger</h2>
      <p style={{ color: 'red' }}>Order Now</p>
    </div>

    <div className="category" style={{ textAlign: 'center', margin: '0 10px' }}>
      <img src={"/pizza2.png"} alt={"icon"} className={"w-1/2 max-w-full"} style={{ maxWidth: '100%',marginLeft:'17%' }}/>
      <h2 style={{ fontSize: '30px', marginTop: '10px',marginRight:'15%' }}>Chicken Pizza</h2>
      <p style={{ color: 'red' }}>Order Now</p>

    </div>

    <div className="category" style={{ textAlign: 'center', margin: '0 10px' }}>
      <img src={"/pizza.png"} alt={"icon"} className={"w-1/2 max-w-full"} style={{ maxWidth: '100%',marginLeft:'17%' }}/>
      <h2 style={{ fontSize: '30px', marginTop: '10px',marginRight:'15%' }}>French Fries</h2>
      <p style={{ color: 'red' }}>Order Now</p>
    </div>
  </div>

</div>


  </section>
  
  <section>
      <div >

<div style={{ marginLeft:'250px',marginTop:'5%' }}>
  <div>
    <h1 style={{ fontSize: '54px', color: 'blue', fontWeight: '800' }}>
      Our <span style={{ color: 'red', fontWeight: 'bold' }}>Regular</span> Menu
    </h1>
    <p style={{ fontSize: '20px', lineHeight: '' }}>
      This Are Our Regular Menus. You Can <br/>Order Anything You Like.
    </p>
    <button style={{ backgroundColor: 'red', color: 'white', padding: '15px 30px', fontSize:'18px', cursor: 'pointer',marginLeft:'70%',borderRadius:'25px',fontWeight: 'bold' }}>
      See All
    </button>
  </div>
</div>






<div className="grid grid-cols-1 md:grid-cols-3 mt-30 mt-20 ml-55">
  <div className="text-center">
    <img src={"/humberger5.png"} alt={"icon"} className={"mx-auto mb-2 w-1/2"} />
    
    <div className="bg-pink-200" style={{ height: "250px", width: "40%", marginLeft: "80px", borderRadius: '10px', padding: "25% 0", marginTop:'-28%' }}>
  <div style={{ width: "80%", marginLeft: "20%" }}>
    <h1 className="text-xl" style={{fontWeight: 'bold' }}>Chicken Burger</h1>

    <div style={{ display: 'flex', color: 'darkYellow', padding: '4px', borderRadius: '5px' }}>
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <span style={{ color: 'black',fontSize:'20px' }}>(160)</span>
</div>
    <h1 className="text-lg" style={{fontWeight: 'bold' }}>$3.50</h1>
    <button className="bg-red-500 text-white px-2 py-1 rounded-full">Buy Now</button>
  </div>
</div>
  </div>

  
   <div className="text-center">
    <img src={"/humberger6.png"} alt={"icon"} className={"mx-auto mb-2 w-1/2"} />
    
    <div className="bg-pink-200" style={{ height: "250px", width: "40%", marginLeft: "120px", borderRadius: '10px', padding: "25% 0", marginTop:'-28%' }}>
  <div style={{ width: "80%", marginLeft: "20%" }}>
    <h1 className="text-xl" style={{fontWeight: 'bold' }}>Chicken Pizza</h1>

    <div style={{ display: 'flex', color: 'darkYellow', padding: '4px', borderRadius: '5px' }}>
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <span style={{ color: 'black',fontSize:'20px' }}>(142)</span>
</div>
    <h1 className="text-lg" style={{fontWeight: 'bold' }}>$4.20</h1>
    <button className="bg-red-500 text-white px-2 py-1 rounded-full">Buy Now</button>
  </div>
</div>
  </div>


<div className="text-center">
    <img src={"/humberger7.png"} alt={"icon"} className={"mx-auto mb-2 w-1/2"} />
    
    <div className="bg-pink-200" style={{ height: "250px", width: "40%", marginLeft: "120px", borderRadius: '10px', padding: "25% 0", marginTop:'-28%' }}>
  <div style={{ width: "80%", marginLeft: "20%" }}>
    <h1 className="text-xl" style={{fontWeight: 'bold' }}>Chicken Fry</h1>

    <div style={{ display: 'flex', color: 'darkYellow', padding: '4px', borderRadius: '5px' }}>
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <span style={{ color: 'black',fontSize:'20px' }}>(163)</span>
</div>
    <h1 className="text-lg" style={{fontWeight: 'bold' }}>$6.50</h1>
    <button className="bg-red-500 text-white px-2 py-1 rounded-full">Buy Now</button>
  </div>
</div>
  </div>


</div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-30 mt-20 ml-55">

<div className="text-center">
    <img src={"/humberger6.png"} alt={"icon"} className={"mx-auto mb-2 w-1/2"} />
    
    <div className="bg-pink-200" style={{ height: "250px", width: "40%", marginLeft: "120px", borderRadius: '10px', padding: "25% 0", marginTop:'-28%' }}>
  <div style={{ width: "80%", marginLeft: "20%" }}>
    <h1 className="text-xl" style={{fontWeight: 'bold' }}>Grill Sandwich</h1>

    <div style={{ display: 'flex', color: 'darkYellow', padding: '4px', borderRadius: '5px' }}>
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <span style={{ color: 'black',fontSize:'20px' }}>(112)</span>
</div>
    <h1 className="text-lg" style={{fontWeight: 'bold' }}>$4.80</h1>
    <button className="bg-red-500 text-white px-2 py-1 rounded-full">Buy Now</button>
  </div>
</div>
  </div>


<div className="text-center">
    <img src={"/humberger7.png"} alt={"icon"} className={"mx-auto mb-2 w-1/2"} />
    
    <div className="bg-pink-200" style={{ height: "250px", width: "40%", marginLeft: "120px", borderRadius: '10px', padding: "25% 0", marginTop:'-28%' }}>
  <div style={{ width: "80%", marginLeft: "20%" }}>
    <h1 className="text-xl" style={{fontWeight: 'bold' }}>Taco Traifi</h1>

    <div style={{ display: 'flex', color: 'darkYellow', padding: '4px', borderRadius: '5px' }}>
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <span style={{ color: 'black',fontSize:'20px' }}>(152)</span>
</div>
    <h1 className="text-lg" style={{fontWeight: 'bold' }}>$3.63</h1>
    <button className="bg-red-500 text-white px-2 py-1 rounded-full">Buy Now</button>
  </div>
</div>
  </div>


<div className="text-center">
    <img src={"/humberger5.png"} alt={"icon"} className={"mx-auto mb-2 w-1/2"} />
    
    <div className="bg-pink-200" style={{ height: "250px", width: "40%", marginLeft: "120px", borderRadius: '10px', padding: "25% 0", marginTop:'-28%' }}>
  <div style={{ width: "80%", marginLeft: "20%" }}>
    <h1 className="text-xl" style={{fontWeight: 'bold' }}>Noddle's Ramen</h1>

    <div style={{ display: 'flex', color: 'darkYellow', padding: '4px', borderRadius: '5px' }}>
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
  <span style={{ color: 'black',fontSize:'20px' }}>(163)</span>
</div>
    <h1 className="text-lg" style={{fontWeight: 'bold' }}>$5.50</h1>
    <button className="bg-red-500 text-white px-2 py-1 rounded-full">Buy Now</button>
  </div>
</div>
  </div>



</div>

  
      </div>
    
  
  </section>
  
  
  <section>

  <div style={{ display: 'flex', justifyContent: '', marginTop:'80px' }}>
  <img src={"/fries.png"} alt={"icon"} style={{ width: '40%', height: 'auto', marginLeft:'10%' }} />
  <img src={"/posts.png"} alt={"icon"} style={{ width: '35%', height: 'auto' }} />
</div>




  </section>
  
        
      </div>
    )
  }
  
  export default Products;