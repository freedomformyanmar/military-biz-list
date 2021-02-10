var businessJsonsPromises = [
  "cigarettes.json",
  "entertainment-n-tourism.json",
  "food-n-beverages.json",
  "media.json",
  "transport.json",
  "retail.json",
  "health-services.json",
  "banking-n-finance.json",
  "communications.json",
  "constructions.json",
  "port-terminals.json",
  "manufacturing.json",
  "trading-companies.json",
  "health-n-beauty-product.json",
  "industrial-estates-offices.json",
  "education.json"
].map((i) => fetch(`data/${i}`).then((response) => response.json()));
