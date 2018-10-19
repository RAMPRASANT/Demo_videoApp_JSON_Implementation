import React, {Component} from 'react';
import Data from '../data.json'
import axios from 'axios';

class Login extends Component{

    constructor(){
        super();
        this.state={
            isUserSignedUp: true,
            userDetail:[],
            name:'',
            email:'',
            password:''
        }
    }

    componentDidMount= () => {
        axios.get('http://localhost:3000/data.json')
        .then(response =>{ 
          this.setState ({  userDetail: response });
          console.log(this.state.userDetail);
    } )
        
    }

//To navigate between signUP and signIN
    handleUserSignUp = () => {

        this.setState ({
            isUserSignedUp: false
        })
    }

//To navigate between signUP and signIN
    handleUserSignIn = () => {

        this.setState ({
            isUserSignedUp: true
        })

    }

//To get the JSON file and compare with the userInput to render the custom videoList
    handleSignIn = () => {

        const isValidEmail = document.getElementsByName("email")[0].value;
        const isValidPassword = document.getElementsByName("password")[0].value;
        const myJson = JSON.stringify(Data);
        console.log(myJson);
        console.log(isValidEmail);
        console.log(isValidPassword);
    }

//To post the user input to the JSON file
    handleSignUp = event => {

        const user ={
            name: document.getElementById('name1').value,
            email: document.getElementById('email1').value,
            password: document.getElementById('password1').value
        }

                //     axios.post('http://localhost:3000/userDetail', {user})
                //     .then(response => { 
                //     console.log(response);
                //     console.log("success");
                // })
                //     // .catch((e) => {
                //     //     console.log(e,'e');
                //     // })

                axios({
                    method: 'post',
                    url: 'http://localhost:3000/userDetail',
                    data: user,
                    config: { headers: {'Content-Type': 'application/json' }}
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                

            }


//To render the user input in the JSON format
    handleChange = event => {
        event.preventDefault();
        this.setState({
            name: event.target.value,
            email: event.target.value,
            password: event.target.value

        })

        let json = {

            "Name": document.getElementById('name1').value,
            "email": document.getElementById('email1').value,
            "password": document.getElementById('password1').value,
        }

            let myJson = JSON.stringify(json);
            document.getElementById('output').innerHTML = myJson;
    }
  

    render(){

        let content;

        if(this.state.isUserSignedUp=== true){
            content = <div> 
               <form>
                    <label>
                        Email:
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password"/>
                    </label>
                        <input type="button" value="SignIn" onClick={this.handleSignIn}/>
                        <p> Not a member? <a onClick={this.handleUserSignUp}> signUp </a> </p>
               </form>    
            </div>
       }

       else{

            content= <div> 
               <form onSubmit={this.handleSignUp}>
                    <label>
                        Name:
                        <input type="name" name="name" id= "name1" onChange={this.handleChange}/>
                    </label>    
                    <label>
                        Email:
                        <input type="email" name="email" id= "email1" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" id= "password1" onChange={this.handleChange}/>
                    </label>
                        <input type="button" value="SignUp" onClick={this.handleSignUp} />
                        <p> Already a member? <a onClick={this.handleUserSignIn}> signIn </a> </p>

                        <p id="output"> </p>
               </form>    
            </div>

       }

        return(
                <div>
                     {content}
                </div>

        )
    }




}

export default Login;