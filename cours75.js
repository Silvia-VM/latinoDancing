const cheerio = require("cheerio");
const axios = require("axios");

const scrape = async () => {
  const response = await axios.get("https://salsa.faurax.fr/cours.php/dpt/75");

  const $ = cheerio.load(response.data);

  let data = {};
  let coursTitle_tab = [];
  let telephone_site_tab = [];

  const titleEcole = $("#contenu .conteneur12");
  const numero1 = $("#contenu .conteneur12 p");

  titleEcole.each((i, el) => {
    const orgs = $(el)
      .children("h2")
      .text();
    coursTitle_tab.push(orgs);
  });

  numero1.each((i, el) => {
    var elements = $(el);
    elements.each(function(item) {
      telephone_site_tab.push(
        $(this)
          .find("a")
          .attr("href")
      );
    });
    data.coursTitle_tab = coursTitle_tab;
    data.telephone_site_tab = telephone_site_tab;
    console.log(data);
  });
};

scrape();
