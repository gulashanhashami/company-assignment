import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components";
import { Link, useNavigate  } from "react-router-dom";

const Stylediv=styled.div`
    font-family: sans-serif;

    grid-gap: 3%;
    // padding-left: 5%;
    // overflow-y: scroll;
    margin: auto;
    margin-top: 5vh;
    // border: 1px solid red;
    .nav1{
       width: 100%;
       height: 6vh;
       margin-top: 1vh;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       padding-left:8%;
 
       background-color: #ffeded;
   } 
   .filter{
      
       color: white;
       width: 17%;
       height: 3vh;
       font-size:1.2vw;
    margin-right: 18%;
    border: 2px solid teal;
    background-color: teal;
    border-radius: .3vw;
   } 
   .sort{
    width: 17%;
       height: 3vh;
       font-size:1.2vw; 
       color: white;
       border: 2px solid teal;
       background-color: teal;
       border-radius: .3vw;
   }
   .sbox{
       display: flex;
       flex-direction: row;
    width: 45%;
       height: 4.3vh; 
       /* border: 2px solid red; */
   }
   .in{
       width: 88%;
       height: 3.5vh;
       outline: none;
   }
   #btn{
       width: 10%;
       height: 4.3vh;
       color: white;
       font-size: 1vw;
       background-color: black;
       border: 2px solid black;
   }
   #btn:hover{
     background-color: white;
     color: red;
   }

.box1{
    width:70%;
    height:100vh;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    @media (max-width:400px){
        width:81%;
        grid-template-columns: repeat(2, 48%);
        grid-gap: 3%; 
    }
    grid-gap: 3%;
    // padding-left: 5%;
    // overflow-y: scroll;
    margin: auto;
    margin-top: 3%;
    // border: 1px solid red;
}
a{
    text-decoration: none;
    color: grey;
}
p{
    font-size: 1vw;
    @media (max-width:400px){
     
        font-size: 2.7vw;
    }
}

.card{
    width: 95%;
    height: 40vh;
    @media (max-width:400px){
        width: 100%;
        height:30vh;
        padding-bottom: 3%;
    }
   display: flex;
   flex-direction: column;
   justify-content: space-between;
    padding-bottom: 5%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    // border: 1px solid red; 
}
.img1{
    width: 100%;
    height: 75%;
    @media (max-width:400px){
        height: 80%;
    }
}
.title{
    margin-left:4%;
    line-height:2.5vh;
    @media (max-width:400px){
        line-height:1.5vh;
    }
}
.price{
    margin-left:4%;
    line-height:0vh;
}
.leftsort{
    width:14%;
    @media (max-width:400px){
        width:17%;
    }
    height:100vh;
    margin-left:.5%;
    float:left;
    display:flex;
    flex-direction: column;
    align-items: left;
    // overflow-y: scroll;
    border-right: .1vw solid grey;
}
.sortbyprice{
    height:5%;
    @media (max-width:400px){
        height:3%;
        font-size: 3.6vw;
        border-radius:.5vw;
    }
    margin-top:6%;
    color:white;
    font-size: 1.2vw;
    background-color: teal;
    border-radius:.3vw;
}

.searchbox{
    width:61%;
    height:4.5vh;
    // padding-left: 1%;
    outline: none;
    font-size: 1.2vw;
    border: .1vw solid grey;
    background-color: rgba(249, 249, 249, 255);
    @media (max-width:400px){
        width:43%;
        height:2.5vh;
        font-size: 2.2vw;
        top: -15.8vh;
        right: 10.5%;
    }
    position: relative;
    top: -23.9vh;

    right: -3.5%;
  }
  .searchbtn{
    width:6%;
    height:5vh;
    @media (max-width:400px){
        width:11.9%;
        height:3.1vh;
        right: 23%;
        top: -15.8vh;
        font-size: 2.5vw;
        border: .1vw solid black;
    }
    font-size: .8vw;
    position: relative;
    top: -24.1vh;
    right: +2.5%;
    color: white;
    background-color: black;
  }
  .searchbtn:hover{
    color:green;
  }

`;



export const Products=()=>{
    const [time, setTime]= useState(10); 
    const [sdata, setSdata]= useState([]);
    const [page, setPage] =useState(1);
    const [searchData, setSearchData] =useState("");
let navigate=useNavigate();



//**function, to fetch the data from api**//
const getDdata=()=>{
    setTime(10)
    axios.get(`http://localhost:2345/products?page=${page}&size=15`).then(({data})=>{
          
        // console.log(data);
        const newdata=[];
        data.products.forEach((value)=>newdata.push(value));

        setSdata([...sdata,...newdata]);
    }).catch((error)=>{
        console.log(error.response)
    })

}
 //**code to handle scrolling and show 15 data after end of each scroll*/
 const scrollEnd=()=>{
    setPage(page+1);
}

//**function to know end of each scroll */
const handleScroll=(e)=>{
//    console.log("sum",e.target.documentElement.scrollTop+window.innerHeight);
//    console.log("high",e.target.documentElement.scrollHeight)
      if(e.target.documentElement.scrollTop+window.innerHeight+1>=e.target.documentElement.scrollHeight){
           scrollEnd();
       }
}

//**call the getData function in useEffect */
useEffect(()=>{
    getDdata();
    window.addEventListener("scroll",handleScroll);
    const id=setInterval(()=>{
        setTime((prev)=>{
            if(prev===0){
                clearInterval(id);
               
                return(
                    <p style={{color:"red", fontSize:"1.5vw"}}>Refresh the page</p>
                );
            }
            return prev-1;
        })
        
        }, 1000);
        return ()=> {
            clearInterval(id);
        }

   
    
}, [page]);



//**functions to handle sort functionality**//
 const handleChange=(e)=>{
    if(e.target.value==="low"){
        let arrs1=sdata.sort((a,b)=> a.price-b.price);
       setSdata(arrs1)
       
    }
    if(e.target.value==="high"){
        let arrs2=sdata.sort((a,b)=> b.price-a.price);
        setSdata(arrs2)
      
    }
 }

//**function to handle filter by price data */
 function filterprice(e){
    if(e.target.value==="0to500"){
    let arrFilter1=sdata.filter((value)=>{
        if(value.price>0 && value.price<=500){
            return value;
        }
    })
    setSdata(arrFilter1);
}
  else if(e.target.value==="500to1000"){
    let arrFilter2=sdata.filter((value)=>{
        if(value.price>500 && value.price<=1000){
            return value;
        }
    })
    setSdata(arrFilter2);
  }
  else if(e.target.value==="1000to1500"){
    let arrFilter3=sdata.filter((value)=>{
        if(value.price>1000 && value.price<=1500){
            return value;
        }
    })
    setSdata(arrFilter3);
  }
}
   
    //***function to handle search data***//
 function searchfunction(){
    let arrsearch=sdata.filter((value)=>{
        if(searchData===""){
            return value;
        }
        else if(value.title.toLowerCase().includes(searchData.toLowerCase())){
            return value;
        }
    })
    setSdata(arrsearch);
 }


//**code to handle rendering data on browser**//
if(sdata.length===0){
    return (
       <h1 style={{marginLeft:"40%", marginTop:"11%", fontSize:"2vw"}}>Loading... {time}</h1>
    )
}else{
      return (
      <Stylediv>
         <input className="searchbox" type="text" onChange={(e)=>{setSearchData(e.target.value)}} placeholder="Search products" /><button className="searchbtn" onClick={searchfunction}>Search</button>
      <div className="leftsort">
      <select name="" className="sortbyprice" onChange={handleChange}>
        <option value="">Sort by price</option>
        <option value="low">Low to high</option>
        <option value="high">High to low</option>
      </select>

      <select name="" className="sortbyprice" onChange={filterprice} >
        <option value="">Filter by price</option>
        <option value="0to500">0 to Rs.500</option>
        <option value="500to1000">Rs.500 to Rs.1000</option>
        <option value="1000to1500">Rs.1000 to Rs.1500</option>
      </select>
      </div>
        <div className="box1">
            {/**code for mapping the data to show on browser**/}
     {sdata.map((item,i)=>{
         return (
             <div key={i} className="card">
             <img className="img1" srcSet={item.image} alt="" />
             <p className="title">{item.title}</p>
             <p className="price">Price: Rs.{item.price}</p>
             </div>
         )
     })}

        </div>
        </Stylediv>
    )}
}