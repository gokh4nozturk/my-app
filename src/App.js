import React from 'react';
import './App.css';
import HavaDurumu from './HavaDurumu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className={'App-header'}>
          <HavaDurumu
            aktiflik={true}
            style={{ backgroundColor: 'yellow', color: 'black' }}
            durum={'güneşli'}
          />
          <HavaDurumu
            aktiflik={false}
            style={{ backgroundColor: 'red', color: 'white' }}
            durum={'yağmurlu'}
          />
          <HavaDurumu
            aktiflik={true}
            style={{ backgroundColor: 'cyan', color: 'black' }}
            durum={'bulutlu'}
          />
        </header>
      </header>
    </div>
  );
}



export default class Sayac extends React.Component {

    state = {

        sayac: 0
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                sayac: this.state.sayac + 1
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.sayac}
            </div>
        )
    }
}