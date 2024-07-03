import Service from '../../components/Service'
import Suica1 from '../../img/suica-1.jpg'
import Suica2 from '../../img/suica-2.jpg'
import Suica3 from '../../img/suica-3.jpg'
import Suica4 from '../../img/suica-4.jpg'

import './styles.css'

const Services = () => {
    return (
        <div className='container-services'>
            
            <img src={Suica1} alt="Paisagem da Suica" />
            
            <img src={Suica2} alt="Paisagem da Suica" />
            <img src={Suica3} alt="Paisagem da Suica" />
            <img src={Suica4} alt="Paisagem da Suica" />
            {/*
            <Service name="Servico limpeza" />
            <Service name="Servico Escritorio"/>
            <Service name="Servico RH"/>
            <Service />
            */}
        </div>
    )
}

export default Services;