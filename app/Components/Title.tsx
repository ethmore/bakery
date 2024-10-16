export function Title(props: {
    text: string;
    underline?: boolean;
    class?: string;
}) {
    return (
        <div className={`w-fit m-auto ${props.class}`}>
            <h2 className="text-5xl text-center">{props.text}</h2>
            {props.underline ? <Underline /> : null}
        </div>
    );
}

export default function SubTitle(props: {
    text: string;
    underline?: boolean;
    class?: string;
}) {
    return (
        <div className={`w-fit ${props.class}`}>
            <h2 className="text-2xl text-center">{props.text}</h2>
            {props.underline ? <div className="w-full h-[3px] bg-primary mt-1"></div> : null}
        </div>
    );
}

export function Underline() {
    return <div className="w-full h-[5px] bg-primary mt-2"></div>;
}
