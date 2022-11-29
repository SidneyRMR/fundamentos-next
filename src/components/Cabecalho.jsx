export default function Cabecalho(props) {
    //props são somente leitura!!!!!

    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}