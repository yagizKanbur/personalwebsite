import {Link} from "react-router-dom";

const Mail = () =>{
    return(
        <div className={'Icons-Wrapper'}>
            <Link
                class={'social-icon-link mail'}
                to={{pathname: 'mailto:kanburyagizhan@gmail.com'}}
                target={'blank'}
                aria-label={'Gmail'}>

                <i className={'far fa-envelope'} />

            </Link>
        </div>
    );
}

export default Mail;