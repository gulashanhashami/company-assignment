
import styled from "styled-components";

const Navbardiv= styled.div`
font-family: sans-serif;
#navbar {
    margin: auto;
    width: 100%;
    height: auto;
     border: 1px solid grey; 
  }
  #navbar1 {
      margin: auto;
      width: 90%;
      height: 8.5vh;
      @media (max-width:400px){
        height:4.5vh;
    }
      align-items: center;
      display: flex;
      justify-content: space-between;
      background-color: white;
    //    border: 1px solid grey;
      // position: sticky;
      top: 0;
    }
    
    // .mlogo {
    //   width: 85%;
    //   height: 7.3vh;
    //   @media (max-width:400px){
    //     width:20%;
    //     height:4.2vh;
    // }
    //   //  border: 1px solid red; 
    //   margin-bottom: 3.8%;
    // }
    #inps {
      width: 68.5%;
      background-color: rgba(249, 249, 249, 255);
      height: 70%;
      margin-left: 13.8%;
      outline: none;
      position: sticky;
      border: none;
      font-size: 1vw;
      @media (max-width:400px){
        width: 97%;
        font-size: 2vw;
      }
      color: grey;
      font-weight: 500;
      padding-left: 1%;
    }
  //   .searchb {
  //     /* border:1px solid grey; */
  //    position: relative;
  //    width:2%;
  //    height:30%;
  //    @media (max-width:400px){
  //     width:5%;
  //     left: -4.5%;
  //     top: 1.5px;
  //    }
  //    top: 2px;
  //    left: -3.6%;
  //  }
   
   
    #car {
      color: black;
    }
    .cart{
        width:3%;
        height:4vh;
        @media (max-width:400px){
          height:2.8vh;
          width:50%;
          // margin-left:30%;
      }
        // border: 1px solid red; 
      }
      .help1{
        width:99%;
        height:99%;
        @media (max-width:400px){
          width:40%;
        }
       
      }
      .help{
        width:92%;
        height:4vh;
        @media (max-width:400px){
        //  margin-right:10%;
        }
       
      }
      .imgdivtop{
        width:100%;
        height:12vh;
        position: sticky;
        // border: 1px solid red; 

      }
      .imgtop{
        width:100%;
        height:100%;
      }
`;

export const Navbar = () => {

    return (
        <Navbardiv>

<div id="navbar"> 
         <div id="navbar1">
        
         <input id="inps"  type="text" />
            {/* <img className="searchb" src="https://img.icons8.com/material-outlined/2x/search.png" alt="" /> */}
        
         <div>
             <img className="help" src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt="" />
         </div>
      
         <div className="cart">   
         <img id="profile" className="help1" src="https://cdn.iconscout.com/icon/free/png-64/profile-5023700-4195416.png" alt="" />  
        
         </div>
        
         <div>
             <img className="help" src="https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg" alt="" />
         </div>

         <div className="cart"> 
         <img className="help1" src="https://cdn.iconscout.com/icon/free/png-64/cart-grocery-store-shopping-shop-30488.png" alt="" />
           
         </div>
         </div>
      </div>
      <div className="imgdivtop">
         <img className="imgtop" src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/hot-summer-Sale-new-offer-banner-listing-desktop.jpg?tr=cm-pad_crop,w-1440,dpr-1" alt="" />
      </div>
        </Navbardiv>
    )
}