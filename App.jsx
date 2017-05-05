import React from 'react';

//import First from './first.jsx';


class App extends React.Component{
    constructor(){
        super()
        this.state={
            data:[{
                "id":1,
                "name":"Naveen",
                "age":"20"
            },{
                "id":2,
                "name":"Siddhu",
                "age":"22"
            },{
                "id":3,
                "name":"Abhi",
                "age":"23"
            },{
                "id":4,
                "name":"Ramesh",
                "age":"24"
            }]
        }
        this.custom = this.custom.bind(this);
    }

    custom(e){

      console.log("called");
      console.log(e);
      // change data here and call this.setState({"data":this.state.data})
    }

    render( ){

        return(<span>
               <Header/>
              <table>
                    <tbody>
                    {this.state.data.map((person,i)=>
                    <TableRow key={i} data={person} events={this.custom} />)}
                    </tbody>
                </table>
             <Footer />
            </span>)

    }
}

// Stateless components

class TableRow extends React.Component{
    render(){
        return(
            <tr  style={{color:"red"}} onClick={this.props.events}>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>This is Header</h1>
            </div>
        )
    }
}


class Footer extends React.Component{
    render(){
        return(
            <div>
                <h1>This is Footer</h1>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}

export default App;


