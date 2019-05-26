const cheerio = require("cheerio");
const axios = require("axios");

const scrape = async () => {
  const response = await axios.get("https://salsa.faurax.fr/festival.php");

  const $ = cheerio.load(response.data);

  let titleFestival_tab = [];
  let mois_tab = [];
  let date_tab = [];
  let localisation_tab = [];
  let liens_tab = [];

  // let desc_tab = [];
  // let horairePrix_tab = [];

  const titleFestival = $(".festival");
  const mois = $(".date");
  const date = $(".festival");
  const localisation = $(".festival");
  const liens = $(".festival");

  // const nomDanses = $(".grid7 .soiree-info .description p strong");
  // const horairePrix = $(".grid7 .soiree-info .description p strong");

  titleFestival.each((i, el) => {
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

  date.each((i, el) => {
    const jours = $(el).text();
    date_tab.push(jours.match(/Du(.*)à/)[1]);
  });

  localisation.each((i, el) => {
    const lieulocalisation = $(el)
      .find("a")
      .attr("href");
    localisation_tab.push(lieulocalisation);
  });

  liens.each((i, el) => {
    var elements = $(el).children("a");
    // console.log(elements);
    elements.each(function(item) {
      item = $(this).text();
      // .match(/http(.*)/);
      liens_tab.push(
        item
        // .find("a")
        // .attr("href")
      );
    });
    // console.log(liens_tab);
  });

  // nomDanses.each((i, el) => {
  //   const nomSoiree = $(el)
  //     .children(".label")
  //     .text();
  //   nomDanses_tab.push(nomSoiree);
  // });

  // horairePrix.each((i, el) => {
  //   const horaires = $(el).text();
  //   horairePrix_tab.push(horaires.split("  ")[1]);
  // });

  // console.log(titleFestival_tab);
  // console.log(mois_tab);
  // console.log(date_tab);
  console.log(localisation_tab);
  // console.log(liens_tab);

  // console.log(desc_tab);
  //   console.log(nomDanses_tab);
};

scrape();
