import Twitter from "./Twitter";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import StackOverflow from "./StackOverflow";
import Mail from "./Mail";
import Resume from "./Resume";
import './Icons.css';

const Icons = () =>{
    return(
        <div className={'social-media-container'}>
            <section className={'social-media'}>
                <div className={'social-media-wrap'}>
                    <div className={'social-icons'}>
                        <Twitter/>
                        <Instagram/>
                        <LinkedIn/>
                        <Github/>
                        <StackOverflow/>
                        <Mail/>
                        <Resume/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Icons;