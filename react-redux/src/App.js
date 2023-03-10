import { Routes, Route } from 'react-router-dom'

import ContactsInfoPage from './pages/ContactsInfoPage'
import ContactsPage from './pages/ContactsPage'
import GreetingPage from './pages/GreetingPage'
import NotFound from './pages/NotFound'



const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<GreetingPage />} />
                <Route path='contacts' element={<ContactsPage />} />
                <Route path='contacts/:id' element={<ContactsInfoPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App