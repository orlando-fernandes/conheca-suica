import Logo from '../../img/logo.svg'

import './styles.css'
import YouTubeVideo from '../../components/YouTubeVideo'


const Home = () => {
    return (
        <main className='container-home'>

            <h1>Visite a Suiça pela Conheça a Suiça.com e 
                se encante com uma experiência 
                inesquecível!</h1>
                
            <YouTubeVideo />
            {/*
            <img src={Logo} alt="Logo" />

            <div>
                <h1>Meu Titulo</h1>
                <p>Texto aleatório lalala </p>
                <button>Acessar Servicos</button>
            </div>
            */}
        </main>
    )
}

export default Home;