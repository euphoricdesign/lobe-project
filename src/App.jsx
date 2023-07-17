import { Navbar } from './components/Navbar'
import { Video } from './components/Video'
import { Button } from './components/Button'
import { Footer } from './components/Footer'
import './App.css'

export const App = () => {

  return (
    <>
      <Navbar />

      <div className='titleAndDesk'>
        <h1 className='title' style={{marginTop:'120px'}}>Lobe <span>Tour</span></h1>
        <p className='desc'>Build your first machine learning model in ten minutes. No code or experience required.</p>

        <Video videoId={'Mdcw3Sb98DA'} />

        <h1 className='title' style={{lineHeight:"1em"}}>Train your app with Lobe</h1>

        <Button name={'Download'} width={150} marginTop={'40px'} marginBottom={80} />
      </div>

      <hr style={{width:'calc(100% - 40px)', color: '#767676', margin: '1rem auto' }} />

      <Footer />
    </>
  )
}
