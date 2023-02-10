export default function Colors ({ colors, handleSelectColor }) {
  if (colors[0] === '') {
    return
  }

  return (
    <>
      <p>Color:</p>
      <select onChange={handleSelectColor}>
        {colors?.map((color, index) =>
          <option key={index} value={color}>
            {color}
          </option>
        )}
      </select>
    </>
  )
}
