import React from "react"

const Square = ({ value, index, handleSquareClick }) => {
  //destructuring props
  // const { value } = props - replaces props but must pass the value and dont need to put props. every time.
  const handleClick = () => {
    handleSquareClick(index)
  }


  return (
    <>
      <div className="square" onClick={handleClick}>{value}
      </div>
    </>
  )
}
export default Square
