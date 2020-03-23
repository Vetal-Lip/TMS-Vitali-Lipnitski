import React from 'react';
import Button from './Button';
import styles from'./App.module.css';


export class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    value: '0',
  }
}

onClickDecrement= () =>{
  this.setState({value: this.state.value - 1})
  console.log(0)
}

onClickIncrement= () =>{
  this.setState({value: Number(this.state.value) + 1 })
  console.log(1)
}

onClickReset = () => {
  this.setState({value: '0'})
}




render(){
  return (
    <div className={styles.container} >
      <div className={`${styles.counter} ${styles.center}`}>{this.state.value}</div>
      <div className={styles.buttons_panel}>
          <Button onClick={this.onClickDecrement} styles={styles.decrement}>-</Button>
          <Button onClick={this.onClickReset} styles={styles.reset}>reset</Button>
          <Button onClick={this.onClickIncrement} styles={styles.increment}>+</Button>
       
      </div> 
     
    </div>
  );
}
}

export default App;
