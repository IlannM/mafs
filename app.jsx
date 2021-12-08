import ReactDOM from 'react-dom';
import React from 'react';

const element = <div className='hola'></div>;
ReactDOM.render(element, document.getElementById('app'));

class Ilan extends React.Component {
    render() {
        return <h1>Hi</h1>;
    }
}
