UI.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY年MM月DD日 H::mm:ss a');
});