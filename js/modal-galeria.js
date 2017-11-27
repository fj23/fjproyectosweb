$(".fancybox").fancybox({
    beforeLoad: function() {
      this.title = $(this.element).attr('caption');
    },
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      overlay : {
          css : {'background' : 'rgba(0, 0, 0, 0.8)'}
      },
      title: { type: 'inside' }
    }
});