// проставляем title у ссылок изображений
// инициализируем (подключаем) либу фотогалереи
(function($){
    window.lightGallery = function(block, a) {
        $(block).find(a).each(function() {
            $(this).attr('data-sub-html', $(this).find('img').attr('title'));
        });
        $(block).lightGallery({
            selector: a,
            download: false,
            fullScreen: false,
            zoom: false,
            share: false,
            thumbnail: true
        });
    }
})(jQuery);
