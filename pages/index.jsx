import Landing from './components/sections/Landing'
import Skills from './components/sections/Skills'
import HeadTag from './components/layout/HeadTag'

const Home = () => {
  return <>
    <HeadTag />
    <Landing/>
    <div className="divider"></div>
    <Skills />
  </>
}

export default Home