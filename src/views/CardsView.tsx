import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card, { CardData } from '../components/Card'
import Axios from "axios";
import PopUp from '../components/PopUp';


export default function CardsView() {

    const [ cards, setCards ] =  useState<CardData[]>([]);
    const [isLoading, setLoading]= useState(false);
    const [selectedCard, setSelectedCard] = useState<CardData>({
        title: "",
        description: "",
        id: 0,
        image: "",
    });
    const [ showPopUp, setShowPopUp ] = useState<boolean>(false);
    // const [ refreshState, setRefreshState ] = useState(false);


    useEffect(() => {
        getCards()
    }, [
        // refreshState
    ]);



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

    const selectCardFn = (id: number) => {
        const tempCard = cards.find(card => card.id === id);
        // console.log(tempCard)  
        if (tempCard){
            setSelectedCard(tempCard);  
            setShowPopUp(true); 
        } 
    }

    const changePopUpValue = () => {
        setShowPopUp(false);
    }

    const updateCardDetails = async (description: string) => {

        const response = await Axios.put(`https://5bb1bc576418d70014071c7e.mockapi.io/modal/list/${selectedCard.id}`, {
            description: description
        });

        if(response.status === 201 || response.status === 200){
            const tempCards = cards.map(card => {
                if (card.id === selectedCard.id){
                    return response.data
                }
                return card;
            });

            setCards(tempCards);
        }

        // console.log(response)
        // setRefreshState(pre => !pre);
        setShowPopUp(false);
    }


    if (isLoading){
        return <h1>Loading...</h1>
    }


    return (
        <div>
            {showPopUp && <PopUp
            description={selectedCard.description}
            title={selectedCard.title}
            show={showPopUp}
            handleClose={changePopUpValue}
            updateCardDetails={updateCardDetails}
            />}
            {/* <PopUp
            description={selectedCard.description}
            title={selectedCard.title}
            show={showPopUp}
            handleClose={changePopUpValue}
            updateCardDetails={updateCardDetails}
            /> */}
            <div className="container">
            <div className="row">
            {
                cards.map(item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onClick={selectCardFn}
                    />
                ))
            }
            {/* <div>
                <input name="name" value={name}  onChange={e => setName(e.target.value)} />
            </div> */}
            </div>
            </div>
            
        </div>
    )
}
