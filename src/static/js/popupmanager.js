$(function() {

  $(document).on('click', '[data-fancybox-trigger]', function(e){
    e.preventDefault();

    var $this = $(e.currentTarget);
    var $target = $this.data('fancybox-target');

    $.fancybox.open($target);

  })

})