// import React, { useState } from "react";

// export default function Todolist() {
// //   const [list, setList] = useState([]);
// //   const [text, setText] = useState();
// //   const onButtonClick = () => {
// //     if (text) {
// //       setList([...list, text]);
// //       setText("");
// //     } else {
// //       alert("Field is empty");
// //     }
// //   };
// //   return (
// //     <div>
// //       <input
// //         className="textField"
// //         type="text"
// //         id="fname"
// //         name="fname"
// //         placeholder="Add your city"
// //         value={text}
// //         onChange={(event) => {
// //           setText(event.target.value);
// //         }}
// //       />
// //       <br />
// //       <button
// //         className="buttonBg"
// //         onClick={() => {
// //           onButtonClick();
// //         }}
// //       >
// //         Add Todolist
// //       </button>
// //       {list.map((item) => (
// //         <div>
// //           <text>
// //             <ul>
// //               <li className="List">{item}</li>
// //             </ul>
// //           </text>
// //         </div>
// //       ))}
// //     </div>
// //   );




// }


import React from 'react'
import { useState } from 'react'

function Todolist() {

  const [text, setText] = useState();
  const handelEvent = () => {
    const values = setText(text);
    console.log(values)
  }

  return (
    <div> 
     <input type='text' placeholder='Enter your name'  value={text} onChange={(e) => setText(e.target.value)}/> 
     <button onChange={handelEvent}>Add your list</button>
    </div>
  )
}

export default Todolist