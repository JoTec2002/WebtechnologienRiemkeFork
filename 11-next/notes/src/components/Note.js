export default function Note(props) {
    return (
        <div className="h-[300px] w-[300px] p-5 ml-5 mb-5 bg-amber-300 shadow-lg">
            {props.text}
        </div>
    );
}