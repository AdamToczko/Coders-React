// "stwórz formularz do podawania płci i wieku"

// Część 1
// input na wiek ma być typu range od 16 do 65 lat
// input na płeć ma być typu select i zawierać M lub K

// Część 2
// komponent Form ma zawierać 1 metodę do zmiany stanu w do obu komponentów
// komponent Form ma zawierać metodę onSubmit która loguje w konsoli wartość stanu na wysyłce formularza
import React from 'react';
import DiscreteSlider from './Slder'


class Form extends React.Component{
   
    state = {
        age: "",
        sex: "",
        imBusy: false,
        imWithError: false,
        
    }

    handleChange =  event => {
      const {name, value} = event.target;

      this.setState({ [name] : value});
      console.log(value, name)
    }

    
  //error nie dziala?
    onFormSubmit = event => {
      event.preventDefault();
  
      if (this.state !== "") {
       this.setState({
          imBusy: true
        });
        setTimeout(() => {
          this.setState({
            age: "",
            sex: "",
            imBusy: false,
            imWithError: false,
          })
        }, 3000);
      } else {
        this.setState({
          imWithError: true
        })
      }
    } 

    render() {
      const {age, sex, imBusy, imWithError} = this.state;

        return(
          <div>

            {imBusy ? <span>Please wait</span>
            : 
          <form onSubmit={this.onFormSubmit}>
              <label>Choose your age</label>
              <input 
              name="age"
              type="range" 
              min="16" 
              max="65" 
              step="1"
              value={age} 
              onChange={this.handleChange} 
            />
            <span style={{color: 'yellow'}}>{age}</span>
             {/* <DiscreteSlider 
              name="age"
              type="range" 
              min="16" 
              max="65" 
              step="1"
              value={age} 
              onChange={this.handleChange} />  */}




              <br></br>
              <br></br>
            <label>Choose your sex</label>
              <select 
            name="sex"
            value={sex} 
              onChange={this.handleChange}
            /* value={this.state.value} 
            onChange={this.handleChange} */
            >
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <br></br>
              <button>Send</button>
           {imWithError && <span>Fill the form please</span> }


      </form>
      }
      </div>
          );
        }
      } 
      

export default Form;