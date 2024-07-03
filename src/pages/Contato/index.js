import './styles.css'

const Contato = () => {
    return (
        <div className="container-contato">
            <form>
                <input placeholder="Nome Completo" /><br/>
                <input placeholder="Email" /><br/>
                <input placeholder="Telefone" /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contato;