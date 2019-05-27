const cheerio = require("cheerio");
const axios = require("axios");

const scrape = async () => {
  const response = await axios.get("https://salsa.faurax.fr/festival.php");

  const $ = cheerio.load(response.data);
  let data = {};
  let titleFestival_tab = [];
  let mois_tab = [];
  let date_tab = [];
  let localisation_tab = [];
  let lieu_tab = [];
  let liens_tab = [];
  let site_tab = [];

  const mois = $(".date");
  const festival = $(".festival");

  festival.each((i, el) => {
    const festivalDanse = $(el)
      .children("h2")
      .text();
    titleFestival_tab.push(festivalDanse);
  });

  mois.each((i, el) => {
    const moisTitre = $(el)
      .children(".intitule")
      .text();
    mois_tab.push(moisTitre);
  });

  festival.each((i, el) => {
    const jours = $(el).text();
    date_tab.push(jours.match(/Du(.*)à/)[1]);
  });

  festival.each((i, el) => {
    const lieulocalisation = $(el)
      .find("a")
      .attr("href");
    localisation_tab.push(lieulocalisation);
  });

  festival.each((i, el) => {
    const lieu_element = $(el)
      .children("a")
      .text();
    lieu_tab.push(lieu_element.split("#")[0]);
    site_tab.push(lieu_element.split(/#../)[1]);
  });

  festival.each((i, el) => {
    var elements = $(el).children("a");
    elements.each(function(item) {
      item = $(this).text();
      liens_tab.push(item);
    });
  });

  data.titleFestival_tab = titleFestival_tab;
  data.mois_tab = mois_tab;
  data.date_tab = date_tab;
  data.localisation_tab = localisation_tab;
  data.lieu_tab = lieu_tab;
  data.site_tab = site_tab;
  data.liens_tab = liens_tab;

  console.log(data);
};

scrape();
