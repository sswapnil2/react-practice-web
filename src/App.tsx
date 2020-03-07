import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import CardsView from './views/CardsView'
import CardsDetail from './views/CardsDetail'
import Navbar from './components/Navbar'


export default function App() {
    return (
        <div>
            <Navbar />
            <Switch>
            <Route path="/cards" component={CardsView} />
            <Route path="/card-details" component={CardsDetail} />
            <Route path="/" component={HomeView} />

        </Switch>
        </div>
    )
}
