import Serv from '../../img/logo.svg'

import './styles.css';

const Service = ({name = "Servico sem nome"}) => {
    return (
        <div className='container-service'>
            <img src={Serv} alt="Service" />
            <p>{name}</p>
        </div>
    )
}

export default Service;