import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'

    }}>
      <Navegador texto='Estiloso' destino='/estiloso' ></Navegador>
      <Navegador texto='Exemplo' destino='/exemplo' cor='#9400d3'></Navegador>
      <Navegador texto='JSX' destino='/jsx' cor='crimson'></Navegador>
      <Navegador texto='Navegação #01' destino='/navegacao' cor='green'></Navegador>
      <Navegador texto='Navegação #02' destino='/cliente/sp-2/123' cor='blue'></Navegador>
      <Navegador texto='Componnte com estado' destino='/estado' cor='pink'></Navegador>
    </div>
  )
}