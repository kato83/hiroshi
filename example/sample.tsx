import {createElement, Fragment, createRef} from "../src";

const names = ["Sato", "Kato", "Suzuki", "Joseph"];

const Card = (props) => {
  const callback = node => console.log(node);
  return <span dataSample={props.sample} class={'sample'}><span ref={callback}>{props.children}</span></span>;
};

export const dom = <div>
  Names:
  {names.map((name) => (<>
      <Card sample={'aaaa'}>{name}<div></div></Card>
    </>
  ))}
</div>;