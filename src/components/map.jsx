import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RegularModalOne from './regularModalOne';
import HumorModal from './humorModal';
import ConversationalModal from './conversationModal';
import RegularModalTwo from './regularModalTwo';
import Modal from '@material-ui/core/Modal';

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
            stringSix: "",
            clickedForModalOneRegular: false,
            clickedForModalOneHumor: false,
            clickedForModalTwoRegular: false,
            clickedForModalTwoConversation: false
        }

        this.selectModeOne = this.selectModeOne.bind(this);
        this.selectModeTwo = this.selectModeTwo.bind(this);
        this.selectModeThree = this.selectModeThree.bind(this);
        this.actionThree = this.actionThree.bind(this);
        this.actionFour = this.actionFour.bind(this);
        this.actionTwo = this.actionTwo.bind(this);
        this.actionFourPt2 = this.actionFourPt2.bind(this);
        this.actionSix = this.actionSix.bind(this);
        this.finalAction = this.finalAction.bind(this);
        this.modalActionOne = this.modalActionOne.bind(this);
        this.closeModalOne = this.closeModalOne.bind(this);
        this.closeModalTwo = this.closeModalTwo.bind(this);
        this.modalActionTwo = this.modalActionTwo.bind(this);
    }

    selectModeOne (btnClicked) {
        this.setState({
            select: true,
            selectedMode: 1,
            progress: 0
        })
    } 

    selectModeTwo (btnClicked) {
        this.setState({
            select: true,
            selectedMode: 2,
            progress: 0
        })
    }

    selectModeThree (btnClicked) {
        this.setState({
            select: true,
            selectedMode: 3,
            progress: 0
        })
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

    finalAction (event) {
        //check if success or not 
        alert("yes!!")
    }

    modalActionOne (event) {
        if (this.state.selectedMode === 2) { // 2 is for humor 
            this.setState({
                clickedForModalOneHumor: true
            })
        } else {
            this.setState({
                clickedForModalOneRegular: true
            })
        }
        console.log(this.state.selectedMode)
    }

    closeModalOne (event) {
        this.setState({
            clickedForModalOneHumor: false,
            clickedForModalOneRegular: false
        })
    }

    modalActionTwo (event) {
        if (this.state.selectedMode === 3) { // 3 is for convsersation 
            this.setState({
                clickedForModalTwoConversation: true
            })
        } else {
            this.setState({
                clickedForModalTwoRegular: true
            })
        }
    }

    closeModalTwo (event) {
        this.setState({
            clickedForModalTwoRegular: false,
            clickedForModalTwoConversation: false
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
                            <Button id="1" variant="outlined" color="primary" onClick={this.selectModeOne}>
                                1
                            </Button>
                        </div>
                        <div className="container-inside">
                            <Button id="2" variant="outlined" color="secondary" onClick={this.selectModeTwo}>
                                2
                            </Button>
                        </div>
                        <div className="container-inside">
                            <Button id="3" variant="outlined" onClick={this.selectModeThree}>
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
                            <Button id="first" size="large" variant="outlined" color="secondary" onClick={this.modalActionOne}> <h2> 1 </h2></Button>
                            <Modal 
                             open={this.state.clickedForModalOneRegular}
                             onClose={this.closeModalOne}
                             >
                                  <div className="modalBackground">
                                      <div>Which campus builidng is your favorite One?</div>
                                      <img src="https://chemistry.illinois.edu/sites/default/files/inline-images/uiuc%20campus_0.png" alt="campus" width="100%" height="100%"></img>
                                      <Button> CLOSE HERE</Button>
                                  </div>
                             </Modal>
                             <Modal 
                             open={this.state.clickedForModalOneHumor}
                             onClose={this.closeModalOne}
                             >
                                  <HumorModal />
                             </Modal>
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
                            <Button id="fifth" size="large" variant="outlined" color="secondary" onClick={this.modalActionTwo}> <h2>5</h2></Button>
                            <Modal 
                             open={this.state.clickedForModalTwoRegular}
                             onClose={this.closeModalTwo}
                             >
                                  <RegularModalTwo />
                             </Modal>
                             <Modal 
                             open={this.state.clickedForModalTwoConversation}
                             onClose={this.closeModalTwo}
                             >
                                  <ConversationalModal />
                             </Modal>
                        </div>
                        <div className="item-odd" id="six">
                            <TextField id="sixth-input" variant="outlined" label="enter here!" onChange={this.actionSix}></TextField>
                            <Button id="sixth" size="large" variant="outlined" color="secondary"> <h2>Done</h2></Button>
                        </div>
                    </div>
                    <div className="container-grid">
                        <Button id="final" size="large" variant="contained" color="secondary" onClick={this.finalAction}> <h2>Finish</h2></Button>   
                    </div>
                </div>
            )
        }
    }
}


// TODO: 
// chanllenge for 1 and 5 : add modal to it 
// add voices 
export default Map;