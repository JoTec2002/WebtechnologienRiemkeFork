export default function Hallo(props) {
    if ((props.vorname == "Horst")) {
        return (
            <div>
                <h1>Unsere Schweizer Freunde</h1>
                Gruezi, {props.vorname}
            </div>
        );
    } else {
        return (
            <div className="text-3xl rounded-md shadow-lg text-red-500 bg-zinc-300 m-2 p-2 w-60">
                Hallo {props.vorname} {props.nachname} !
            </div>
        );
    }
}