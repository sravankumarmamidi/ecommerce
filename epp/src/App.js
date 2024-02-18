

import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'

import { Routes,Route } from 'react-router-dom'
import Ac from './stores/components/Ac'
import Books from './stores/components/Books'
import Computers from './stores/components/Computers'
import Fridge from './stores/components/Fridge'
import Furniture from './stores/components/Furniture'
import Kitchen from './stores/components/Kitchen'
import Men from './stores/components/Men'
import Mobiles from './stores/components/Mobiles'
import Speaker from './stores/components/Speaker'
import Tv from './stores/components/Tv'
import Watch from './stores/components/Watch'
import Women from './stores/components/Women'



import AcPage from './stores/pages/AcPage'
import BooksPage from './stores/pages/BooksPage'
import ComputerPage from './stores/pages/ComputerPage'
import FridgePage from './stores/pages/FridgePage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import MobilesPage from './stores/pages/MobilesPage'
import SpeakerPage from './stores/pages/SpeakerPage'

import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import WomenPage from './stores/pages/WomenPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import AcSingle from './singles/AcSingle'
import BooksSingle from './singles/BooksSingle'
import ComputersSingle from './singles/ComputersSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import WatchSingle from './singles/WatchSingle'
import WomenSingle from './singles/WomenSingle'

const App = () => {
  return (
    <div>
          <Routes>
            
           <Route path = "/home" element = {<LandingPage />} />
           <Route path = "/ac" element = {< Ac/>} />
           <Route path = "/book" element = {< Books/>} />
           <Route path = "/computer" element = {< Computers/>} />
           <Route path = "/fridge" element = {< Fridge/>} />
           <Route path = "/furniture" element = {< Furniture/>} />
           <Route path = "/kitchen" element = {< Kitchen/>} />
           <Route path = "/men" element = {< Men/>} />
           <Route path = "/mobiles" element = {< Mobiles/>} />
           <Route path = "/speaker" element = {< Speaker/>} />
           <Route path = "/tv" element = {< Tv/>} />
           <Route path = "/watch" element = {< Watch/>} />
           <Route path = "/women" element = {< Women/>} />

           <Route path = "/acpage" element = {<AcPage />} />
           <Route path = "/bookspage" element = {<BooksPage />} />
           <Route path = "/computerpage" element = {<ComputerPage />} />
           <Route path = "/fridgepage" element = {<FridgePage />} />
           <Route path = "/furniturepage" element = {<FurniturePage />} />
           <Route path = "/kitchenpage" element = {<KitchenPage />} />
           <Route path = "/menpage" element = {<MenPage />} />
           <Route path = "/mobilespage" element = {<MobilesPage />} />
           <Route path = "/speakerpage" element = {<SpeakerPage />} />
           <Route path = "/tvpage" element = {<TvPage />} />
           <Route path = "/watchpage" element = {<WatchPage />} />
           <Route path = "/womenpage" element = {<WomenPage />} />

           <Route path = "/mobiles/:id" element = {<MobileSingle />} />
           <Route path = "/ac/:id" element = {<AcSingle />} />
           <Route path = "/books/:id" element = {<BooksSingle />} />
           <Route path = "/computer/:id" element = {<ComputersSingle />} />
           <Route path = "/fridge/:id" element = {<FridgeSingle />} />
           <Route path = "/furniture/:id" element = {<FurnitureSingle />} />
           <Route path = "/kitchen/:id" element = {<KitchenSingle />} />
           <Route path = "/men/:id" element = {<MenSingle />} />
           <Route path = "/speaker/:id" element = {<SpeakerSingle />} />
           <Route path = "/tv/:id" element = {<TvSingle />} />
           <Route path = "/watch/:id" element = {<WatchSingle />} />
           <Route path = "/women/:id" element = {<WomenSingle />} />


           <Route path = "/cart" element = {<UserCart/>} />




          </Routes>
  </div> 
  )
}

export default App