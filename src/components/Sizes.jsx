export default function Sizes ({ sizes, handleSelectSize }) {
  return (
    <>
      <p>Talle:</p>
      <select onChange={handleSelectSize}>
        {sizes?.map((size, index) =>
          <option key={index} value={size}>
            {size}
          </option>
        )}
      </select>
    </>
  )
}
