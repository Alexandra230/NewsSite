const spinner = document.getElementById('spinner');

spinner.removeAttribute('hidden');

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const parent = document.getElementById('main_news');
const url =
  'https://content.guardianapis.com/sport?&show-tags=all&page-size=1&show-fields=all&order-by=newest&api-key=9bb46280-5198-4adb-b3f6-8bf15e0a3ef7';

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let articles = data.response.results;
    return articles.map(function (article) {
      spinner.setAttribute('hidden', '');
      let div = createNode('div');
      div.setAttribute('class', 'card1');
      let img = createNode('img');
      let p = createNode('p');
      let span = createNode('span');
      let button = createNode('button');
      img.src = article.fields.thumbnail;
      img.setAttribute('class', 'card_img1');
      p.innerHTML = `${article.webTitle}`;
      p.setAttribute('class', 'card_title1');
      let text = createNode('p');
      text.innerHTML = `${article.fields.trailText}`;
      text.setAttribute('class', 'card_text1');
      button.innerHTML = 'Read more';
      button.setAttribute('class', 'card_button1');
      let id = article.id;
      button.setAttribute('id', `${id}`);
      button.setAttribute('onclick', 'details(this)');
      let dString = `${article.webPublicationDate}`;
      localStorage.setItem('date', dString);
      span.setAttribute('class', 'card_date1');
      let d1 = new Date(dString);
      let d2 = new Date();
      let dt = DateDiff.inDays(d1, d2);

      if (dt == 0) {
        span.innerHTML = 'Was published today';
      } else if (dt == 1) {
        span.innerHTML = `Was published ${dt} day ago`;
      } else {
        span.innerHTML = `Was published ${dt} days ago`;
      }

      append(div, img);
      append(div, p);
      append(div, text);
      append(div, span);
      append(div, button);
      append(parent, div);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

let DateDiff = {
  inDays: function (d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000));
  },
};

let date = localStorage.getItem('date');
let d = new Date(date);
d.setSeconds(d.getSeconds() - 1);
let dt = d.toISOString();
const parent1 = document.getElementById('news');
const url1 = `https://content.guardianapis.com/sport?&show-tags=all&page-size=6&to-date=${dt}&show-fields=all&order-by=newest&api-key=9bb46280-5198-4adb-b3f6-8bf15e0a3ef7`;

fetch(url1)
  .then((resp) => resp.json())
  .then(function (data) {
    let articles = data.response.results;
    return articles.map(function (article) {
      let div = createNode('div');
      div.setAttribute('class', 'card');
      let img = createNode('img');
      let p = createNode('p');
      let span = createNode('span');
      let button = createNode('button');
      img.src = article.fields.thumbnail;
      img.setAttribute('class', 'card_img');
      p.innerHTML = `${article.webTitle}`;
      p.setAttribute('class', 'card_title');
      let text = createNode('p');
      text.innerHTML = `${article.fields.trailText}`;
      text.setAttribute('class', 'card_text');
      button.innerHTML = 'Read more';
      button.setAttribute('class', 'card_button');
      let id = article.id;
      button.setAttribute('id', `${id}`);
      button.setAttribute('onclick', 'details(this)');
      let dString = `${article.webPublicationDate}`;
      span.setAttribute('class', 'card_date');
      let d1 = new Date(dString);
      let d2 = new Date();
      let dt = DateDiff.inDays(d1, d2);

      if (dt == 0) {
        span.innerHTML = 'Was published today';
      } else if (dt == 1) {
        span.innerHTML = `Was published ${dt} day ago`;
      } else {
        span.innerHTML = `Was published ${dt} days ago`;
      }

      append(div, img);
      append(div, p);
      append(div, text);
      append(div, span);
      append(div, button);
      append(parent1, div);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
