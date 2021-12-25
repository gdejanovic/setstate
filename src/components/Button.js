
import React from 'react'
export default function Button(props) {
    function handleChange(e) {
        e.preventDefault();
        

    console.log(props)
    }
    return (
      <span>
        <button onClick={() => this.onInteraction()}>Submit</button>
      </span>
    );
  }