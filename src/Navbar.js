import React from 'react'
import image from './images/image-hero-desktop.png'

const Navbar = () => {
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Snap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Careers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <div className='justify'>
       <div className='login'><a href="">Login</a></div> 
       <div><button class="btn btn-outline-success" type="submit">Register</button></div>
      </div>
      
    </div>
  </div>
</nav>
    
    {/* <div className='flexio'>
    
    <div className='div'>
    <h4>Make <br/> remote work</h4>
    <p>Get your team in sync, no mattter your location 
   <br/> Streamline processes, create team rituals and <br className='bb'/> watch productivity soar</p>
   
   <button className='btns'>Learn More</button>
   </div>
   
    <div>
    <img src={image}></img>
    </div>
    </div> */}
    
 <div className='d-md-flex flex-md-row-reverse  '>
 <div>  <img className='img-fluid' src={image} alt="" /> </div>
 
 <div className='mt-3 text-center text-md-start ps-md-5 drop'> 
 
    <h1> Make <span className='d-md-block'>  remote work</span></h1>
    
     <p  className='  '>Get your team in sync, no mattter your location 
   Streamline processes, create team rituals and  watch productivity soar</p> 
    
    
    
    </div>
    
 </div> 
    </div>
  )
}

export default Navbar