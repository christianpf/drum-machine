import { Container, Row, Col,} from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

    <audio id="audio" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />



function App() {

  const [lastPlayed, setLastPlayed] = useState("");

  const handleClick = (e) => {
    switch (e.target.id) {
      case "Heater-1":
        document.getElementById("Q").play();
        setLastPlayed("Heater 1");
        break;
      case "Heater-2":
        document.getElementById("W").play();
        setLastPlayed("Heater 2");
        break;
      case "Heater-3":
        document.getElementById("E").play();
        setLastPlayed("Heater 3");
        break;
      case "Heater-4":
        document.getElementById("A").play();
        setLastPlayed("Heater 4");
        break;
      case "Clap":
        document.getElementById("S").play();
        setLastPlayed("Clap");
        break;
      case "Open-HH":
        document.getElementById("D").play();
        setLastPlayed("Open HH");
        break;
        case "Kick_n_Hat":
          document.getElementById("Z").play();
          setLastPlayed("Kick n Hat");
          break;
        case "Kick":
          document.getElementById("X").play();
          setLastPlayed("Kick");
          break;
        case "Closed_HH":
          document.getElementById("C").play();
          setLastPlayed("Closed HH");
          break;
    }
  }

  const handleKeyDown = (e) => {
    const key = String(e.key).toUpperCase();
    if("QWEASDZXC".includes(key)){
      document.getElementById(key).play();
    }
  }

  return (
    <div className="App" tabIndex={0} onKeyDown={handleKeyDown}>
      <Container id="drum-machine"  className='d-flex flex-column flex-md-row justify-content-space-between align-items-center'>
        <Container id="pads" className='d-flex flex-column  flex-sm-wrap gap-4 h-100 w-100 min-w-'>
          <Row>
            <Col>
              <div id="Heater-1" className='drum-pad' onClick={(event) => {handleClick(event)}}  >
                Q
                <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
              </div>
            </Col>
            <Col>
              <div id="Heater-2" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                W
                <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
              </div>
            </Col>
            <Col>
              <div id="Heater-3" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                E
                <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="Heater-4" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                A      
                <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
              </div>
            </Col>
            <Col>
              <div id="Clap" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                S       
                <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
              </div>
            </Col>
            <Col>
              <div id="Open-HH" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                D      
                <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="Kick_n_Hat" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                Z 
                <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
              </div>
            </Col>
            <Col>
              <div id="Kick" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                X  
                <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
              </div>
            </Col>
            <Col>
              <div id="Closed_HH" className='drum-pad' onClick={(event) => {handleClick(event)}}>
                C       
                <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
              </div>
            </Col>
          </Row>
        </Container>
        <Container id="display">
          <h3>The last pad pressed:</h3>
          <div className="display-pad">
            <h5>{lastPlayed}</h5>
          </div>
        </Container>
      </Container>    
    </div>
  );
}

export default App;
