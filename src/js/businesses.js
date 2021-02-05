var businessJsons = [
  'cigarettes.json',
  'banking-n-finance.json',
  'communications.json',
  'constructions.json',
  'entertainment-n-tourism.json',
  'food-n-beverages.json',
  'health-n-beauty-product.json',
  'health-services.json',
  'industrial-estates-offices.json',
  'manufacturing.json',
  'media.json',
  'port-terminals.json',
  'retail.json',
  'trading-companies.json',
  'transport.json',
];
async function loadJsonFiles() {
  const jsonList = [];
  for (const b of businessJsons) {
    const file = await fetch(`data/${b}`);
    jsonList.push(await file.json());
  }
  return jsonList;
}
