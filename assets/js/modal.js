$('.p-modal').on('click', function(e){
    e.preventDefault();
        $('#privacyModal').modal('show').find('.modal-content').load($(this).attr('href'));
    });

$('.t-modal').on('click', function(e){
    e.preventDefault();
        $('#privacyModal').modal('show').find('.modal-content').load($(this).attr('href'));
    });