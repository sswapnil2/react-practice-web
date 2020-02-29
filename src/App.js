import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Axios from "axios";

export default function App() {

    const [ cards, setCards ] =  useState([]);
    const [isLoading, setLoading]= useState(false);

    // const [int,  setInt] = useState(false);


    // const changeInterval = () => {
    //     setInt(prev => !prev);
    // }


    useEffect(() => {
        // setInterval(changeInterval, 5000);
        getCards()
    }, []);



    const getCards = async () => {
        setLoading(true);
        try {
           const response =  await 
           Axios.get(
               "https://5bb1bc576418d70014071c7e.mockapi.io/modal/list"
               )

            setLoading(false);
            console.log(response.data[0])
            setCards(response.data)
        
        } catch(error){
            console.log(error);
        }
    }




    if (isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <Navbar />
            <div className="container">
            <div className="row">
            {
                cards.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))
            }
            </div>
            </div>
            
        </div>
    )
}
