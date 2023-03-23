import './audience.scss'
interface Props {
    audienceData: any;
}
const Audience = (props: Props) => {
    const { audienceData } = props

    return (
        <div className="audienceWrapper">
            <div className='content'>
                <div>
                    <p>Repos</p>
                    <h3>{audienceData.public_repos}</h3>
                </div>
                <div>
                    <p>Follower</p>
                    <h3>{audienceData.followers}</h3>
                </div>
                <div>
                    <p>Following</p>
                    <h3>{audienceData.following}</h3>
                </div>
            </div>
        </div>
    );
}

export default Audience;