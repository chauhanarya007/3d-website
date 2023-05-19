import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import { Logo, IconLaptop, IconTwitter, IconYoutube} from './import'

export default function App() {
  return (
    <Wrapper>
    <Spline className='spline' scene="https://prod.spline.design/PQouAC2yqYyzND39/scene.splinecode" />
    <Content>
      <Menu>
        <li><img src={Logo} alt='logo'/></li>
        <li><a href='/'> Home </a></li>
        <li><a href='/'> Download </a></li>
        <li><a href='/'> App </a></li>
        <li><a href='/'> Login </a></li>
        <li><button>Get Started</button></li>
      </Menu>
      <h1>Collabrate with Me!</h1>
      <p>I am a passionate software developer seeking valuable experience to further enhance my skills and contribute to innovative projects.</p>
      <button><img src={IconLaptop} alt='laptop' /> Download for Mac </button>
    </Content>
    <Social className='social'>
      <div className='line' />
      <a href='/'><img src={IconTwitter} alt='twitter' /></a>
      <a href='/'><img src={IconYoutube} alt='youtube' /></a>  
    </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
font-size: 16px;
color: white;
margin: 0;
position: relative;
width: 100%;
height: 100%;
overflow-x: hidden;

.spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    transform: translateX(200px);

    @media (max-width: 1260px) {
    transform: scale(0.8) translateX(100px);
  }
  @media (max-width: 1024px) {
    transform: scale(0.8) translateX(00px);
    transform-origin: top;
  }
  @media (max-width: 800px) {
    tranform: scale(0.7) translateX(600px);
  }
  @media (max-width: 600px) {
    tranform: scale(0.5) translateX(-100px);
    right: auto;
    left: 60%;
    margin-left: -400px;
  }
  @media (max-width: 375px) {
    tranform: scale(0.1) translateX(-50px);
  }
}
`;
const Content = styled.div`
position: absolute;
top: 30px;
width: 100%;

display: flex;
flex-direction: column;
gap: 80px;
pointer-events: none;
@media (max-width: 1024px) {
    gap: 40px;
  }
`;
const Menu = styled.ul`
 display: flex;
 gap: 30px;
 align-items: center;
 margin: 0 30px 0 140px;
 padding: 0;
 pointer-events: all;

 @media (max-width: 1024px) {
      margin: 0 30px;
    }
    @media (max-width: 800px) {
      justify-content: space-between;
      li:nth-child(2),
      li:nth-child(3),
      li:nth-child(4),
      li:nth-child(5) {
        display: none;
      }
    }
`;
const Social = styled.div`
@media (max-width: 1024px) {
      display: none;
    }
`;