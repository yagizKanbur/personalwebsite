import {Link} from "react-router-dom";

const Github = () => {
    return(
      <div className={'Icons-Wrapper'}>
          <Link
              class={'social-icon-link github'}
              to={{pathname: 'https://github.com/yagizKanbur'}}
              target={'blank'}
              aria-label={'GitHub'}>

              <i className={'fab fa-github'} />
          </Link>
      </div>
    );
}

export default Github;