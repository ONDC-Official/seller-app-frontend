import React from "react";

export default function ErrorMessage(props) {
  return (
    <div className='mx-1 py-1 text-[#d32f2f] text-xs'>
      {props.children}
    </div>
  );
}
