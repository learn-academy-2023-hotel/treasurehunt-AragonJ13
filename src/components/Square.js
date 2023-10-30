import React from "react"

const Square = (props) => {
  //destructuring props
  // const { value } = props - replaces props but must pass the value and dont need to put props. every time.


  return (
    <>
      <div className="square">{props.value}</div>
    </>
  )
}
export default Square
