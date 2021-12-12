import './App.css';
import logo from './logo.png';
import banner from './banner.png'
import News from './Components/News';
import MainLink from './Components/MainLink';
import Search from './Components/Search';
import Currencies from './Components/Currencies';
import Banner from './Components/Banner';
import Weather from './Components/Weather';
import Places from './Components/Places';
import Maps from './Components/Maps';
import TvProgram from './Components/TvProgram';
import Videos from './Components/Videos';

const news = [{
    image: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
    title: "Спикер Думы Володин: решения по QR-кодам зависят от ответов на общественные вопросы",
    link: "https://yandex.ru/news/story/Spiker_Dumy_Volodin_resheniya_poQR-kodam_zavisyat_ototvetov_naobshhestvennye_voprosy--184081e0a1f182a6778bbe6e84dc8d0f"
  },
  {
    image: "https://avatars.mds.yandex.net/get-ynews-logo/28627/254083361-1516267195536-square/logo-square",
    title: "Кабмин выделил ещё почти 14 млрд рублей для выплат на детей от 8 до 17 лет",
    link: "https://yandex.ru/news/story/Kabmin_vydelil_eshhyo_pochti_14_mlrd_rublej_dlyavyplat_nadetej_ot8_do17_let--f8d686fd100e2ae457da743adfd38b78"
  },
  {
    image: "https://avatars.mds.yandex.net/get-ynews-logo/135513/2220-1478692942720-square/logo-square",
    title: "Подростки-участники исследования вакцины «Спутник М» получат по 15 тыс. рублей",
    link: "https://yandex.ru/news/story/Podrostki-uchastniki_issledovaniya_vakciny_Sputnik_M_poluchat_po15_tys._rublej--2712b703583933348c52df1216a9ef6b"
  },
  {
    image: "https://avatars.mds.yandex.net/get-ynews-logo/26056/1071-1582024400668-square/logo-square",
    title: "Матч «Тоттенхэм» — «Ренн» не состоится, УЕФА откроет дисциплинарное дело", 
    link: "https://yandex.ru/sport/story/Match_Tottenkhehm_Renn_ne_sostoitsya_UEFA_otkroet_disciplinarnoe_delo--b7f0cb98987cdae5f689fbc8e8c8546f"
  },
  {
    image: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
    title: "Спикер Думы Володин: решения по QR-кодам зависят от ответов на общественные вопросы",
    link: "https://yandex.ru/news/story/Spiker_Dumy_Volodin_resheniya_poQR-kodam_zavisyat_ototvetov_naobshhestvennye_voprosy--184081e0a1f182a6778bbe6e84dc8d0f"
  },
]  
 
const places = [{
    category: "Недвижимость",
    title: "о сталинках",
    link: "#"
  },
  {
    category: "Маркет",
    title: "люстры и светильники",
    link: "#"
  },
  {
    category: "Авто.ру",
    title: "привод 4х4 до 500 000",
    link: "#"
  }]            

const maps = [{  
  title: "Расписания",
  link: "#"
}]

const programs = [{
  time: "02:00",
  title: "ТНТ.Best",
  subtitle: "ТНТ International",
  link: "#"
},
{
  time: "02:15",
  title: "Джинглики",
  subtitle: "Карусель INT",
  link: "#"
},
{
  time: "02:25",
  title: "Наедине со всеми",
  subtitle: "Первый",
  link: "#"
}]    

const videos = [{
  title: "Управление как искусство",
  subtitle: "Успех",
  link: "#"
},
{
  title: "Ночь. Мир в это время",
  subtitle: "earthTV",
  link: "#"
},
{
  title: "Андрей",
  subtitle: "Совершенно секретно",
  link: "#"
}]   

const main_link = {
  image: 'images/errors.png',
  title: 'Работа над ошибками',
  link: '#',
  description: 'Смотрите на Яндексе и запоминайте' 
}

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className='column column-2-merge'>
         <News news={news} />      
        </div>
        <div className='column column-1'>
          <MainLink {...main_link} />
        </div>
      </div>
      <div className='App-container'>  
        <Currencies />
      </div>
      <div className='App-container'>
        <div className='App-logo'>
          <img src={logo} alt='Яндекс' />
        </div>
        <Search />        
      </div>
      <div className='App-container'>
        <p>Найдётся всё. Например, фаза луны сегодня</p>
      </div>
      <div className='App-container'>
        <Banner image={banner} />
      </div>
      <div className='App-container'>
        <div className='column column-1'>
          <Weather icon='ovc' current_value='−6°' top_value="вечером −4°" bottom_value="ночью −5°" />
          <Places items={places} />
        </div>
        <div className='column column-1'>
          <Maps items={maps} />
          <TvProgram items={programs} />
        </div>
        <div className='column column-1'>
          <Videos items={videos} />
        </div>
      </div>
    </div>
  );
}

export default App;
