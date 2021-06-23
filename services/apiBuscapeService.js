const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const buscapeBaseUrl= 'https://www.buscape.com.br/search?q=';

const getProducts = async (category, searchTerm) => {

  const response = await got(`${buscapeBaseUrl}${category}+${searchTerm}`);
  const dom = new JSDOM(response.body, {
		url: "https://www.buscape.com.br",
		referrer: "https://www.buscape.com.br",
		contentType: "text/html",
		includeNodeLocations: true,
		storageQuota: 10000000
	});

	const products = [];

  const imageList = [...dom.window.document.querySelectorAll('.image')];

	imageList.forEach((link, index) => {
		const obj = {
			title: link.alt,
			thumbnail: link.src
		}
    products.push(obj);
  });

	const priceList = [...dom.window.document.querySelectorAll('.mainValue')];

  priceList.forEach((link, index) => {
    let stringPrice = link.innerHTML.toString();
    let priceOnlyNumbers = stringPrice.replace(/[^\d]+/g, '');
    products[index].price = priceOnlyNumbers;
  });

	return products;
};

module.exports = {
  getProducts,
};
