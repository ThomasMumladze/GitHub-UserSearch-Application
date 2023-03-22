import "./errorMessage.scss";
interface Props {
    error: string;
}
const ErrorMessage = (props: Props) => {
    return (
        <div className={"errorMessage"}>
            <p>{props.error}</p>
        </div>
    );
};

export default ErrorMessage;
