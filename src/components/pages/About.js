import AboutText from "./AboutText";

const About = () => {
    return(
       <div className={'container'}>
           <h1 className={'page-header text-center'}>About Me</h1>
           <p className={'jumbotron'}>{AboutText}</p>
       </div>
    );
}

export default About;