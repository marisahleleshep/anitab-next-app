

const Navbar =()=> {
  return (
    <div>
      
<div className="centered-links hidden md:flex space-x-4 ml-80 gap-14 mt-10">
    <a href="#" className="logo text-xl text-red-500 font-semibold">Foodle</a>
    <a href="#home">Home</a>
    <a href="#offers">Offers</a>
    <a href="#services">Services</a>
    <a href="#menu">Menu</a>
    <a href="#about">About Us</a>

    <a href="#" style={{ color: 'red',fontSize:'25px',marginLeft:'15%' }}>Login</a>
    <a href="#" style={{  }}>
      <button style={{ fontSize:'20px',backgroundColor: 'whitesmoke', border: 'solid red', cursor: 'pointer',color:'red',width:'100px',height:'40px',borderRadius:'20px' }}>
        Sign Up
      </button>
    </a>
</div>


      
    </div>
  )
}
export default Navbar;
