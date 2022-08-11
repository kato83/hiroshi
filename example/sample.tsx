import {createElement, Fragment, createRef} from "../src";

const names = ["Sato", "Kato", "Suzuki", "Joseph"];

const Card = (props) => {
  const ref = createRef<HTMLDivElement>(null);
  setTimeout(() => {
    ref.current.querySelector('span').textContent = '1秒経過';
  }, 1000);
  const dom = <div dataSample={props.sample} ref={ref}>{props.children}</div>;
  console.log(ref);
  return dom;
}

export const dom = <div>
  Names:
  {names.map((name) => (<>
      <Card sample={'aaaa'}><span>{name}</span></Card>
    </>
  ))}
</div>;