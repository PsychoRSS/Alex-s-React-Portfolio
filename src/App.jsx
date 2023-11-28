import { Outlet } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer';
import Nav from './components/Navigation';




function App() {
  

  return (
    <ApolloProvider client={client}>
      <main>
    <Nav />,

    <Header />,
    
    <Outlet />,
    '
    <Footer />

    </main>

    </ApolloProvider>
  )
}

<>
  <Header />
  <main>
    <Outlet />
  </main>
  <Footer />
</>

export default App
