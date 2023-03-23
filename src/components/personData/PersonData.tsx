import Audience from '../audience/Audience';
import PersonNetwork from '../personNetwork/PersonNetwork';
import Loading from '../loading/Loading';
import './personData.scss'
interface Props {
    personData: any,
    loading: boolean | null
}
const PersonData = (props: Props) => {
    const { personData, loading } = props


    return (
        <>
            {loading ? <Loading />
                :
                <div className='dataWrapper'>
                    <div className="wrapper">
                        <div className="imageWrapper">
                            <img src={personData.avatar_url} alt="" />
                        </div>
                        <div className='personDataWrapper'>
                            <div className='leftWrapper'>
                                <div className={personData.name === null ? 'notAvailable' : 'location'}>
                                    {personData.name === null ? <h1 className='nameNotSpecified'>name not specified</h1> : <h1 className='personName'>{personData.name}</h1>}
                                </div>
                                <p className='personNickName'>@{personData.login}</p>
                                {personData.bio == null ? <p className='personBio'>This profile has no bio</p> : <p className='personBio' >{personData.bio}</p>}
                            </div>
                            <div className='rightWrapper'>
                                <h2 className='createDate'>{personData.created_at}</h2>
                            </div>
                        </div>
                    </div>
                    <Audience audienceData={personData} />
                    <PersonNetwork networkData={personData} />
                </div>
            }
        </>
    );
}

export default PersonData;