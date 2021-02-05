function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

Promise.all(businessJsonsPromises).then((values) => {
  var businesses = Object.freeze({
    Cigarettes: values[0],
    'Entertainment/Tourism': values[1],
    'Food and drink': values[2],
    Media: values[3],
    Transport: values[4],
    Retail: values[5],
    'Health Servcies': values[6],
    'Banking and finance': values[7],
    Communications: values[8],
    Construction: values[9],
    Port: values[10],
    Manufacturing: values[11],
    'Trading companies': values[12],
    'Health and Beauty Products': values[13],
    'Industrial Estates/Offices': values[14],
  });
  new Vue({
    el: '#app',
    data: {
      searchString: '',
      businesses: businesses,
    },
    watch: {
      searchString: function () {
        var obj = {};
        Object.entries(businesses)
          .map(([key, arr]) => {
            return arr.filter((el) => {
              var regex = new RegExp(this.searchString, 'gi');
              return regex.test(el.product) || regex.test(el.industry);
            });
          })
          .filter((el) => el.length > 0)
          .forEach((el) => {
            if (obj[el[0].industry]) {
              obj[el[0].industry].push(...el);
            } else {
              obj[el[0].industry] = [];
              obj[el[0].industry].push(...el);
            }
          });
        this.businesses = obj;
      },
    },
  });
});
