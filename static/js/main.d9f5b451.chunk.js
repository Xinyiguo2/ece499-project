(this["webpackJsonponline-adventure"]=this["webpackJsonponline-adventure"]||[]).push([[0],{39:function(e,t,a){},61:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),o=a.n(l),c=a(18),s=a(19),r=a(21),d=a(22),h=a(11),m=(a(39),a(100)),u=a(109),g=a(111),E=a(106),v=a(110),b=a(108),p=a(107),k=function(e){Object(d.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={select:!1,selectedMode:-1,progress:-1,finished:!1,success:!1,number:-1,string:"",checked:!1,checkedpt2:!1,stringSix:"",clickedForModalOneRegular:!1,clickedForModalOneHumor:!1,clickedForModalTwoRegular:!1,clickedForModalTwoConversation:!1,thoughtForCampus:"",weather:"",fail:!1},n.selectModeOne=n.selectModeOne.bind(Object(h.a)(n)),n.selectModeTwo=n.selectModeTwo.bind(Object(h.a)(n)),n.selectModeThree=n.selectModeThree.bind(Object(h.a)(n)),n.actionThree=n.actionThree.bind(Object(h.a)(n)),n.actionFour=n.actionFour.bind(Object(h.a)(n)),n.actionTwo=n.actionTwo.bind(Object(h.a)(n)),n.actionFourPt2=n.actionFourPt2.bind(Object(h.a)(n)),n.actionSix=n.actionSix.bind(Object(h.a)(n)),n.finalAction=n.finalAction.bind(Object(h.a)(n)),n.modalActionOne=n.modalActionOne.bind(Object(h.a)(n)),n.closeModalOne=n.closeModalOne.bind(Object(h.a)(n)),n.closeModalTwo=n.closeModalTwo.bind(Object(h.a)(n)),n.modalActionTwo=n.modalActionTwo.bind(Object(h.a)(n)),n.actionModalOneReg=n.actionModalOneReg.bind(Object(h.a)(n)),n.actionModalTwoReg=n.actionModalTwoReg.bind(Object(h.a)(n)),n.finish=n.finish.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"selectModeOne",value:function(e){this.setState({select:!0,selectedMode:1,progress:0})}},{key:"selectModeTwo",value:function(e){this.setState({select:!0,selectedMode:2,progress:0})}},{key:"selectModeThree",value:function(e){this.setState({select:!0,selectedMode:3,progress:0})}},{key:"actionThree",value:function(e){this.setState({number:e.target.value})}},{key:"actionTwo",value:function(e){this.setState({string:e.target.value})}},{key:"actionFour",value:function(e){this.setState({checked:e.target.checked})}},{key:"actionFourPt2",value:function(e){this.setState({success:!1,checkedpt2:e.target.checked})}},{key:"actionSix",value:function(e){this.setState({stringSix:e.target.value})}},{key:"modalActionOne",value:function(e){2===this.state.selectedMode?this.setState({clickedForModalOneHumor:!0}):this.setState({clickedForModalOneRegular:!0}),console.log(this.state.selectedMode)}},{key:"closeModalOne",value:function(e){this.setState({clickedForModalOneHumor:!1,clickedForModalOneRegular:!1})}},{key:"modalActionTwo",value:function(e){2===this.state.selectedMode?this.setState({clickedForModalTwoConversation:!0}):this.setState({clickedForModalTwoRegular:!0})}},{key:"closeModalTwo",value:function(e){this.setState({clickedForModalTwoRegular:!1,clickedForModalTwoConversation:!1})}},{key:"actionModalOneReg",value:function(e){this.setState({thoughtForCampus:e.target.value})}},{key:"actionModalTwoReg",value:function(e){this.setState({weather:e.target.value})}},{key:"finalAction",value:function(e){this.setState({finished:!0}),""!==this.state.weather&&"INI"===this.state.string&&20===this.state.number&&!0===this.state.checked&&!1===this.state.checkedpt2&&""!==this.state.thoughtForCampus&&""!==this.state.stringSix?this.setState({success:!0}):this.setState({fail:!0})}},{key:"finish",value:function(e){this.setState({success:!1}),alert("Thank you so much for your help! Have a great day! :) You can close the window now!")}},{key:"render",value:function(){return!1===this.state.select?i.a.createElement("div",{className:"container-outside"},i.a.createElement("div",{className:"container"},i.a.createElement("img",{src:"https://i.redd.it/uwq2u8vd3s911.jpg",alt:"robot",width:"100%",height:"100%"})),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"container-inside"},i.a.createElement(m.a,{id:"1",variant:"outlined",color:"primary",onClick:this.selectModeOne},"1")),i.a.createElement("div",{className:"container-inside"},i.a.createElement(m.a,{id:"2",variant:"outlined",color:"secondary",onClick:this.selectModeTwo},"2")))):i.a.createElement("div",{className:"container-outside"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",null," Follow My Lead :)")),i.a.createElement("div",{className:"container-grid"},i.a.createElement("div",{className:"item-even",id:"one"},i.a.createElement(m.a,{id:"fifth",size:"large",variant:"outlined",color:"secondary",onClick:this.modalActionTwo}," ",i.a.createElement("h2",null,"1")),i.a.createElement(p.a,{open:this.state.clickedForModalTwoRegular,onClose:this.closeModalTwo},i.a.createElement("div",{className:"modalBackground"},i.a.createElement("img",{src:"https://openweathermap.org/themes/openweathermap/assets/img/new-history-forecast-bulk.png",alt:"weather",width:"100%",height:"300px"}),i.a.createElement("div",{className:"interModalDialogBox"},i.a.createElement("h2",null,"How's the weather? ")),i.a.createElement(u.a,{id:"modalTwoAnswer",variant:"outlined",label:"Answer here!",onChange:this.actionModalTwoReg}),i.a.createElement(m.a,{id:"modalTwoRegBtn",size:"large",variant:"outlined",onClick:this.closeModalTwo},i.a.createElement("h3",null,"Submit My Answer")))),i.a.createElement(p.a,{open:this.state.clickedForModalTwoConversation,onClose:this.closeModalTwo},i.a.createElement("div",{className:"modalBackground"},i.a.createElement("img",{src:"https://i.redd.it/6361c94kl6i21.jpg",alt:"weather-meme",position:"center",width:"60%",height:"700px"}),i.a.createElement("div",{className:"interModalDialogBox"},i.a.createElement("h2",null,"How's the weather? ")),i.a.createElement(u.a,{id:"modalTwoAnswer",variant:"outlined",label:"Answer here!",onChange:this.actionModalTwoReg}),i.a.createElement(m.a,{id:"modalTwoMemeBtn",size:"large",variant:"outlined",onClick:this.closeModalTwo},i.a.createElement("h3",null,"Submit My Answer"))))),i.a.createElement("div",{className:"item-odd",id:"two"},i.a.createElement(u.a,{id:"second-input",variant:"outlined",label:"type here",onChange:this.actionTwo}),i.a.createElement(m.a,{id:"second",size:"medium",variant:"outlined",color:"secondary"}," ",i.a.createElement("h3",null,"2"))),i.a.createElement("div",{className:"item-even",id:"thr"},i.a.createElement(v.a,{id:"demo-simple-select-outlined-label"},"Number"),i.a.createElement(E.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:this.state.number,onChange:this.actionThree,label:"Number"},i.a.createElement(g.a,{value:""},i.a.createElement("em",null,"None")),i.a.createElement(g.a,{value:10},"10"),i.a.createElement(g.a,{value:20},"20"),i.a.createElement(g.a,{value:30},"30")),i.a.createElement(m.a,{id:"third",size:"medium",variant:"outlined",color:"secondary"}," ",i.a.createElement("h3",null,"3"))),i.a.createElement("div",{className:"item-odd",id:"fou"},i.a.createElement(b.a,{checked:this.state.checked,onChange:this.actionFour,inputProps:{"aria-label":"primary checkbox"}}),i.a.createElement(b.a,{checked:this.state.checkedpt2,onChange:this.actionFourPt2,inputProps:{"aria-label":"primary checkbox"}}),i.a.createElement(m.a,{id:"nothing",size:"large",variant:"outlined",color:"secondary"},i.a.createElement("h2",null,"4"))),i.a.createElement("div",{className:"item-even",id:"fiv"},i.a.createElement(m.a,{id:"first",size:"large",variant:"outlined",color:"secondary",onClick:this.modalActionOne}," ",i.a.createElement("h2",null," 5 ")),i.a.createElement(p.a,{open:this.state.clickedForModalOneRegular,onClose:this.closeModalOne},i.a.createElement("div",{className:"modalBackground"},i.a.createElement("img",{src:"https://chemistry.illinois.edu/sites/default/files/inline-images/uiuc%20campus_0.png",alt:"campus",width:"100%",height:"500px"}),i.a.createElement("div",{className:"interModalDialogBox"}," ",i.a.createElement("h2",null," What do you think of our campus?")),i.a.createElement(u.a,{id:"modalOneAnswer",variant:"outlined",label:"answer here",onChange:this.actionModalOneReg}),i.a.createElement(m.a,{id:"modalOneRegBtn",size:"large",variant:"outlined",onClick:this.closeModalOne}," ",i.a.createElement("h3",null,"Submit My Thought")))),i.a.createElement(p.a,{open:this.state.clickedForModalOneHumor,onClose:this.closeModalOne},i.a.createElement("div",{className:"modalBackground"},i.a.createElement("img",{src:"https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/91026879_10163216068680125_8930716590257733632_n.jpg?_nc_cat=111&_nc_sid=ca434c&_nc_ohc=h1YuNUdyPOcAX8ky6y-&_nc_ht=scontent-ort2-1.xx&oh=bf2cb3314f9953682312447e656a0b1c&oe=5EA78F8D",alt:"campus-meme",width:"100%",height:"500px"}),i.a.createElement("div",{className:"interModalDialogBox"},i.a.createElement("h2",null,"What do you think of our campus?")),i.a.createElement(u.a,{id:"modalOneAnswer",variant:"outlined",label:"answer here",onChange:this.actionModalOneReg}),i.a.createElement(m.a,{id:"modalOneRegBtn",size:"large",variant:"outlined",onClick:this.closeModalOne}," ",i.a.createElement("h3",null,"Submit My Thought"))))),i.a.createElement("div",{className:"item-odd",id:"six"},i.a.createElement(u.a,{id:"sixth-input",variant:"outlined",label:"enter here!",onChange:this.actionSix}),i.a.createElement(m.a,{id:"sixth",size:"large",variant:"outlined",color:"secondary"}," ",i.a.createElement("h2",null,"6")))),i.a.createElement("div",{className:"container-grid"},i.a.createElement(m.a,{id:"final",size:"large",variant:"contained",color:"secondary",onClick:this.finalAction}," ",i.a.createElement("h2",null,"Finish")),i.a.createElement(p.a,{open:this.state.finished&&this.state.success,onClose:this.finish},i.a.createElement("div",{className:"modalBackground"},i.a.createElement("img",{src:"https://img.women.com/images/images/000/077/301/large/E.T..jpg?1489354835",alt:"cute-et",width:"100%",height:"300px"}),i.a.createElement(m.a,{size:"large",variant:"outlined",onClick:this.finish},i.a.createElement("h2",null,"Click Here To Exit! You are amazing! ")))),i.a.createElement(p.a,{open:this.state.finished&&this.state.fail,onClose:this.finish},i.a.createElement("div",{className:"modalBackground"},i.a.createElement("img",{src:"https://lh3.googleusercontent.com/proxy/YAw5Z6Q_WHFjyeVLMMtHMFSvsnrdJfSTK3zkvUxnEEnq_Y7r4UuSpdccAqIs5QG9QRMe_IDd1gtNV_CuyLe1l6jSdp8DbonAWZBfB7FGTCINe33SGf-_AH8",alt:"cute-et",width:"100%",height:"500px"}),i.a.createElement(m.a,{size:"large",variant:"outlined",onClick:this.finish},i.a.createElement("h2",null,"Click Here To Exit! You Naughty boy!"))))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(r.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"navbar"},i.a.createElement("h1",null," (ECE499) Scanvenger Hunt with Me! - Thank you so much for your help! "))}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(r.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("h4",null," Made By: Xinyi Guo; Contact Info: xinyig2@illinois.edu; Made For: ECE 499  "))}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(r.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-outside-main"},i.a.createElement(w,null),i.a.createElement(k,null),i.a.createElement(M,null))}}]),a}(n.Component);o.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d9f5b451.chunk.js.map