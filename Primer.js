
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Регистрация на GitHub, создание и копирование репозитория</title>
  <style>
     p.dline {
    line-height: 2;
   } 
   p.dline1 {
    margin-bottom: 0em;
    line-height: 2;
   } 
   ol {
    line-height: 2; 
   }

  ul {
    line-height: 2; 
   }
  p {
    margin-bottom: -0,5em;
   }
  
  code {
    margin-bottom: -0.5em;
  }
     [data-tooltip] {
    position: relative; /* Относительное позиционирование */ 

   }
   [data-tooltip]::after {
    content: attr(data-tooltip); /* Выводим текст */
    position: absolute; /* Абсолютное позиционирование */
    width: 400px; /* Ширина подсказки */
    left: 0; top: 0; /* Положение подсказки */
    z-index: 1; /* Отображаем подсказку поверх других элементов */
    background: #ffffff; /* Цвет фона */
    color: rgb(0, 0, 0); /* Цвет текста */
    padding: 0.5em; /* Поля вокруг текста */
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3); /* Параметры тени */
    pointer-events: none; /* Подсказка */
    opacity: 0; /* Подсказка невидима */
    transition: 0,5s; /* Время появления подсказки */
   } 
   [data-tooltip]:hover::after {
    opacity: 1; /* Показываем подсказку */
    top: 2em; /* Положение подсказки */
   }
   .outline {
    border: 1px solid red;
    padding: 0 10px;
  }
  .fig {
    text-align: center; /* Выравнивание по центру */ 
   }
   .round {
    border-radius: 10px; /* Радиус скругления */
    border: 3px solid black; /* Параметры рамки */
    box-shadow: 0 0 0px #666; /* Параметры тени */
   }
}
   .round1 {
    border-radius: 10px; /* Радиус скругления */
    border: 3px solid rgb(255, 253, 253); /* Параметры рамки */
    box-shadow: 0 0 0px #666; /* Параметры тени */
   }
   .margin-bottom-20 {
     display:block; margin-left:20px}
     .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}


  </style>
  
  <link rel="stylesheet" href="./pages/index.css">
  <link rel="icon" type="image" href="./images/favicon-1.png">
  <link rel="stylesheet" href="./pages/index.css">
  <link href='./highlight/styles/atom-one-light.css' rel='stylesheet' type='text/css'>
</head>
<body>
  <header class="header">
    <div class="header__nav">
      <div class="header__wrapper">
        <div class="header__logo">
          <img  class="header__logo-item" src="./images/yandexPraktikum_black.png" alt="Логотип">
        </div>
      </div>
    </div>
  </header>
  <div class="root">
    <section class="intro">
      <h1 class="intro__title">Регистрация на GitHub, создание и копирование репозитория</h1>
    </section>
    <section class="content">
      <div class="block">
        <div class="block__text">
          <p class="dline">Вы изучили основы локального использования Git. Но чтобы поделиться <span data-tooltip ="от англ. repository, «хранилище». Место, где хранятся и поддерживаются данные проекта. Чаще всего они хранятся в виде файлов, доступных для дальнейшего распространения.">
            <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">репозиторием</span>, нужно завести его удалённую версию. Есть несколько платформ, которые позволяют это делать. 
            <p class="dline1"> Самая популярная — <span data-tooltip ="узловая станция — англ.">
                <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">GitHub</span>. Ей мы и будем пользоваться.</p>
                <p class="dline">GitHub — сайт для совместной разработки через <span data-tooltip ="Git — «система контроля версий»">
              <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Git</span>. Это крупнейший узел потоков данных под версионным контролем. По сути GitHub — социальная сеть для разработчиков. </p>
              <p class="dline1">Здесь можно завести аккаунт и хранить свой код, совместно работать над любыми <span data-tooltip ="Открытое программное обеспечение — проекты с открытым исходным кодом.">
              <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">open source</span> проектами. На сервисе GitHub Pages вы можете бесплатно разместить свой сайт.</p>
              <p class="dline">Яндекс, Twitter, Google, Apple, Valve держат на GitHub свои официальные репозитории. Создайте свой и вы.</p>
              <h3 class="dline">Регистрация на GitHub</h3>

            <p class="fig"><img src="images/img1.jpg"  width="620" height="350" alt="Фотография" class="round"></p>
            <p class="dline">Тут всё просто: ввóдите почту, логин и пароль и попадаете в интерфейс GitHub. Сайт на английском, русскоязычной версии нет.</p>
            <p class="dline">Выбирайте бесплатный аккаунт. Вам предложат пройти небольшой опрос. Его можно пропустить. Для этого докрутите до конца страницы и нажмите <b>Complete setup</b>. </p>
            <p class="dline">На указанную почту вам придёт письмо со ссылкой для активации аккаунта. Когда аккаунт будет активирован, вы попадёте на форму создания первого репозитория.</p>

            <h3 class="dline">Создание репозитория на GitHub</h3>
            <p class="fig"><img src="images/img2.png"  width="620" height="500" alt="Фотография" class="round1"></p>
            <p class="dline"><span data-tooltip ="владелец — англ.">
                <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Owner</span> — ваше имя на GitHub.</p>
                <p class="dline"><span data-tooltip ="имя репозитория — англ.">
                    <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Repository name</span> — название репозитория.</p>
                    <p class="dline"><span data-tooltip ="описание — англ.">
                        <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Description</span> — описание вашего проекта. Это поле необязательно.</p>
                        <p class="dline"><span data-tooltip ="публичный — англ.">
                            <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Public</span> — открытый репозиторий. Любой пользователь GitHub может его увидеть.</p>
                            <p class="dline"><span data-tooltip ="приватный — англ.">
                                <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Private</span> — закрытый репозиторий. Его вы сможете показывать только избранным. Например, код-ревьюерам Практикума. Для итогового проекта нужен именно этот вариант.</p>
            
            <h3 class="dline">README</h3>
            <p class="dline">К публичным проектам на GitHub принято добавлять инструкцию. Это нужно и для того, чтобы другие разработчики поняли, как пользоваться вашим проектом, и для трудоустройства. Инструкция хранится в README — текстовом файле в формате <span data-tooltip ="Markdown — простой язык разметки для написания читаемого текста, который удобно править. В файле формата .md можно выделять заголовки, абзацы и ссылки, но не тегами, как в HTML, а специальными символами."> <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">.md</span>. Составить такой файл просто благодаря понятной <a href="https://gist.github.com/Jekins/2bf2d0638163f1294637" target="_blank">документации</a> на русском языке.</p>
            <h3 class="dline">Fork</h3>
            <p class="dline">В GitHub вы можете не только создать собственный репозиторий, но и скопировать чужой — форкнуть. Для этого зайдите на страницу проекта, который хотите скопировать, и нажмите <span data-tooltip ="От англ. fork, «ответвление». Кнопка на GitHub, копирующая чужой репозиторий в ваш аккаунт.">
                <span style="border:1px solid rgb(161, 160, 160); border-radius:5px; width: 175px; text-align:center;  margin:2px; padding:4px;">Fork</span>. Копирование произойдёт на сервере GitHub. В списке ваших репозиториев появится новый. Чтобы работать с файлами репозитория, загрузите его на свой компьютер — клонируйте.</p>
                <h3 class="dline">Клонирование репозитория</h3>
                <p class="dline">Репозиторий клонируется командой <span class="block__paragraph_text_code">git clone</span>:
            <pre><code class="bash language-bash"><nobr>  
              <p>git clone #тут укажите url проекта в формате https://github.com/...</p></nobr>  
              </pre></code>   

          <p class="dline">Хранилище скопируется на ваш компьютер под именем “origin”.</p>
             

                
              <p class="dline">В следующем уроке вы узнаете, как связать локальный репозиторий с удалённым и отправлять изменения в проекте на сервер.</p>
              
                    </div>
    </section>
  </div>
  <script src='./highlight/highlight.pack.js' type='text/javascript'></script>
  <script>hljs.initHighlightingOnLoad();</script>
  <script src='./script.js'></script>
</body>
</html>
