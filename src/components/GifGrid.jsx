import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const { images, isLoading  }  = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      { isLoading && (<h4>Cargando...</h4>) }
      <div className='card-grid'>
        {
          images.map((image) => (            
            <GifGridItem key={image.id} title={image.title} url={image.images.original.url}/>
          ))
        }
      </div>
    </>
  )
}
GifGrid.propTypes = {
  category: PropTypes.string
}
