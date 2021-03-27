import React, { useEffect, useState } from "react";
function Posts(props) {
    const[val,setval]=useState("shepherd");
    const [imgurl,setImg]=useState('https:\/\/images.dog.ceo\/breeds\/african\/n02116738_607.jpg');

    
  let arr= Object.values(props.state);

  arr=arr.filter(item=>item.length!==0)

  const handleChange=(e)=>{
    setval(e.target.value);
  }

  return (
    <div>
      List of Dogs:

      <select onChange={handleChange}>
      <option value={val}>african</option>
      { arr.map((innerarr)=>(<option value={val} onChange={ handleChange}>{innerarr[0]}</option>))}
      </select>
        <div>       {console.log('vall',val)}

        <img src={imgurl}/>
        </div>
    </div>
  );
}
export default Posts;