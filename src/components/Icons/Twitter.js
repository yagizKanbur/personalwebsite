import {Link} from "react-router-dom";

const Twitter = () =>{
    return(
        <div className={'Icons-Wrapper'}>
            <Link
                class={'social-icon-link twitter'}
                to={{pathname: 'https://twitter.com/yagizkanbur'}}
                target={'blank'}
                aria-label={'Twitter'}>
                <i className={'fab fa-twitter'} />
            </Link>
        </div>
    );
}

export default Twitter;