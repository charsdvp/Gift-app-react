import { useState } from 'react'
import { AddCategory, GifGrid } from './components/'
import './styles.css'
export const GiftApp = () => {
  const [categories, setCategories] = useState(['Naruto'])

  const onAddCategory = (newCategory) => {
    // validamos que la categoria exista
    if (categories.includes(newCategory)) return
    // resivimos solo el valor y lo agregamos
    setCategories([newCategory, ...categories])
    // console.log(newCategory) ✅
  }
  // console.log(categories) ✅
  return (
    <section>
      <h1>Gift-app</h1>
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={onAddCategory}
      />
      {
        categories.map((category) => {          
          return (
            <GifGrid key={category} category={category} />
          )
        })
      }
    </section>
  )
}
// apikey -> w92pMQsDLBxWPsMMztbK2aAnoCSl6JCu