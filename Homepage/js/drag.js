(function ( $ ) {
  var biggestz = 0;

    $.fn.nwindow = function( options ) {
        var settings = $.extend({
          container: this.children(".container"),
          holding: this.children(".pew")
        }, options );
       var wholewindow = this;
       var holdplace = settings.holding;
       var container = settings.container;
       $(wholewindow).append( "<p id='resize' style='width: 15px;height: 15px;display: block;margin: 0;background: #333;position: absolute;bottom: 0;right: 0;cursor: nw-resize'></p>" );
      var resizething = this.children("#resize");
       return this.each(function() {
          var clicked="0",resized="0",
              winx="0",winy="0",
              difx="0",dify="0",
              mplusx="1",mplusy="1",
              winw=wholewindow.width(),
              winh=wholewindow.height();
         var oldmx="0",oldmy="0",
             difmx="0",difmy="0";
         var mausx="0",mausy="0";
          $( "html" ).mousemove(function( event ) {
              winx = $(wholewindow).offset().left;
              winy = $(wholewindow).offset().top;
              mausx = event.pageX;
              mausy = event.pageY;
                if (clicked == "0"){
                  difx = mausx - winx;
                  dify = mausy - winy;
                }
                if (resized == "1"){
                  difmx = mausx - oldmx;
                  difmy = mausy - oldmy;
                  mplusx = winw + difmx;
                  mplusy = winh + difmy;
                  $(wholewindow).css({width: mplusx, height: mplusy});
                }
              var newx = event.pageX - difx - $(wholewindow).css("marginLeft").replace('px', '');
              var newy = event.pageY - dify - $(wholewindow).css("marginTop").replace('px', '');
              $(wholewindow).css({top: newy, left: newx});
            $(container).html("Mouse Cords: "+mausx+" , "+mausy+"<br />"+"Window Cords:"+winx+" , "+winy+"<br />Draggin'?: "+clicked+"<br />Resizin'?: "+resized+"<br />Difference: "+difx+" , "+dify+"<br />Z-Index: "+biggestz+"<br />MplusX: "+mplusx+"<br />MplusY: "+mplusy+"<br />OldMX: "+oldmx+"<br />OLDMY: "+oldmy);
          });
         $("html").mouseup(function( event ) {clicked="0";resized="0";          winw=wholewindow.width();
          winh=wholewindow.height();});
         $(holdplace).mousedown(function( event ) {clicked = "1";}); 
         $(resizething).mousedown(function( event ) {resized = "1";
          oldmx = mausx;
          oldmy = mausy;
         }); 
         $(wholewindow).mousedown(function( event ) {
           biggestz = biggestz+1;
           wholewindow.css('z-index', biggestz);
         });       
                
       });
    };
}( jQuery ));

$( "#html" ).nwindow({});
$( "#css" ).nwindow({});
$( "#js" ).nwindow({});