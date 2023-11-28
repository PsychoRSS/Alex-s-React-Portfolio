import Header from './components/Header'
import Footer from './components/Footer';
import Nav from './components/Navigation';
import Project from './components/Project';
import AboutMe from './components/AboutME';


function App() {
  

  return (
    <ApolloProvider client={client}>
      <>
      <main>
    <Nav />,

    <Header />,
    
    <AboutMe />,
    
    <Project />,

    <Footer />
    </main>
    </>
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
