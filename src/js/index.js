new Vue({
  el: '#app',
  data: {
    searchString: '',
    businesses: [],
    resources: [],
  },
  async created() {
    const businessesData = await loadJsonFiles();
    this.businesses = businessesData.reduce((ac, dataLists) => {
      return {
        [dataLists[0].title]: [...dataLists.slice(1, dataLists.length)],
        ...ac,
      };
    }, {});
    this.resources = this.businesses;
  },
  watch: {
    searchString: function () {
      var obj = {};
      Object.entries(this.resources).map(([key, arr]) => {
        return arr.filter((el) => {
          var regex = new RegExp(this.searchString, 'gi');
          return regex.test(el.product) || regex.test(key);
        });
      });
      filter((el) => el.length > 0).forEach((el) => {
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
