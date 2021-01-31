import {Link} from "react-router-dom";

const LinkedIn = () =>{
    return(
        <div className={'Icons-Wrapper'}>
            <Link
                class={'social-icon-link linkedin'}
                to={{pathname: 'https://www.linkedin.com/in/yagizkanbur/'}}
                target={'blank'}
                aria-label={'LinkedIn'}>

                <i className={'fab fa-linkedin'} />

            </Link>
        </div>
    );
}

export default LinkedIn;