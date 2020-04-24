import React from 'react';

function HavaDurumu(props) {
  return (
    <div>
      {props.aktiflik ? (
        <p style={props.style}>bugün hava {props.durum}</p>
      ) : null}
    </div>
  );
}

export default HavaDurumu;

//burada yukarısının appjs'bulunuyor

// import React from 'react';
// import './App.css';
// import HavaDurumu from './HavaDurumu';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <header className={'App-header'}>
//           <HavaDurumu
//             aktiflik={true}
//             style={{ backgroundColor: 'yellow', color: 'black' }}
//             durum={'güneşli'}
//           />
//           <HavaDurumu
//             aktiflik={false}
//             style={{ backgroundColor: 'red', color: 'white' }}
//             durum={'yağmurlu'}
//           />
//           <HavaDurumu
//             aktiflik={true}
//             style={{ backgroundColor: 'cyan', color: 'black' }}
//             durum={'bulutlu'}
//           />
//         </header>
//       </header>
//     </div>
//   );
// }

// export default App;
