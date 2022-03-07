import './index.css';

export function HelloWorld(props){
    props.onLoad();
    return(
      <div>Hello {props.name}</div>
    )
  }

function DefaultHelloWorld(){
    return(
        <div>Default Hello World</div>
    )
}  

export const Card = (props) => {
  return(
    <div className='card'>
      {props.message}
    </div>
  )
}

export default DefaultHelloWorld;


  