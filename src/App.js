import React, {Component} from 'react';
import './App.css';
import 'tachyons'
import 'bootstrap/dist/css/bootstrap.css';
import QrReader from 'react-qr-reader';
import Particles from "react-particles-js";
import Navigation from "./components/Navigation";
import AudioPlayer from "./components/AudioPlayer";

const particlesOptions = {
    particles: {
        number: {
            value: 110,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'No result',
            scanned: 'false'
        }
    }


    handleScan = data => {
        if (data) {
            this.setState({
                result: data,
                scanned: 'true'
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div className='App' id='root'>
                <Particles className={'particles'}
                           params={particlesOptions}/>
                <Navigation/>

                <QrReader
                    facingMode='rear'
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                    <div className='container text-center mt-5'>
                        <AudioPlayer result={this.state.result} scanned={this.state.scanned}/>
                    </div>
            </div>
        );
    }
}

export default App;
