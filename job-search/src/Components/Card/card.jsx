import React from "react";
import '../Card/card.css';

function Card() {
  return (
    <div
      style={{
        border: "1px  rgba(0, 0, 0, 0.87)",
        borderRadius: "20px",
        height: "100%",
        maxWidth: "360px",
        padding: "1rem",
        margin: "1rem",
        opacity: "87.0%",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow:"hidden",
      }}
    >
      <div
        style={{
          border: "1px  #000000",
          borderRadius: "10px",
          height: "fit-content",
          width: "fit-content",
          padding: "5px 10px",
          fontSize: "9px",
          opacity: "87.0%",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        }}
      >
        ⏳ Posted 13 days ago
      </div>
      <div style={{display : "flex", marginTop:"1rem", gap:"0.5rem" }}>
        <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598325603_7ico7.jpg" alt="logo" style={{width:"25px", height:"2.5rem"}} />
        <div>
            <h3 style={{margin:"0",
                fontSize:"13px",
                fontWeight:"600px",
                letterSpacing:"1px",
                marginBottom:"3px",
                color:"#8b8b8b",
            }} className="companyName">fampay</h3>
            <h2 style={{margin:"0", 
                fontSize:"14px",
                lineHeight:"1.5",
                fontWeight:"400px",
            }}>Backend Engineer</h2>
            <p style={{margin:"0", fontSize:"11px" , fontWeight:"bold", marginTop:"5px"}}>Bangalore</p>
        </div>
      </div>
      <div style={{fontWeight:"400", padding:"8px 0" , fontSize:"14px" , color:"rgb(77, 89, 106)"}}>
      Estimated Salary: ₹18 - 35 LPA ✅
      </div>
      <div>
        <p style={{marginBottom:"0.2rem" , marginTop:"0.3rem"}}>About Company:</p>
        <p style={{margin:"0"}}>
            <strong>
            About us
                </strong></p>
      </div>
        <p style={{fontSize:"14px" , fontWeight:"300", marginTop:"0", whiteSpace:"pre-wrap"}}>
        FamPay is building India’s first neo-bank
      exclusively teens. FamPay helps teens make their own online and offline
      payments through UPI, FamPay App and FamCard. Our aim is to make banking
      cool for teens and to help them learn the value of money, savings and
      spending wisely. We are on a mission to raise a new, financially aware
      generation, and drive 250 Million+ Indian teenagers to kicksta
        </p>
    <div style={{backgroundColor:"#FFFFFF"}}>
    <h3 style={{
                fontSize:"13px",
                fontWeight:"600px",
                letterSpacing:"1px",
                marginBottom:"0",
                color:"#8b8b8b",
            }} className="companyName">Minimum Experience</h3>
        <p style={{margin:"0"}}>2 years</p>
    <div style={{
        margin:"0.5rem",
        fontSize:"16px",
        lineHeight:"1.75",
        textAlign:"center",
        padding:"8px 18px",
        borderRadius:"8px",
        fontWeight:"400",
        backgroundColor:"#55efc4",
        fill:"#000000",
        cursor:"pointer",
        userSelect:"none",
        textDecoration:"none",
      }}>
        ⚡ Easy Apply
      </div>
    </div>
    
    </div>
  );
}

export default Card;
