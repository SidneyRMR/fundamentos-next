import Layout from '../components/Layout'
import Cabecalho from "../components/Cabecalho"

export default function Exemplo() {
    return(
        <Layout titulo='Usando componentes '>
            <Cabecalho title='Next.js & React'/>
            <Cabecalho title='Teste 2'/>
        </Layout>
    )
}