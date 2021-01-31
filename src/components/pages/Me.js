import './Me.css';
import Icons from "../Icons/Icons";

const Me = () => {
    return(
        <div className={'me'}>
            <ul className={'text-icons'}>
                <h1 className={'text-center'}> Hi, I'm Yagiz!</h1>
                <Icons/>
            </ul>
        </div>

    );
}

export default Me;