import React from 'react';
import '../Css/footer.css'

export default function Footer()
{
        return(
                <>
                <footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">About us</div>
         <p className='pp'>The E-Library Is the Collection Of All the Computer Department 
         Books present in the University Campus Library It contains mostly 150+ books</p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>+91 98058-55248</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i>tnitish2001@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <div><a className='servs' href="#">Home</a></div>
       <div><a className='servs' href="#">E-Book</a></div>
       <div><a className='servs' href="#">Department</a></div>
       <div><a className='servs' href="#">Contect-Us</a></div>
       <div><a className='servs' href="#">Mobile Application Design</a></div>
       <div><a className='servs' href="#">Wire raming & Prototyping</a></div>
     </div>
     <div class="right box">
       <div class="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
         <div class="media-icons">
           <a className='links' href="https://www.facebook.com/profile.php?id=100016178160554"><i class="fab fa-facebook-f"></i></a>
           <a className='links' href="https://www.instagram.com/im.nitish_01/?hl=en"><i class="fab fa-instagram"></i></a>
           <a className='links' href="https://twitter.com/i/flow/signup"><i class="fab fa-twitter"></i></a>
           <a className='links' href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
           <a className='links' href="https://www.linkedin.com/in/nitish-thakur-39788221b/"><i class="fab fa-linkedin-in"></i></a>
         </div>
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2022 <a href="#">Nitish Thakur</a> All rights reserved</p>
   </div>
 </footer>      
                </>
        );
}
