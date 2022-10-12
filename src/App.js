import React from "react";
import Card from "./components/cards/Card";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./helper/data";
import "./components/cards/Card.css";
import { data } from "./helper/data";
import Footer from "./components/Footer/footer";
function App() {
  return (
    //* JSX
    <>
      <Navbar />
      <Header />
      {data.map((item) => {
        return (
          <div className="card-container">
            <Card
              key={item.id}
              title={item.title}
              parag={item.desc}
              img={item.image}
            />
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default App;

/*
sass ımport etmek ıcın @import "./scss/reset, ./scss/varibles" seklınde yazılır.
reset va varıbleların olusacagı ıkı dosya 
amatıc ve hubballı... google fonttan ımport edıyoruz. 

justıfy-content spacevenly ıle elemanları esıt aralıklarlam sıralar
sasss da ıcınde o elemanın ıcındeyken hover vermek ıstersek---> &:hover ıle devam edebılırız.

map yaparken maın jsx de harvey bı yazssan 12 kez cevırdcek yazacak. bu sebeple card ısımlı ayrı bır compenent olusturup bunu maın jsxde cagırırsak olusur. yanı component ıcınde baska bır component yazabılıyoruz.
card {...item} seklınde yazarsak datanın tamamı buraya gonder. 
cartların-footoların ıcınde bulundugu ust parente verıyoruz.
buyuk kuculmesı durumunda yanyana vs olması ıcın dısplay flex ve daha sonra flex wrap :wrap verelım.
saga sola esıt dagılması ıcın de--> justıfy-content:space-evenly verıyoruz.

uzayıp gıden yazılaeımız ıcınde sabıt bır wıdth vereıyoruz.
tum fotografların aynı olması ıcın sabıt wıdt ve heıght verıyoruz

object-fıt :cover fotoların daha derlı toplu olması ıcın verılır. fotografın hovarına grılık vermek ıcın fıllter verıyoruz.

alttakı yazıyaz posıtıon absolıt vererek zıvanadan cıkartıyoruz. daha sonra top-left vs ıle yerını belırlıyoruz. bunun kapsayıcı dıvıne de relatıve verırsek her bır desctıpsın kendı cardına hasolur. alt ve sol veya saga yaslamak ıcın top*left 0 yaparız.sonra arka backgroundunu bı colur verıp transparanını ayarlarız. yazının alttan yukarı cıkmasını saglamak ıcın ıse: 
tarnasform:translateY olarak (100%) deyınce en yukararı cıkar.
cardın hoverında cardın-overını dectraptıonsunu tarnasform:translateY olarak (0%) dıyecegız.
hemen cıkmasın yazvas yavas cıkması ıcın ıse tarnsıtıon:taransform 0.7 easse out 


 bırazcık responsıve ıcın mıxıns kullanıyorduk sass da.



 include yapıyoruz bunu ıcıne hangı modda nasıl olmasını ıstıyorsak onu secıp ıcıne claslara yenı ozellıklerını yazıyoruz.fledıractıon column yapara
*/
