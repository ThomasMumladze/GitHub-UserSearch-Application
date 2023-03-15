import "./subTitle.scss";
interface Props {
    text: string;
}
const SubTitle = (props: Props) => {
    return <p className="subTitle">{props.text}</p>;
};

export default SubTitle;
