import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>Jsx é um conceito central</h1> 

    const obj = {nome: 'João', idade: 31}

    function subtitulo() {
        return <h2>{'muito legal'.toUpperCase()}</h2> 
    }
    return (
        <Layout titulo='Entendendo JSX'>
            {titulo} h1 dentro de uma variavel JS
            {Math.random().toFixed(2)} <br /> Número aleatório
            {subtitulo()} Função que mescla javascript+html+javascript
            <p>
                {JSON.stringify(obj)} preciso usar JSON.stringfy para conseguir acessar objetos!
            </p>

        </Layout>
    )
}