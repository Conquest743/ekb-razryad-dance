import { baseUrl, Reveal, YandexMap, YandexReviews } from "./blocks";

const mapHref = "https://yandex.com/maps/org/razryad/19309053169/";
const phone = "+7 (922) 221-52-74";
const coords = "60.521944,56.788051";

export default function App() {
  return <div className="site site-razryad" id="top">
    <div className="concept-note"><span>Демо-страница</span><span>Неофициальный концепт · не связан с бизнесом</span></div>
    <header className="masthead"><a href="#top" className="wordmark">РАЗРЯД</a><nav aria-label="Навигация"><a href="#directions">Направления</a><a href="#reviews">Отзывы родителей</a><a href="#location">Где заниматься</a></nav><a className="call-button" href="tel:+79222215274">Позвонить</a></header>
    <main>
      <section className="hero"><div className="hero-copy"><h1>Разряд</h1><p className="lead">Современный танец, хореография и импровизация для детей.</p><a className="primary-action" href="tel:+79222215274">Уточнить занятия по телефону</a><p className="category-note">Категория: Студия танца · Академический</p><p className="hero-detail">Родители отмечают длительные занятия и внимание руководителей.</p></div><figure className="hero-image"><img src={baseUrl + "hero.webp"} alt="Сгенерированный концепт входа студии в современном районном здании; не фактическая фотография" fetchPriority="high"/><figcaption>Архитектура взята за ориентир по фото точки</figcaption></figure></section>
      <Reveal className="reveal-signature"><section className="direction-words" id="directions"><div><span>Современный</span><span>Хореография</span><span>Contemporary</span><span>Импровизация</span></div></section></Reveal>
      <Reveal><section className="schedule-block"><div><h2>Выберите вечер для первого звонка.</h2><p>По странице НаТанцы: занятия по понедельникам, средам и пятницам с 18:30 до 21:30. Это время занятий, не режим администратора.</p><a href="https://natancy.ru/ekaterinburg/razryad-8471/" target="_blank" rel="noreferrer">Источник расписания</a></div><div className="days"><p>Пн <strong>18:30—21:30</strong></p><p>Ср <strong>18:30—21:30</strong></p><p>Пт <strong>18:30—21:30</strong></p></div></section></Reveal>
      <Reveal><section className="reviews" id="reviews"><h2>Родительские впечатления — без пересказа вместо источника.</h2><YandexReviews placeId="19309053169" title="Разряд" mapHref={mapHref}/></section></Reveal>
      <section className="location" id="location"><div className="location-copy"><h2>Точный адрес для семьи.</h2><address>ул. Павла Шаманова, 18</address><dl><div><dt>Категория</dt><dd>Школа танцев</dd></div><div><dt>Телефон</dt><dd><a href="tel:+79222215274">{phone}</a></dd></div><div><dt>Карточка</dt><dd>Яндекс Карты показывают закрытие до понедельника; расписание занятий выше.</dd></div></dl></div><YandexMap coords={coords} title="Студия танца Разряд, ул. Павла Шаманова, 18" mapHref={mapHref} zoom={16}/></section>
      <section className="closing"><p>Позвоните и уточните возраст и свободную группу.</p><a className="primary-action" href="tel:+79222215274">{phone}</a></section>
    </main>
    <footer><span>Публичные сведения собраны 10.10.2026</span><span>Макет независимый; изображение — визуальный концепт.</span></footer>
  </div>;
}