import React from "react";
import Image from "next/image";



const Products =() =>{
    return (
      <div>

<div className="text-white mr-80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="py-6">
            <p className="font-bold text-6xl mt-20 text-red-500">All First Food is <br /> Available at Foodle</p>
            <p className="text-2xl text-black mt-4">We Are Just a Click Away When You <br /> Crave For Delicious First Food</p>
            <button className="bg-red-500 text-black font-bold py-5 px-14 rounded">Buy Now</button>
            <span className="text-black ml-5 pl-24 font-bold">How To Order</span>
          </div>
          <div className="hidden md:block">
          <img src={"/pitsa.png"} alt={"icon"} className={"ml-60"}/>
          </div>
        </div>        
        
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-40 mt-16 gap-24 mt-20">
          <div className="text-center">
            <p className="font-bold text-4xl text-black">First Delivery</p>
            <p className="text-gray-900 text-1xl">The food will be delivered to <br/> your home within 1-2 hours of <br/> your ordering</p>
          </div>

          <div className="text-center">
            <p className="font-bold text-4xl text-black">Fresh Food</p>
            <p className="text-gray-900 text-1xl">Your food will be delivered <br/> 100% fresh to your home. We <br/> do not deliver stale food</p>
          </div>
          
          <div className="text-center">
            <p className="font-bold text-4xl text-black">Free Delivery</p>
            <p className="text-gray-900 text-1xl">Your food delivery is <br/> absolutely free. No cost, <br/> just order and enjoy</p>
          </div>
        </section>
      </div>
    </div>

  <section>
  <div>
  <h1 style={{ fontSize: '35px', marginTop: '50px', marginLeft:'35%', marginBottom: '30px', }}>Best Delivery <br/> Categories</h1>
  <div className="delivery" style={{ display: 'flex', justifyContent: 'space-between', marginLeft:'8%' }}>
    <div className="category" style={{ textAlign: 'center', margin: '0 10px' }}>
      <img src={"/cake1.jpg"} alt={"icon"} className={"W-1/2"} style={{ maxWidth: '100%' }}/>
      <h2 style={{ fontSize: '20px', marginTop: '10px' }}>Chicken Burger</h2>
      <p>Order Now</p>
    </div>

    <div className="category" style={{ textAlign: 'center', margin: '0 10px' }}>
      <img src={"/cake2.jpg"} alt={"icon"} className={"W-1/2"} style={{ maxWidth: '100%' }}/>
      <h2 style={{ fontSize: '20px', marginTop: '10px' }}>Chicken Pizza</h2>
      <p>Order Now</p>
    </div>

    <div className="category" style={{ textAlign: 'center', margin: '0 10px' }}>
      <img src={"/cake3.jpg"} alt={"icon"} className={"W-1/2"} style={{ maxWidth: '100%' }}/>
      <h2 style={{ fontSize: '20px', marginTop: '10px' }}>French Fries</h2>
      <p>Order Now</p>
    </div>
  </div>
</div>

  
  </section>
  
  <section>
      <div >
        <div className="ml-80">
          <h1>Our Regular Menu</h1>
          <p>This Are Our Regular Menus. You Can <br/>Order Anything You Like.</p>
          <button>See All</button>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 ml-50 mt-16 mt-20 ml-80">
          <div>
             <img src={"/humberger5.png"} alt={"icon"} className={"W-1/2"}/>
             <h1>Chicken Burger</h1>
             <h1>$3.50  <button>Buy Now</button></h1>

          </div>

          <div>
             <img src={"/humberger6.png"} alt={"icon"} className={"W-1/2"}/>
             <h1>Chicken Pizza</h1>
             <h1>$3.50  <button>Buy Now</button></h1>

          </div>

          <div>
             <img src={"/humberger7.png"} alt={"icon"} className={"W-1/2"}/>
             <h1>Chicken Fry</h1>
             <h1>$3.50  <button>Buy Now</button></h1>

          </div>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-40 mt-16 gap-24 mt-20 ml-80">
          <div>
             <img src={"/humberger5.png"} alt={"icon"} className={"W-1/2"}/>
             <h1>Grill Sandwich</h1>
             <h1>$3.50  <button>Buy Now</button></h1>
          </div>

          <div>
             <img src={"/humberger6.png"} alt={"icon"} className={"W-1/2"}/>
             <h1>Taco Traifi</h1>
             <h1>$3.50  <button>Buy Now</button></h1>
          </div>

          <div>
             <img src={"/humberger7.png"} alt={"icon"} className={"W-1/2"}/>
             <h1>Noddle's Ramen</h1>
             <h1>$3.50  <button>Buy Now</button></h1>
          </div>
          </div>
  
      </div>
    
  
  </section>
  
  
  <section>
      
  <div>

  <div style={{ display: 'flex', marginLeft:'20%', justifyContent: 'space-between', alignItems: 'center', height: '' }}>
  <div className='image' style={{ margin: '', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <img src={"/burgerr.jpg"} alt={"icon"} className={"W-1/2"} style={{ width: '50%', height: 'auto', borderRadius: '5px' }}/>
  </div>
  
  <div className='image1' style={{ margin: '10px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <img src={"/waffle1.jpg"} alt={"icon"} className={"W-1/2"} style={{ width: '50%', height: 'auto', borderRadius: '5px' }}/>
  </div>
  
  <div className='image2' style={{ margin: '10px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <img src={"/green.jpg"} alt={"icon"} className={"W-1/2"} style={{ width: '50%', height: 'auto', borderRadius: '5px' }}/>
  </div>
</div>

  </div>

  </section>
  
        
      </div>
    )
  }
  
  export default Products;