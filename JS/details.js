function details(obj) {
  let ident = obj.id;
  localStorage.setItem('id', ident);
  let id = ident.replace(/\//g, '%2F');
  const url = `https://content.guardianapis.com/search?show-fields=all&page-size=10&q=${id}&api-key=9bb46280-5198-4adb-b3f6-8bf15e0a3ef7`;
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let articles = data.response.results;

      let item = articles.find((x) => x.id === ident);
      console.log(ident);
      console.log(item.id);
      if (ident == item.id) {
        console.log(ident);
        console.log(item.id);
        return window.open('../Pages/details.html', '_self');
      } else {
        console.log(ident);
        console.log(articles.id);
        console.log('error');
      }
    });
}
