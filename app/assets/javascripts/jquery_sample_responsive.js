$(document).on("turbolinks:load", function() {
   $(function () {

       function slider(target) {

           var box = $('#slideBox');
           var control = $('#control');
           var prevBtn = $('#prev');
           var nextBtn = $('#next');
           var w = 0;
           var h = 0;
           var imgW;
           var imgH;
           var items = [];
           var srcList = [];
           var loadIndex = 0;

           function clone(selector) {
               var cloneSelector = selector.clone(true);
               $(cloneSelector).attr({
                   'href': selector.attr('href'),
                   'target': selector.attr('target')
               });
               return cloneSelector
           }

           function slide(way){
               removeEvent();
               var i;
               var cloneSelector;

               if( way < 0){
                   cloneSelector = clone(items[0]);
                   $(cloneSelector).css('left', (w*items.length+1)+'px')
                   box.find('ul').append( cloneSelector );
                   items.push( $(cloneSelector));
                   for( i=0; i<items.length; i++){
                       items[i].animate( {'left': (w*i)-w}, 600);
                   }
               }else{
                   cloneSelector = clone(items[items.length-1]);
                   $(cloneSelector).css('left', (w*-1)+'px');
                   box.find('ul').append(cloneSelector);
                   items.unshift( $(cloneSelector) );
                   for( i=0; i<items.length; i++){
                       items[i].animate( {'left': w*i}, 600);
                   }
               }
               setTimeout( function () {
                   slideComplete(way);
               }, 800);
           }

           function slideComplete(way) {
               if( way < 0 ){
                   items[0].remove();
                   items.shift();
               }
               else{
                   items[items.length-1].remove();
                   items.pop();
               }
               addEvent();
           }

           function addEvent() {
               prevBtn.on({
                   'click': function () {
                       slide(1);
                   }
               });
               nextBtn.on({
                   'click': function () {
                       slide(-1);
                   }
               });
           }

           function removeEvent() {
               prevBtn.off('click');
               nextBtn.off('click');
           }

           function pos() {
               $.each(items, function (index) {
                   $(this).css('left', (w*index)+'px');
               });
           }

           function resize() {
               w = target.parent().width();
               h = Math.floor(w*imgH/imgW);
               target.width(w).height(h);
               box.width(w).height(h);
               box.find('ul').width(w).height(h);
               pos();
           }

           function setup() {
               imgW = box.find('img').width();
               imgH = box.find('img').height();
               control.fadeIn(1200);
               box.find('li').each(function (index) {
                   items[index] = $(this);
               });
               $(window).on('resize', resize);
               resize();
               addEvent();
           }

           function loaded() {
               if( loadIndex != (srcList.length-1)) {
                   loadIndex++;
                   imgLoad();
               }else{
                   setup();
               }
           }

           function imgLoad() {
               var img = new Image();
               $(img).on('load', loaded).attr('src', srcList[loadIndex]);
           }

           function init() {
               box.find('img').each(function (index) {
                   srcList[index] = $(this).attr('src');
               });
               imgLoad();
           }

           init();

       }

       slider($("#slideContent"));
   })
});
