// Menu - Busqueda
var $buttonShowMenu = document.getElementById('js-openMenu'),
    $buttonHideMenu = document.getElementById('js-closeMenu'),
    $menu = document.getElementById('js-menu'),
    $buttonShowSearch = document.getElementById('js-openSearch'),
    $buttonHideSearch = document.getElementById('js-closeSearch'),
    $search = document.getElementById('js-search')

var showMenu = function(){
    $menu.classList.add('menu-active', 'bounceInRight');
};

var hideMenu = function(){
    $menu.classList.remove('menu-active');
};

var showSearch = function(){
    $search.classList.add('search-active');
    $search.classList.add('search-active', 'zoomIn');
};

var hideSearch = function(){
    $search.classList.remove('search-active');
};

$buttonShowMenu.addEventListener('click',showMenu);
$buttonHideMenu.addEventListener('click', hideMenu);

$buttonShowSearch.addEventListener('click',showSearch);
$buttonHideSearch.addEventListener('click', hideSearch);

//Progreso de la lectura de un artículo
$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});

// Facebook Coments

// SDK para JavaScript 
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
