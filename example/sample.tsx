import {render, h, Fragment} from "../src/hiroshi";

export function App() {
  const ref = (node) => fetch('//jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(res => {
      render(<Users users={res}/>, node);
    });

  const Users = ({users}) => <>{users.map(user => <Card name={user.title}>{user.title}</Card>)}</>

  return <div className="App" ref={ref}/>
}

const style = {
  marginBottom: "0.5rem",
  border: "solid 1px #aaa",
  padding: ".5rem",
  flexBasis: "12rem"
};

export function Card(props: any) {
  return <div className="card" style={style}>
    {props.name}: {props.children}
  </div>
}

export const display = () => render(<App/>, document.body);