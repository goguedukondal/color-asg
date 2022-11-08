const Component =({color_code,  color_name}  )=>{
    return(
        <div className="color" style={{height:280, width:180,border:"1px solid black"}}>
            
            <p className="color_1" style={{height:180, width:180, backgroundColor:`${color_code}`}} ></p>
           
                <p className="text" style={{fontWeight:"bold",paddingLeft:"15px"}}>{color_code}</p>
                <span className="text_1" style={{color:`${color_code}`, fontSize:20,paddingLeft:"15px"}}>{color_name}</span>


          
           
                
        </div>

    )

}

export default  Component;