
import {Component} from 'react';
import React from 'react';

class UncontrolledForm extends Component {
    handleSubmitClick = () => {
        const name = this.myName.autofocus;
        console.log("input value: " + name);
    }
    render() {
        return (
            <div>
                <input type="text" ref={(input) => (this.myName = input)} />
                <button onClick={this.handleSubmitClick}> Sign up</button>
            </div>
        )
    }
}

export class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        console.log("ref =  " + this.myRef.current);
    }

    render() {
        return <div ref={this.myRef} />
    }
}

export class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        //Explicitly focus the text input using the raw DOM API
        //Note: we're accessing "curret" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        // tell React that we want to associate the <input> ref 
        // with the 'textInput' that we created in teh constructor
        return (
            <div>
                <input
                 type="text"
                 ref={this.textInput} />
                <input
                 type="button"
                 value="Focus the text input"
                 onClick={this.focusTextInput} />
            </div>
        )
    }
}

export class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        )
    }
}

export default UncontrolledForm;