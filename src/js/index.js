function groupBy(ac, dataLists) {
  return {
    [dataLists[0].title]: [...dataLists.slice(1, dataLists.length)],
    ...ac,
  };
}
function searchRule(searchString, value) {
  var regex = new RegExp(searchString, 'gi');
  return regex.test(value.split(' ').join(''));
}
new Vue({
  el: '#app',
  data: {
    searchString: '',
    businesses: [],
    resources: [],
  },
  async created() {
    const businessesData = await loadJsonFiles();
    this.businesses = businessesData.reduce(groupBy, {});
    this.resources = this.businesses;
  },
  watch: {
    searchString: function () {
      this.businesses = Object.entries(this.resources)
        .map(([key, arr]) => {
          const searchFilter = arr.filter((el) => {
            return (
              searchRule(this.searchString, el.product) ||
              searchRule(this.searchString, key)
            );
          });
          return (
            searchFilter.length > 0 && {
              [key]: searchFilter,
            }
          );
        })
        .reduce((ac, data) => ({ ...ac, ...data }), {});
    },
  },
});
