import './title.scss'
interface Props {
    text: string | null;
}

const Title = (props: Props) => {
    return (  
        <h1 className={'Title'}>
            {props.text}
        </h1>
    );
}

export default Title;