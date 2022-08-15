import {createElement, Fragment, createRef, render} from "../src";

const names = ["Sato", "Kato", "Suzuki", "Joseph"];

const Card = (props) => {
  const callback = node => console.log(node);
  return <span dataSample={props.sample} class={'sample'}><span ref={callback}>{props.children}</span></span>;
};


export const Hoge = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    {/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
    <path fill={'#000000'} d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
  </svg>;

export const result = () => {
  render(Hoge(), document.body);
};

export function App() {
  const ref = (node) => fetch('//jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(res => {
      render(users(res), node);
    });

  const users = (users) => {
    return <>{users.map(user => <Card2 name={user.title}>{user.title}</Card2>)}</>
  }

  return (
    <div className="App" ref={ref}>
    </div>
  )
}

const style = {
  marginBottom: "0.5rem",
  border: "solid 1px #aaa",
  padding: ".5rem",
  flexBasis: "12rem"
}

export function Card2(props: any) {
  return <div className="card" style={style}>
    {props.name}: {props.children}
  </div>
}

export const result2 = () => {
  render(App(), document.body);
};