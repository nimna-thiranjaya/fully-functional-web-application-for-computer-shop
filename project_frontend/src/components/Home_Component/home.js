import React from 'react';
import './script';



class Home extends React.Component{
    render(){
        return(
 <div>
   
<header class="header">
    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
    </nav>

    <div class="icons">
        <div class="fas fa-search" id="search-btn"></div>
        <div class="fas fa-shopping-cart" id="cart-btn"></div>
        <div class="fas fa-bars" id="menu-btn"></div>
    </div>

    <div class="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" class="fas fa-search"></label>
    </div>
    
    <div class="cart-items-container">
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="./images/cart-item-1.png" alt=""/>
            <div class="content">
                <h3>cart item 01</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="./images/cart-item-2.png" alt=""/>
            <div class="content">
                <h3>cart item 02</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>

        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="./images/cart-item-3.png" alt=""/>
            <div class="content">
                <h3>cart item 03</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="./images/cart-item-4.png" alt=""/>
            <div class="content">
                <h3>cart item 04</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <a href="#" class="btn">checkout now</a>
    </div>
</header>

<section class="home" id="home">
    <div class="content">
        <h3>INFACT SOLUTION COMPUTER</h3>
        <p>Welcome to INFACT SOLUTION Computer and accessories, your number one source for all things tech.</p>
        <p>We're dedicated to giving you the very best of computer parts, with a focus on quality, price, brand.</p>
        <a href="#" class="btn">get yours now</a>
    </div>
</section>

<section class="about" id="about">
    <h1 class="heading"> <span>about</span> us </h1>
    <div class="row">
        <div class="image">
            <img src="./images/111.jpg" alt=""/>
        </div>
        <div class="content">
            <h3>INFACT SOLUTION</h3><br/>
            <p>Welcome to INFACT SOLUTION Computer and accessories, your number one source for all things tech. We're dedicated to giving you the very best of computer parts, with a focus on quality, price, brand.</p>
            <p>Founded in Manujaya Kalanajith and friends, INFACT SOLUTION Computers has come a long way from its beginnings in his home. When Chamathka first started out, his passion for "quality and affordable tech products" drove him to start this so that Chama Computers can offer you latest products to your doorstep. We now serve customers all over Sri Lanka, and are thrilled that we're able to turn our passion into our own website.</p>
            <p>I hope you enjoy the products as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact me.</p>
            <p>Manujaya Kalanajith and friends</p>
            <a href="#" class="btn">learn more</a>
        </div>
   </div>
</section>

<section class="menu" id="menu">
  
</section>

<section class="products" id="products">
   <h1 class="heading"> our <span>products</span> </h1>
     <div class="box-container">

    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src="./images/1.jpg" alt=""/>
        </div>
        <div class="content">
            <h3>FANTECH HG11 Solar Gaming Headset</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">RS:2,970.00</div>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src="./images/22.jpg" alt=""/>
        </div>
        <div class="content">
            <h3>FANTECH HG12 Solar Gaming Headset</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">RS:1,475.00</div>
        </div>
    </div>
    <div class="box">
        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <div class="image">
            <img src="./images/12.jpg" alt=""/>
        </div>
        <div class="content">
            <h3>EARPHONE FANTECH EG1 IN EAR GAMING</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">RS:1,075.00</div>
        </div>
    </div>
</div>
</section>

<section class="review" id="review">
    <h1 class="heading"> customer's <span>review</span> </h1>
      <div class="box-container">
        <div class="box">
       <img src="./images/quote-img.png" alt="" class="quote"/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
    <img src="./images/pic-1.png" class="user" alt=""/>
    <h3>john deo</h3>
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
</div>

<div class="box">
    <img src="./images/quote-img.png" alt="" class="quote"/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
    <img src="./images/pic-2.png" class="user" alt=""/>
    <h3>john deo</h3>
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
</div>

<div class="box">
    <img src="./images/quote-img.png" alt="" class="quote"/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
    <img src="./images/pic-3.png" class="user" alt=""/>
    <h3>john deo</h3>
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
</div>

<div class="box">
            <img src="./images/quote-img.png" alt="" class="quote"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
            <img src="./images/pic-2.png" class="user" alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
        
        <div class="box">
            <img src="./images/quote-img.png" alt="" class="quote"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
            <img src="./images/pic-3.png" class="user" alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>
</section>

<section class="contact" id="contact">
    <h1 class="heading"> <span>contact</span> us </h1>
    <div class="row">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
        <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="name"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="email"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="number"/>
            </div>
            <input type="submit" value="contact now" class="btn"/>
        </form>
    </div>
</section>


<section class="blogs" id="blogs">
    <h1 class="heading"> our <span>blogs</span> </h1>
    <div class="box-container">

        <div class="box">
            <div class="image">
                <img src="./images/22.jpg" alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">FANTECH HG12 Solar Gaming Headset</a>
                <span>by admin / 21st may, 2021</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./images/1.jpg" alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">FANTECH HG11 Solar Gaming Headset</a>
                <span>by admin / 21st may, 2021</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src="./images/q.jpg" alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">FANTECH Solar Gaming Speaker</a><br/><br/>
                <span>by admin / 21st may, 2021</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p><br/><br/>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
    </div>
</section>

<section class="footer">

    <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

    <div class="links">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">menu</a>
        <a href="#">products</a>
        <a href="#">review</a>
        <a href="#">contact</a>
        <a href="#">blogs</a>
    </div>

    <div class="credit"> INFACT SOLUTION  <span>   mr. Manujaya Kalanajith  </span> | all rights reserved</div>
</section>
</div>
        )
    }
}

export default Home;