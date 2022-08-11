import {createElement, Fragment} from "../src";

const names = ["Sato", "Kato", "Suzuki", "Joseph"];

const Card = (props) => {
    return <div dataSample={props.sample}>{props.children}</div>
}

export const dom = <div>
    Names:
    {names.map((name) => (<>
            <Card sample={'aaaa'}><span>{name}</span></Card>
        </>
    ))}
</div>;