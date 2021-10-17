import React from 'react'
import MainHome from "../SS_Components/MainHome";
 
export default class AboutUs extends React.Component {
    render() {
        return(
            <div>
                 <MainHome/>
            <div style={{fontFamily: 'Arial Black'}}>
            {/* <div className="abimage" >
                <img src="https://i.pinimg.com/736x/e1/4b/70/e14b7097d76237a8f5aba0dc66d01e1b.jpg"
                style={{width:1500,height:500}}/>
            </div> */}
           
            <div className="detailss" style={{backgroundImage: 'url(https://www.chamacomputers.lk/imgs/slider/pic3.jpg)', paddingLeft:200, paddingRight:200, color:'lightgrey', paddingTop:80, paddingBottom:140, fontSize:10}} align="center" >
                <div>
                <h1>INFACT SOLUTION</h1><br/>
                </div>
                <h3>Welcome to INFACT SOLUTION Computer and accessories, your number one source for all things tech. We're dedicated to giving you the very best of computer parts, with a focus on quality, price, brand.</h3>
                <br/><h3>Founded by Manujaya Kalanajith, INFACT SOLUTION Computers has come a long way from its beginnings in his home. When Manujaya first started out, his passion for "quality and affordable tech products" drove him to start this so that Infact Solution can offer you latest products to your doorstep. We now serve customers all over Sri Lanka, and are thrilled that we're able to turn our passion into our own website.</h3>
                <br/><h3>I hope you enjoy the products as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact me.</h3>
                <br/><br/><h3><i>Manujaya Kalanajith</i></h3>
            </div>
            </div>
            </div>
           
 
        )
    }
}

