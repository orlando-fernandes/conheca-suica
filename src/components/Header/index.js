import { Link } from "react-router-dom";

import './styles.css'

const Header = () => {
    return (
        <main className="container-main">
            <h1>Conheça a Suica.com</h1>

            <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/services"><a>Imagens</a></Link></li>
                <li><Link to="/contato"><a>Contato</a></Link></li>
            </ul>

        </main>
    )
}

export default Header;