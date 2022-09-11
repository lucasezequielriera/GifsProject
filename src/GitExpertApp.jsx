import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    
    // Agregar Categoría
    const onAddCategory = (onNewCategory) => {

        if (categories.includes(onNewCategory)) return
        setCategories([onNewCategory, ...categories])
    }

    return (
        <>
            {/* Título */}
            <h1>GitExpertApp</h1>

            {/* Input */}
            <AddCategory
            onNewCategory={ value => onAddCategory(value) }
            // setCategories={setCategories}
            />

            {/* Listado de GIF'S */}
            <ol>
                {categories.map(category =>
                <GifGrid
                key={category}
                category={category} />)}
            </ol>
        </>
    )
}