
// import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./components/Post"

function App() {
  return (
    <div className="App text-center p-4">

      <Post title="Hey Its me" poster="Patrick" likes={0}/>
      <Post title="I suit yourself"poster="Eric" likes={-1}/>
      <Post title=" I am blocked" poster="Peter" likes={500} />
      {/* <div className="border">
        <h3> Posted by Patrick</h3>
        <h1>Hey Is me!!!!</h1>
        <h1>likes:3000 RT:23</h1>
      </div>
      <div className="border">
        <h3> Posted by Eric</h3>
        <h1>Hey Is me!!!!</h1>
        <h1>likes:4000 RT:359</h1>
      </div>
      <div className="border">
        <h3> Posted by Peter</h3>
        <h1>Hey Is me!!!!</h1>
        <h1>likes:3000 RT:40</h1>
      </div>
      <div className="border">
        <h3> Posted by Mark</h3>
        <h1>Hey Is me!!!!</h1>
        <h1>likes:60000 RT:12</h1>
      </div> */}
    </div>
  );
}

export default App;
