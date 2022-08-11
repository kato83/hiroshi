import {createElement, Fragment, createRef} from "../src";

const names = ["Sato", "Kato", "Suzuki", "Joseph"];

const Card = (props) => {
  return <span dataSample={props.sample}><span>{props.children}</span></span>;
}

export const dom = <div>
  Names:
  {names.map((name) => (<>
      <Card sample={'aaaa'}>{name}<div></div></Card>
    </>
  ))}
</div>;