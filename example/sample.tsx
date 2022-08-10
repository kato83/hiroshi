import {createElement} from "../src";

const names = ["Sato", "Kato", "Suzuki", "Joseph"];

export const dom = (
    <div className="sample">
        <span>This is sample.</span>
        <div>
            Names:
            {names.map((name) => (
                <span>{names.map(name => <span>{name}</span>)}</span>
            ))}
        </div>
    </div>
);