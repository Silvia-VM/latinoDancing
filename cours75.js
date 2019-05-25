const cheerio = require("cheerio");
const axios = require("axios");

const scrape = async () => {
  const response = await axios.get("https://salsa.faurax.fr/cours.php/dpt/75");

  const $ = cheerio.load(response.data);

  let cours_title = [];
  let telephone_tab = [];

  const titleEcole = $("#contenu .conteneur12");
  const numero1 = $("#contenu .conteneur12 p");

  titleEcole.each((i, el) => {
    const orgs = $(el)
      .children("h2")
      .text();
    cours_title.push(orgs);
  });
  console.log(cours_title);

  numero1.each((i, el) => {
    var elements = $(el);
    elements.each(function(item) {
      telephone_tab.push(
        $(this)
          .find("a")
          .attr("href")
      );
    });
    console.log(telephone_tab);
  });
};

scrape();
