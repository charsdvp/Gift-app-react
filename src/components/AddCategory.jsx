import PropTypes from 'prop-types'
import { useState } from 'react'

// cada componente puede tener sus propios estados
export const AddCategory = ({ onNewCategory }) => {
  // creamos un estado para manipular el input
  const [inputValue, setInputValue] = useState('')
  // creamos un funcion para actualizar el estado
  const onInputChange = (e) => { setInputValue(e.target.value) }
  // prevenimos el evento del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    // validamos que tenga por lo menos un caracter
    if( inputValue.trim().length <= 1 ) return
    // De esta manera agregamos una categoria - actualizamos el estado
    onNewCategory(inputValue)
    // Despues de agregar nuestra categoria - Limpiar el input
    setInputValue('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="addCategory"
        id="addCategory"
        value={inputValue}
        placeholder='Buscar...'
        onChange={onInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
