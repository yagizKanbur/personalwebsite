import {Link} from "react-router-dom";

const StackOverflow = () =>{
    return(
        <div className={'Icons-Wrapper'}>
            <Link
                class={'social-icon-link stack'}
                to={{pathname: 'https://stackoverflow.com/users/6091232/yagizkanbur'}}
                target={'blank'}
                aria-label={'StackOverflow'}>

                <i className={'fab fa-stack-overflow'} />

            </Link>
        </div>
    );
}

export default StackOverflow;