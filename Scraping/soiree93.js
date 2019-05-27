const cheerio = require("cheerio");
const axios = require("axios");

const scrape = async () => {
  const response = await axios.get("https://salsa.faurax.fr/index.php/dpt/91");

  const $ = cheerio.load(response.data);

  // console.log(response.data);
  let data = {};
  let titleSoirees_tab = [];
  let date_tab = [];
  let lieu_tab = [];
  let localisation_tab = [];
  let liens_tab = [];
  let nomDanses_tab = [];
  let desc_tab = [];
  let horairePrix_tab = [];

  const titleSoirees = $(".grid7 .soiree-info h2");
  const date = $(".grid8");
  const lieu = $(".grid7 .soiree-info .description a");
  const localisation = $(".grid7 .soiree-info .description");
  const liens = $(".grid7 .soiree-info .description p");
  const description = $(".grid7 .soiree-info .description");
  const nomDanses = $(".grid7 .soiree-info .description p strong");
  const horairePrix = $(".grid7 .soiree-info .description p strong");

  titleSoirees.each((i, el) => {
    const summaries = $(el)
      .children(".summary")
      .text();
    titleSoirees_tab.push(summaries);
  });

  date.each((i, el) => {
    const intitule = $(el)
      .children(".intitule")
      .text();
    date_tab.push(intitule);
  });

  lieu.each((i, el) => {
    const lieulocation = $(el)
      .children(".lieu.location")
      .text();
    lieu_tab.push(lieulocation);
  });

  localisation.each((i, el) => {
    const lieulocalisation = $(el)
      .find("a")
      .attr("href");
    localisation_tab.push(lieulocalisation);
  });

  liens.each((i, el) => {
    var elements = $(el);
    elements.each(function(item) {
      liens_tab.push(
        $(this)
          .find("a")
          .attr("href")
      );
    });
  });

  description.each((i, el) => {
    const comms = $(el)
      .children(".comm")
      .text();
    desc_tab.push(comms);
  });

  nomDanses.each((i, el) => {
    const nomSoiree = $(el)
      .children(".label")
      .text();
    nomDanses_tab.push(nomSoiree);
  });

  horairePrix.each((i, el) => {
    const horaires = $(el).text();
    horairePrix_tab.push(horaires.split("  ")[1]);
  });
  data.titleSoirees_tab = titleSoirees_tab;
  data.lieu_tab = lieu_tab;
  data.date_tab = date_tab;
  data.localisation_tab = localisation_tab;
  data.liens_tab = liens_tab;
  data.desc_tab = desc_tab;
  data.nomDanses_tab = nomDanses_tab;
  data.horairePrix_tab = horairePrix_tab;

  console.log(data);
};

scrape();
