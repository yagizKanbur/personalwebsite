import {Link} from "react-router-dom";

const Resume = () =>{
    return(
        <div className={'Icons-Wrapper'}>
            <Link
                class={'social-icon-link cv'}
                to={{pathname: 'https://twitter.com/yagizkanbur'}}
                target={'blank'}
                aria-label={'Resume'}>

                <i className={'fas fa-download'} />

            </Link>
        </div>
    );
}

export default Resume;