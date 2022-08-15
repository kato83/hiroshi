import {h, Fragment, render} from "../../../dist/esm/hiroshi";
import './App.css'

function App() {
  const json = fetch('//jsonplaceholder.typicode.com/photos').then(res => res.json());
  const ref = (node: any) => json.then(res => {
    render(<Users users={res}/> as h.JSX.Element, node);
  });

  const Users = ({users}: { users: Array<any> }) => {
    return <>{users.map((user: any) => <Card name={user.title}>{user.title}</Card>)}</>
  }

  return <div className="App" ref={ref}/>
}

const style = {
  marginBottom: "0.5rem",
  border: "solid 1px #aaa",
  padding: ".5rem",
  flexBasis: "12rem"
}

function Card(props: any) {
  return <div className="card" style={style}>
    {props.name}: {props.children}
  </div>
}

export default App