import {Link} from "react-router-dom";

const Instagram = () =>{
    return(
      <div className={'Icons-Wrapper'}>
          <Link
              class={'social-icon-link instagram'}
              to={{pathname: 'https://www.instagram.com/yagizkanbur/'}}
              target={'blank'}
              aria-label={'Instagram'}>
              <i className={'fab fa-instagram'} />
          </Link>
      </div>
    );
}

export default Instagram;