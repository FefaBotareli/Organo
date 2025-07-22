import './Banner.css';

function Banner() {
  //JSX = como  o React trabalha com a parte visual, parece HTML mas não é, o React vai fazer o append no DOM
    return (
        //não utilizar o class pois é uma palavra reservada do Javascript
        <header className="banner">
        <img src="/imgs/banner.png" alt="O banner principal da página Organo"/>
        </header>
    );
}

export default Banner