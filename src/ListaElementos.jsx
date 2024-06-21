import { useEffect, useState } from 'react'
import './App.css'


const ListaElementos = () => {
  const [numero, setNumero] = useState('');
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNumero('');
    }, 10000);

    return () => clearTimeout(timer);
  }, [numero]);


  const asociarElementos = (num) => {
    // Aquí puedes definir la lógica para asociar los números con los elementos
    // Por ejemplo, un objeto donde las claves son los números y los valores son los elementos
    const lista = {
      0: [6, 29, 33, 25, 10,15,35],
      1: [29, 12, 19, 26, 2, 11],
      2: [30, 29, 16, 17, 20, 21],
      3: [19, 2, 1, 5, 28, 31,],
      4: [7, 4, 6, 31,1,23],
      5: [32, 11, 18, 23, 27, 28],
      6: [1, 0, 8, 5, 4, 9, 36],
      7: [21, 28, 5, 32, 33, 14, 9],
      8: [1 , 2, 32, 11, 12, 5, 31],
      9: [14, 30, 12, 29, 13, 15, 26],
      10: [ 28, 0, 6, 33, 14, 2, 18],
      11: [29, 2, 8, 1, 5, 34, 0],
      12: [7, 9, 20, 5, 8, 16, 6],
      13: [7, 1, 11, 15, 17, 26, 10, 31],
      14: [9, 28, 23, 17, 21, 1,3],
      15: [1, 13, 17, 31, 8, 15],
      16: [25, 6, 28, 10, 0, 4, 16],
      17: [32,20,2, 23, 13, 33],
      18: [ 2, 11, 10, 22, 7, 3, 16],
      19: [33, 3, 4, 30, 27, 12, 32],
      20: [23, 36, 6, 17, 21, 3, 28],
      21: [7, 35, 23, 1, 6, 9, 3],
      22: [ 4, 29,34,1, 11, 5],
      23: [1,14, 29, 30, 32, 17, 5],
      24: [28, 3, 32, 4, 25, 13],
      25: [16, 27, 23, 30, 28, 9, 25],
      26: [10, 13,7, 6, 32, 26],
      27: [25, 9, 5, 15, 28, 30, 21],
      28: [13, 20, 10,7, 32, 17, 8],
      29: [11, 23, 20, 7, 2, 32, 35],
      30: [23, 9, 36, 6, 21, 15],
      31: [13, 33, 20, 4, 12, 2],
      32: [5, 29, 19, 17, 8, 13],
      33: [8, 2, 14, 7, 34, 13],
      34: [36, 23, 29, 19, 34, 20],
      35: [8, 29, 2, 17, 33, 24, 9],
      36: [34, 9, 23, 19, 29, 1, 12]
      // Otros números y sus elementos asociados aquí...
    };
    return lista[num] || [];
  };

  const handleChange = (e) => {
    setNumero(e.target.value);
    setElementos(asociarElementos(e.target.value));
  };

  return (
    <>
      <div>
      </div>
      <h1>Sistema Ruleta</h1> 
      <h4>Ingrese el número en el cuadro, para calcular los posibles números fijos</h4>                                                                        
      <div>
        <input
        className='caja_texto'
          type="number"
          min="1"
          max="36"
          value={numero}
          onChange={handleChange}
          placeholder="Ingrese el número"
        />
        <div className='caja_elementos'>
          {elementos.map((elemento, index) => (
            <span className='elemento' key={index}>{elemento}</span>
          ))}
        </div>
      </div>

      <h3>Jugarle a los vecinos del fijo.   Ejemplo Fijo 0 : 26, 0 ,32</h3>
      
    </>
  )
}

export default ListaElementos
