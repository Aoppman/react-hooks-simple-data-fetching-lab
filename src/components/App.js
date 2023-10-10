import React, { useEffect, useState } from "react";


const App = () => {
    const [dog, setDog] = useState("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
    const [isLoading, setIsLoading] = useState(true)


useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((data) => {
            setDog(data.message)
            setIsLoading(false)
    })

}, [])

return (
    <>
    {isLoading ? <p>Loading...</p> : <img src={dog} alt="A Random Dog"></img>}
    </>
)}


export default App;