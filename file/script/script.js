$(document).ready(function() {




    function calculateColorContrast(){
        let blackColor = $('body').css('inner--background__black');
        let artTitleColor = $('.art--title').css('background-color');

        if(tinycolor(blackColor).isLight()){
            $('.inner--background__black').css({'color':'#333'});
            $('.inner--background__black-two').css({'color':'#333'});
            $('.header-navigation a').css({'color':'#333'});
            $('.header-phone a').css({'color':'#333'});
        }else{
            $('.inner--background__black').css({'color':'#fff'});
            $('.inner--background__black-two').css({'color':'#fff'});
            $('.header-navigation a').css({'color':'#fff'});
            $('.header-phone a').css({'color':'#fff'});
        }
        if(tinycolor(artTitleColor).isLight()){
            $('.art--title').css({'color':'#333'});
        }else{
            $('.art--title').css({'color':'#fff'});
        }

    }
    calculateColorContrast();

    document.addEventListener("DOMContentLoaded", function () {
        function hasClass(element, className) {
            return element && element.classList.contains(className);
        }
    
        const sectionHeaderRow = document.querySelector('.section--header .row');
        const sectionAboutRow = document.querySelector('.section--about .row');
    
        if (hasClass(sectionHeaderRow, 'flex-column')) {
            document.querySelector('.header-form')?.style.setProperty('width', '100%');
            document.querySelector('.header-form')?.style.setProperty('justify-content', 'center');
    
            document.querySelector('.headf')?.style.setProperty('display', 'flex');
            document.querySelector('.headf')?.style.setProperty('align-items', 'center');
    
            document.querySelector('.header-form button')?.style.setProperty('width', '100%');
        } else {
            document.querySelector('.header-form input')?.style.setProperty('width', '100%');
            document.querySelector('.header-form')?.style.setProperty('justify-content', 'center');
        }
    
        if (hasClass(sectionAboutRow, 'flex-column-reverse') || hasClass(sectionAboutRow, 'flex-column')) {
            document.querySelector('.picbox')?.style.setProperty('display', 'flex');
    
            document.querySelectorAll('.infobox h1, .infobox > div').forEach(el => {
                el.style.setProperty('margin', '20px auto');
                el.style.setProperty('max-width', '800px');
                el.style.setProperty('text-align', 'center');
            });
    
            document.querySelector('.section--about img')?.style.setProperty('max-width', '800px');
    
            if (hasClass(sectionAboutRow, 'flex-column-reverse')) {
                document.querySelector('.section--about img')?.style.setProperty('margin', '0 auto 30px auto');
            } else if (hasClass(sectionAboutRow, 'flex-column')) {
                document.querySelector('.section--about img')?.style.setProperty('margin', '30px auto 0 auto');
            }
        }
    });
    

    let marg = $('#marg').attr('class');
    let heightb = $('#heightb').attr('class');

    if($('.section--order .row').css('flex-direction') == 'column'){
        $('.section--order h1').css({'text-align':'center'});
        $('.orderButton').css({'margin-top':marg});
        $('.ordFrm').css({'margin-top':marg});
    }
    if($('.section--order .row').css('flex-direction') == 'row-reverse'){
        $('.section--order h1').css({'text-align':'right'});
    }

    if($('.section--order .row > col:last-child').text() == ''){
        $('.section--order .row > col:first-child').css({'flex-basis':'100%'});
    }

    if($('.section--stats .row').hasClass('flex-column')){
        $('.stats--block').css({'margin-top':marg});
        $('.stats--block__item').css({'align-items':'center'});
        $('.section--stats h1').css({'text-align':'center'});
        $('.section--stats h4').css({'text-align':'center'});
        $('.stats--block').css({'flex-direction':'row','justify-content':'center','text-align':'center'});
    }else{
        $('.section--stats .infobox').css({'display':'flex','flex-direction':'column','justify-content':'center'});
        $('.stats--block__item').css({'flex-direction':'row','align-items':'center','gap':'20px','justify-content':'center'});
    }
    if($('.bi-check2-circle').css('display')  == 'none'){
        $('.bi-caret-down-fill').show();
    }
    if($('.section--contact .row').css('flex-direction') == 'column' || $('.section--contact .row').css('flex-direction') == 'column-reverse'){
        $('.contact--image').hide();
        $('.contact--list i').css({'display':'block','font-size':'40px'});
        $('.section--contact iframe').css('height',heightb);
        $('.section--contact h1').css({'margin-bottom':'50px','text-align':'center'});
        $('.section--contact .row').css('gap','50px');
        $('.contact--list').css({'flex-direction':'row','gap':'40px','justify-content':'center'});
        $('.contact--list li').css({'display':'flex','flex-direction':'column','align-items':'center','gap':'10px'});
    }

    $('.fanboxy').each(function() {
        $(this).attr('href', $(this).children('img').attr('src'));
    });
    $('.fanboxy').fancybox();



});
 
