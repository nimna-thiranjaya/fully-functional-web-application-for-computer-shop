import React, { Component } from 'react'
import './footer.css'
 
export default class footer extends Component {
    render() {
        return (
            <div>
                <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 item">
                                <h3>QUICK LINKS</h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About us</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 item text">
 
 
                                <h3>INFACT SOLUTION</h3>
                                <p>Your number one source for all things tech. We're dedicated to giving you the very best of computer parts, with a focus on quality, price, brand.<br/>
                                Having a creative team of people who understand the art of elite system building and maintenance.</p>
                            </div>
                            <div class="col item social">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                       <a href="#" class="fab fa-pinterest"></a></div>
                        </div>
                        <p class="copyright">SLIIT.com © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
        )
    }
}
 

