//import logo from './logo.svg';
import './App.css';
import Row from './Row' ;
import requests from './requests' ;

function App() {
  return (
    <div className="App">
      <h1> Hey clever programmer</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} ></Row>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} > </Row>
    </div>
  );
}

export default App;
