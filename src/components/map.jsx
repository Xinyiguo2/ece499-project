import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Map extends Component {

    constructor (props) {
        super(props);
        this.state = {
            select: false,
            selectedMode: -1,
            progress: -1,
            finished: false,
            success: false,
            number: -1,
            string: "",
            checked: false,
            checkedpt2: false,
            stringSix: ""
        }

        this.selectMode = this.selectMode.bind(this);
        this.actionThree = this.actionThree.bind(this);
        this.actionFour = this.actionFour.bind(this);
        this.actionTwo = this.actionTwo.bind(this);
        this.actionFourPt2 = this.actionFourPt2.bind(this);
        this.actionSix = this.actionSix.bind(this);
    }

    selectMode (btnClicked) {
        if (btnClicked.target.id === 1) {
            this.setState({
                select: true,
                selectedMode: 1,
                progress: 0
            })
        } else if (btnClicked.target.id === 2) {
            this.setState({
                select: true,
                selectedMode: 2,
                progress: 0
            })
        } else {
            this.setState({
                select: true,
                selectedMode: 3,
                progress: 0
            })
        }
    } 

    actionThree (value) {
        this.setState({
            number: value.target.value
        })
    }

    actionTwo (event) {
        this.setState({
            string: event.target.value
        })
    }

    actionFour (event) {
        this.setState({
            checked: event.target.checked
        })

    }

    actionFourPt2 (event) {
        this.setState({
            success: false,
            checkedpt2: event.target.checked
        })
    }

    actionSix (event) {
        this.setState({
            stringSix: event.target.value
        })
    }
 
    render () {
        if (this.state.select === false) {
            return (
                <div className="container-outside">
                    <div className="container">
                        <img src="https://i.redd.it/uwq2u8vd3s911.jpg" alt="robot" width="100%" height="100%"/>
                    </div>
                    <div className="container">
                        <div className="container-inside">
                            <Button id="1" variant="outlined" color="primary" onClick={this.selectMode}>
                                1
                            </Button>
                        </div>
                        <div className="container-inside">
                            <Button id="2" variant="outlined" color="secondary" onClick={this.selectMode}>
                                2
                            </Button>
                        </div>
                        <div className="container-inside">
                            <Button id="3" variant="outlined" onClick={this.selectMode}>
                                3
                            </Button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-outside">
                    <div className="container">
                        <h2> Follow My Lead :)</h2>
                    </div>
                    <div className="container-grid">
                        <div className="item-even" id="one">
                            <Button id="first" size="large" variant="outlined" color="secondary"> <h2> 1 </h2></Button>
                        </div>
                        <div className="item-odd" id="two">
                            <TextField id="second-input" variant="outlined" label="type here" onChange={this.actionTwo}></TextField>
                            <Button id="second" size="medium" variant="outlined" color="secondary"> <h3>Enter</h3></Button>
                        </div>
                        <div className="item-even" id="thr">
                            <InputLabel id="demo-simple-select-outlined-label">Number</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.number}
                                onChange={this.actionThree}
                                label="Number"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            </Select>
                            <Button id="third" size="medium" variant="outlined" color="secondary"> <h3>Select</h3></Button>
                        </div>
                        <div className="item-odd" id="fou">
                            <Checkbox
                                checked={this.state.checked}
                                onChange={this.actionFour}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <Checkbox
                                checked={this.state.checkedpt2}
                                onChange={this.actionFourPt2}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                        <div className="item-even" id="fiv">
                            <Button id="fifth" size="large" variant="outlined" color="secondary"> <h2>5</h2></Button>
                        </div>
                        <div className="item-odd" id="six">
                            <TextField id="sixth-input" variant="outlined" label="enter here!" onChange={this.actionSix}></TextField>
                            <Button id="sixth" size="large" variant="outlined" color="secondary"> <h2>Done</h2></Button>
                        </div>
                        <div className="item-odd" id="sev">
                        </div>
                        <div className="item-odd" id="eig">
                            <Button id="final" size="large" variant="contained" color="secondary"> <h2>Finish</h2></Button>
                        </div>
                        <div className="item-odd" id="nin">
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Map;