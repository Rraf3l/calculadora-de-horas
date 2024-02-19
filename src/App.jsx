import { useState } from 'react'
import './App.css'






function App() {
const {hi, setHi} = useState();
const {mi, setMi} = useState();
const {hf, setHf} = useState();
const {mf, setMf} = useState();
const {resultado, setResultado} = useState("Resultado");


const soma = () =>{
  let somaHora = Number(hi.value) + Number(hf.value);
  let somaMin = Number(mi.value) + Number(mf.value);
  while (somaMin > 59){
      somaMin -= 60;
      somaHora ++;
  }
  setResultado (somaHora + " : " + somaMin)
}


const diferenca = () =>{
  let totalInicialMin = hi.value*60 + Number(mi.value);
  let totalFinalMin = hf.value*60 + Number(mf.value);
  let subHora = 0;
  let totalMin = totalInicialMin - totalFinalMin;
  if(totalMin < 0){
      totalMin *= -1;
  }
  while (totalMin > 59){
      totalMin -= 60;
      subHora ++;
  }
  setResultado (subHora + " : " + totalMin)
}





  return (
   <>
    <h1>
        Calculadora
    </h1>
    <div class="bloco">
        <h3>Digite os horários que deseja</h3>
        <input type="number" value={hi} onChange={(e) => setHi(e.target.value)} placeholder="Hora Inicial"/> &nbsp;:&nbsp;
        <input type="number" value={mi} onChange={(e) => setMi(e.target.value)} placeholder="Hora Inicial"/> <br/>
        <input type="number" value={hf} onChange={(e) => setHf(e.target.value)} placeholder="Hora Final"/> &nbsp;:&nbsp;
        <input type="number" value={mf} onChange={(e) => setMf(e.target.value)} placeholder="Minuto Final"/> <br/>
        <button onclick="soma()">Soma</button>
        <button onclick="diferenca()">Diferença</button>
        <h3 id="resultado">{resultado}</h3>
    </div>
   </>
  )
}

export default App
