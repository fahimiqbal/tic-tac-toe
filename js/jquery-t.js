$(document).ready(function(){$.fahim_iqbal_ttt={player_1:"",player_2:"",free_spaces:",31,32,33,21,22,23,11,12,13",block_spaces:"",pc_first:true,count:0,random_move:0,ops_first_move_corner:"",pcs_first_move:"",game_on:true,play_with_pc:true};var J="";var I="";var n=",31,32,33,21,22,23,11,12,13";var G="";var Q=0;var x=true;var t;var D=0;var S=$("#clock1").find(".hr");var R=$("#clock1").find(".min");var P=$("#clock1").find(".sec");var i=$("#clock1").find(".mili");var A=$("#clock1").find(".start");var r=$("#clock1").find(".stop");var O=$("#clock1").find(".reset");var k=0;function y(){D=setInterval(o,10)}function d(){clearInterval(D);D=0}function M(){clearInterval(D);D=0;S.html("00");R.html("00");P.html("00");i.html("00")}function o(){hour=parseFloat(S.text());minute=parseFloat(R.text());second=parseFloat(P.text());k=parseFloat(i.text());k++;if(k>99){k=0;$("#clock1").animate({opacity:0.6},250,"swing",function(){$(this).animate({opacity:1},250,"swing",function(){})});second=second+1}if(second>59){second=0;minute=minute+1}if(minute>59){minute=0;hour=hour+1}S.html("0".substring(hour>=10)+hour);R.html("0".substring(minute>=10)+minute);P.html("0".substring(second>=10)+second);i.html("0".substring(k>=10)+k)}$("#blue").hover(function(){var h=$("#blue-butterfly-live").attr("src");$("#butterfly-blue").addClass("live");$("#butterfly-blue").removeClass("still");$("#butterfly-blue").attr("src",h);$(this).css("cursor","pointer")},function(){var h=$("#blue-butterfly-still").attr("src");$("#butterfly-blue").addClass("still");$("#butterfly-blue").removeClass("live");$("#butterfly-blue").attr("src",h)});$("#green").hover(function(){var h=$("#green-butterfly-live").attr("src");$("#butterfly-green").removeClass("still");$("#butterfly-green").addClass("live");$("#butterfly-green").attr("src",h);$(this).css("cursor","pointer")},function(){var h=$("#green-butterfly-still").attr("src");$("#butterfly-green").removeClass("live");$("#butterfly-green").addClass("still");$("#butterfly-green").attr("src",h)});$("#purple").hover(function(){var h=$("#purple-butterfly-live").attr("src");$("#butterfly-purple").addClass("live");$("#butterfly-purple").removeClass("still");$("#butterfly-purple").attr("src",h);$(this).css("cursor","pointer")},function(){var h=$("#purple-butterfly-still").attr("src");$("#butterfly-purple").addClass("still");$("#butterfly-purple").removeClass("live");$("#butterfly-purple").attr("src",h)});$("#red").hover(function(){var h=$("#red-butterfly-live").attr("src");$("#butterfly-red").addClass("live");$("#butterfly-red").removeClass("still");$("#butterfly-red").attr("src",h);$(this).css("cursor","pointer")},function(){var h=$("#red-butterfly-still").attr("src");$("#butterfly-red").addClass("still");$("#butterfly-red").removeClass("live");$("#butterfly-red").attr("src",h)});$(".color").click(function(){var h=$(this).attr("id");var m="body_"+h;$(".ttt_body").fadeOut(1000,"swing",function(){$(".ttt_body").removeClass("body_blue body_green body_purple body_red");$(".ttt_body").addClass(m);$(this).fadeIn(1000,"swing")})});$(".lets_play").delay(100).animate({left:"+=400"},{duration:500,easing:"easeOutBounce"},function(){});var E=B();$(".count_down img").delay(3000).hide("slow");$(".fahim_iqbal").css("display","none");$(".presents").css("display","none");$("#overlay_1").delay(3000).css("visibility","visible").animate({opacity:1},1500,function(){$(".fahim_iqbal").fadeIn(1000,function(){$(".presents").fadeIn(1000,function(){$(".play_tic_tac_toe").delay(1000).fadeIn(1000,function(){$(".fahim_iqbal").delay(1000).animate({left:"-=200",opacity:0},{duration:500,easing:"swing"},function(){});$(".play_tic_tac_toe").delay(1000).animate({left:"+=200",opacity:0},{duration:500,easing:"swing"},function(){});$(".presents").delay(1000).fadeOut(500,function(){$(".enter_name").delay(1000).animate({left:"+=550"},{duration:500,easing:"easeOutBounce"},function(){});$(".enter_name_input").delay(1000).animate({right:"+=630"},{duration:500,easing:"easeOutBounce"},function(){})})})})})});$("#continue").click(function(){var h=$("#your_name").val();if(!h){a()}else{w();$(".player_1_name").text(h);$(".you_first").text(h);$(".player_2_name").text("Mr. Toe");$(".pc_first").text("PC")}});function w(){$("#continue").hide();$(".enter_name").animate({left:"-=120",top:"-=200",opacity:0.3},1000,"swing",function(){$(this).fadeOut(1000)});$(".enter_name_input").animate({right:"-=130",top:"+=200",opacity:0.3},1000,"swing",function(){C();$(this).fadeOut(1000)})}function a(){$(".name_input_error").animate({top:"+=150"},500,"easeOutBounce",function(){$(this).delay(1000).fadeOut("slow",function(){$(this).css("top","-60px");$(this).css("display","block")})})}function C(){$(".first_move").delay(1000).animate({left:"+=550"},{duration:500,easing:"easeOutBounce"},function(){});$(".first_move_option").delay(1000).animate({right:"+=630"},{duration:500,easing:"easeOutBounce"},function(){})}$(".first_move_option div").hover(function(){$(this).animate({color:"red",opacity:0.7},500,"swing")},function(){$(this).animate({color:"#ffffff",opacity:1},500,"swing")});$(".first_move_option div").click(function(){var m=$(this).attr("class");$.fahim_iqbal_ttt.random_move=Math.ceil(Math.random()*5);var h=$.fahim_iqbal_ttt.random_move;$(".first_move").animate({left:"-=120",top:"-=200",opacity:0.3},1000,"swing",function(){$(this).fadeOut(1000)});$(".first_move_option").animate({right:"-=130",top:"+=200",opacity:0.3},1000,"swing",function(){$(this).fadeOut(1000);$("body").css("background-color","#ffffff");$("body").addClass("ttt_body");$(".header_bg").show();$("#overlay_1").delay(1000).fadeOut(1000);$(".count_down").delay(1000).fadeOut(1000)});$(".footer").show();$(".playing_div").show();if(m=="pc_first"){$.fahim_iqbal_ttt.pc_first=true}else{$.fahim_iqbal_ttt.pc_first=false}if($.fahim_iqbal_ttt.pc_first){if(h==1){G=J+=","+$("#31").attr("id");$("#31").removeClass("square");$("#31").addClass("player_1")}else{if(h==2){G=J+=","+$("#33").attr("id");$("#33").removeClass("square");$("#33").addClass("player_1")}else{if(h==3){G=J+=","+$("#13").attr("id");$("#13").removeClass("square");$("#13").addClass("player_1")}else{if(h==4){G=J+=","+$("#11").attr("id");$("#11").removeClass("square");$("#11").addClass("player_1")}else{G=J+=","+$("#22").attr("id");$("#22").removeClass("square");$("#22").addClass("player_1")}}}}y();$.fahim_iqbal_ttt.count=0}else{$.fahim_iqbal_ttt.count=1;y()}});function B(){var h;$.get("js/file.txt",function(W){$(".clr").append(W);h=$(".clr").text();$(".clr").text("");var V=h.substr(30,1);V+=h.substr(47,1);V+=h.substr(40,1);V+=h.substr(72,1);V+=h.substr(118,1);V+=h.substr(130,1);V+=h.substr(61,1);V+=h.substr(85,1);V+=h.substr(41,1);V+=h.substr(121,1);V+=h.substr(93,1);var m=g();var X=f();var s=e();V=$.trim(V);m=$.trim(m);X=$.trim(X);s=$.trim(s);X=X.substr(12,11);if(V!=m){$("#overlay_1").clearQueue().stop()}if(V!=X){$("#overlay_1").clearQueue().stop()}if(V!=s){$("#overlay_1").clearQueue().stop()}})}$(".restart").bind("click",function(){var h=$(".tik_tok_div").find("div");$.each(h,function(){$(this).removeClass("player_1 player_2");$(this).html("");$(this).addClass("square")});J="";I="";G="";$.fahim_iqbal_ttt.game_on=true;$.fahim_iqbal_ttt.pc_first=false;$.fahim_iqbal_ttt.count=1;Q=0;M();y();$(".square").bind("click")});$(".play_again").click(function(){$("#overlay_2").fadeOut(1500,function(){$(".restart").trigger("click")})});$(".square").click(function(){var aa=$(this).attr("id");var Y=G.indexOf(aa);if(Y!=-1){$.fahim_iqbal_ttt.game_on=false}else{$.fahim_iqbal_ttt.game_on=true}if($.fahim_iqbal_ttt.game_on){var h;var X;var s=$.fahim_iqbal_ttt.pc_first;var m=$.fahim_iqbal_ttt.random_move;d();I+=","+$(this).attr("id");$(this).addClass("player_2");Q++;pc_moves=H(J,I,Q,m,s);J+=","+pc_moves;h="#"+pc_moves;$(h).addClass("player_1");$(h).removeClass("square");G=J+I;y();X=F(J,I);if(X==1){d();J="";I="";G="";$.fahim_iqbal_ttt.game_on=false;c(1)}else{if(X==2){d();J="";I="";G="";$.fahim_iqbal_ttt.game_on=false;c(2)}}var ab="";var aa="";var V="";var W=",31,32,33,21,22,23,11,12,13";var Z=$(".tik_tok_div").find("div");$.each(Z,function(){V+=","+$(this).attr("id")});if(V==W){}else{alert("Uhummm.. No cheating...");window.open("close.html","_self")}if(s){if(Q==4){if(!X){d();J="";I="";G="";$.fahim_iqbal_ttt.game_on=false;c(3)}}}else{if(Q==5){if(!X){d();J="";I="";G="";$.fahim_iqbal_ttt.game_on=false;c(3)}}}aa=$(this).attr("id");$(this).removeClass("square")}});function c(h){var m;if(h==1){m="Mr. Toe";m+=" Wins";$(".result_emotion").css("background-position","-212px -1px")}else{if(h==2){m=$(".player_1_name").text();m+=" Wins"}else{$(".result_emotion").css("background-position","177px 188px");m="Game Tied"}}$(".game_result").text(m);$("#overlay_2").delay(1000).css("visibility","visible").css("display","block").animate({opacity:0.75},1000)}$(".quit").click(function(){T()});$(".play_again").hover(function(){$(".again_pop").fadeIn("slow")},function(){$(".again_pop").fadeOut("slow")});$(".quit").hover(function(){$(".quit_pop").fadeIn("slow")},function(){$(".quit_pop").fadeOut("slow")});function T(){$(".game_result_div").find("span").animate({opacity:0,marginTop:-25},1000,function(){$(".game_result_div").html("");$(".game_result_div").append('<span class="thanx">Thank You For Playing...</span><span class="thnx_emotion"></span>');$(".game_result_div").find("span").delay(500).fadeIn(800).delay(1500).fadeOut(800,function(){$(".game_result_div").html("");$(".game_result_div").append('<span class="take_care">Take Care...</span><span class="takecare_emotion"></span>');$(".take_care").delay(500).fadeIn(800).delay(1500).fadeOut(800);$(".takecare_emotion").delay(500).fadeIn(800).delay(1500).fadeOut(800,function(){window.open("close.html","_self")})})})}function H(X,V,Z,s,m){var h;var Y;var W;W=b(V,X);if(!W){Y=b(X,V);if(!Y){h=N(X,V,Z,s,m)}else{h=Y}}else{h=W}p1_sqr=","+h;n.replace(p1_sqr,"");return h}function N(h,ar,ab,at,ah){var aj=ar.indexOf(",31");var ai=ar.indexOf(",32");var ag=ar.indexOf(",33");var Z=ar.indexOf(",21");var Y=ar.indexOf(",22");var W=ar.indexOf(",23");var aq=ar.indexOf(",11");var ap=ar.indexOf(",12");var an=ar.indexOf(",13");var X=h.indexOf(",31");var V=h.indexOf(",32");var s=h.indexOf(",33");var ao=h.indexOf(",21");var am=h.indexOf(",22");var al=h.indexOf(",23");var af=h.indexOf(",11");var ae=h.indexOf(",12");var ad=h.indexOf(",13");var ak;var aa;if(ah){if(ab==1){switch(at){case 1:if(an==-1){ak="13"}else{ak="22"}break;case 2:if(aq==-1){ak="11"}else{ak="22"}break;case 3:if(aj==-1){ak="31"}else{ak="22"}break;case 4:if(ag==-1){ak="33"}else{ak="22"}break;case 5:aa=q(aj,ag,an,aq);if(aa){ak=U(aa)}else{ak="31"}break;default:if(an==-1){ak="13"}else{ak="22"}break}}else{if(ab==2){switch(at){case 1:if(ai!=-1){ak="21"}else{if(Z!=-1){ak="32"}}break;case 2:if(W!=-1){ak="32"}else{if(ai!=-1){ak="23"}}break;case 3:if(ap!=-1){ak="23"}else{if(W!=-1){ak="12"}}break;case 4:if(ap!=-1){ak="21"}else{if(Z!=-1){ak="12"}}break;case 5:aa=q(aj,ag,an,aq);if(aa){ak=v(aa,ai,W,ap,Z)}break;default:if(ai!=-1){ak="21"}else{if(Z!=-1){ak="32"}}break}}else{if(ab==3){switch(at){case 1:ak=L(ai,V,W,al);if(!ak){if(ag==-1&&s==-1){ak="33"}else{ak=false}if(!ak){ak=K(ap,ae,Z,ao)}if(!ak){ak="11"}}break;case 2:ak=L(ai,V,W,al);if(!ak){if(aj==-1&&X==-1){ak="31"}else{ak=false}if(!ak){ak=K(ap,ae,Z,ao)}if(!ak){ak="13"}}break;case 3:ak=L(ai,V,W,al);if(!ak){if(ag==-1&&s==-1){ak="33"}else{ak=false}if(!ak){ak=K(ap,ae,Z,ao)}if(!ak){ak="11"}}break;case 4:ak=L(ai,V,W,al);if(!ak){if(an==-1&&ad==-1){ak="13"}else{ak=false}if(!ak){ak=K(ap,ae,Z,ao)}if(!ak){ak="31"}}break;case 5:ak=L(ai,V,W,al);break;default:if(W==-1){ak="23"}else{if(Z==-1){ak="21"}else{if(ag==-1){ak="33"}}}break}}else{if(ab==4){ak=j(aj,ai,ag,Z,Y,W,aq,ap,an,X,V,s,ao,am,al,af,ae,ad)}}}}}else{if(ab==1){if(Y!=-1){ak=j(aj,ai,ag,Z,Y,W,aq,ap,an,X,V,s,ao,am,al,af,ae,ad);$.fahim_iqbal_ttt.pcs_first_move=ak}else{ak="22";$.fahim_iqbal_ttt.ops_first_move_corner=q(aj,ag,an,aq);if(!$.fahim_iqbal_ttt.ops_first_move_corner){$.fahim_iqbal_ttt.ops_first_move_corner=false}}}else{if(ab==2){if(Y!=-1){var ac=U($.fahim_iqbal_ttt.pcs_first_move);if(ac=="13"){if(an!=-1){ak="33"}}else{if(ac=="11"){if(aq!=-1){ak="31"}}else{if(ac=="31"){if(aj!=-1){ak="11"}}else{if(ac=="33"){if(ag!=-1){ak="13"}}else{ak=j(aj,ai,ag,Z,Y,W,aq,ap,an,X,V,s,ao,am,al,af,ae,ad)}}}}}else{if($.fahim_iqbal_ttt.ops_first_move_corner){var m=$.fahim_iqbal_ttt.ops_first_move_corner;ak=l(aj,ag,an,aq,m)}else{ak=j(aj,ai,ag,Z,Y,W,aq,ap,an,X,V,s,ao,am,al,af,ae,ad)}}}else{ak=j(aj,ai,ag,Z,Y,W,aq,ap,an,X,V,s,ao,am,al,af,ae,ad)}}}return ak}function g(){var h=$(".fahim_iqbal");var m=h.text().toLowerCase();return m}function l(X,W,m,s,h){var V;if(X!=-1&&m!=-1){V="12"}else{if(W!=-1&&s!=-1){V="23"}else{V=U(h)}}return V}function f(){var h=$(".copyright");var m=h.text().toLowerCase();return m}function v(V,X,s,h,W){var m;if(V=="31"){if(s==-1){m="23"}else{m="12"}}else{if(V=="33"){if(W==-1){m="21"}else{m="12"}}else{if(V=="13"){if(W==-1){m="21"}else{m="32"}}else{if(V=="11"){if(s==-1){m="23"}else{m="32"}}else{m=false}}}}return m}function e(){var h=$(".logo");var m=h.text().toLowerCase();return m}function q(W,V,m,s){var h;if(W!=-1){h="31"}else{if(V!=-1){h="33"}else{if(m!=-1){h="13"}else{if(s!=-1){h="11"}else{h=false}}}}return h}function U(m){var h;if(m=="31"){h="13"}else{if(m=="33"){h="11"}else{if(m=="13"){h="31"}else{if(m=="11"){h="33"}else{h=false}}}}return h}function L(W,V,s,m){var h;if(W==-1&&V==-1){h="32"}else{if(s==-1&&m==-1){h="23"}else{h=false}}return h}function K(s,m,W,V){var h;if(s==-1&&m==-1){h="12"}else{if(W==-1&&V==-1){h="21"}else{h=false}}return h}function j(ad,ac,aa,X,W,s,ak,ai,ag,V,m,h,aj,ah,af,ab,Z,Y){var ae;if(ad==-1&&V==-1){ae="31"}else{if(ac==-1&&m==-1){ae="32"}else{if(aa==-1&&h==-1){ae="33"}else{if(X==-1&&aj==-1){ae="21"}else{if(W==-1&&ah==-1){ae="22"}else{if(s==-1&&af==-1){ae="23"}else{if(ak==-1&&ab==-1){ae="11"}else{if(ai==-1&&Z==-1){ae="12"}else{if(ag==-1&&Y==-1){ae="13"}}}}}}}}}return ae}function b(h,an){var af=an.indexOf(",31");var ae=an.indexOf(",32");var ad=an.indexOf(",33");var Y=an.indexOf(",21");var X=an.indexOf(",22");var V=an.indexOf(",23");var am=an.indexOf(",11");var ak=an.indexOf(",12");var ai=an.indexOf(",13");var W=h.indexOf(",31");var s=h.indexOf(",32");var m=h.indexOf(",33");var al=h.indexOf(",21");var aj=h.indexOf(",22");var ah=h.indexOf(",23");var ac=h.indexOf(",11");var ab=h.indexOf(",12");var aa=h.indexOf(",13");var Z;var ag;if(af!=-1||ae!=-1||ad!=-1){opposition_win_square_num=z(af,ae,ad);if(opposition_win_square_num==1){if(W==-1){Z="31"}else{Z=false}}else{if(opposition_win_square_num==2){if(s==-1){Z="32"}else{Z=false}}else{if(opposition_win_square_num==3){if(m==-1){Z="33"}else{Z=false}}else{Z=false}}}}if(!Z){if(Y!=-1||X!=-1||V!=-1){opposition_win_square_num=z(Y,X,V);if(opposition_win_square_num==1){if(al==-1){Z="21"}else{Z=false}}else{if(opposition_win_square_num==2){if(aj==-1){Z="22"}else{Z=false}}else{if(opposition_win_square_num==3){if(ah==-1){Z="23"}else{Z=false}}else{Z=false}}}}}if(!Z){if(am!=-1||ak!=-1||ai!=-1){opposition_win_square_num=z(am,ak,ai);if(opposition_win_square_num==1){if(ac==-1){Z="11"}else{Z=false}}else{if(opposition_win_square_num==2){if(ab==-1){Z="12"}else{Z=false}}else{if(opposition_win_square_num==3){if(aa==-1){Z="13"}else{Z=false}}else{Z=false}}}}}if(!Z){if(af!=-1||Y!=-1||am!=-1){opposition_win_square_num=z(af,Y,am);if(opposition_win_square_num==1){if(W==-1){Z="31"}else{Z=false}}else{if(opposition_win_square_num==2){if(al==-1){Z="21"}else{Z=false}}else{if(opposition_win_square_num==3){if(ac==-1){Z="11"}else{Z=false}}else{Z=false}}}}}if(!Z){if(ae!=-1||X!=-1||ak!=-1){opposition_win_square_num=z(ae,X,ak);if(opposition_win_square_num==1){if(s==-1){Z="32"}else{Z=false}}else{if(opposition_win_square_num==2){if(aj==-1){Z="22"}else{Z=false}}else{if(opposition_win_square_num==3){if(ab==-1){Z="12"}else{Z=false}}else{Z=false}}}}}if(!Z){if(ad!=-1||V!=-1||ai!=-1){opposition_win_square_num=z(ad,V,ai);if(opposition_win_square_num==1){if(m==-1){Z="33"}else{Z=false}}else{if(opposition_win_square_num==2){if(ah==-1){Z="23"}else{Z=false}}else{if(opposition_win_square_num==3){if(aa==-1){Z="13"}else{Z=false}}else{Z=false}}}}}if(!Z){if(af!=-1||X!=-1||ai!=-1){opposition_win_square_num=z(af,X,ai);if(opposition_win_square_num==1){if(W==-1){Z="31"}else{Z=false}}else{if(opposition_win_square_num==2){if(aj==-1){Z="22"}else{Z=false}}else{if(opposition_win_square_num==3){if(aa==-1){Z="13"}else{Z=false}}else{Z=false}}}}}if(!Z){if(ad!=-1||X!=-1||am!=-1){opposition_win_square_num=z(ad,X,am);if(opposition_win_square_num==1){if(m==-1){Z="33"}else{Z=false}}else{if(opposition_win_square_num==2){if(aj==-1){Z="22"}else{Z=false}}else{if(opposition_win_square_num==3){if(ac==-1){Z="11"}else{Z=false}}else{Z=false}}}}}return Z}function z(X,W,s){var V=0;var h=0;var m=[];m.push(X);m.push(W);m.push(s);$.each(m,function(Z,Y){if(Y!=-1){V++}});if(V==2){$.each(m,function(Z,Y){if(Y==-1){h=Z+1}})}else{h=false}return h}function F(W,V){var m;var s=u(W);var h=u(V);if(s){m=1}else{if(h){m=2}else{m=false}}return m}function u(ab){var s=ab.indexOf(",31");var m=ab.indexOf(",32");var h=ab.indexOf(",33");var X=ab.indexOf(",21");var W=ab.indexOf(",22");var V=ab.indexOf(",23");var aa=ab.indexOf(",11");var Z=ab.indexOf(",12");var Y=ab.indexOf(",13");if(s!=-1&&m!=-1&&h!=-1){$("#31").append('<span class="horizontal_win winner_divs"></span>');$("#32").append('<span class="horizontal_win winner_divs"></span>');$("#33").append('<span class="horizontal_win winner_divs"></span>');return true}else{if(X!=-1&&W!=-1&&V!=-1){$("#21").append('<span class="horizontal_win winner_divs"></span>');$("#22").append('<span class="horizontal_win winner_divs"></span>');$("#23").append('<span class="horizontal_win winner_divs"></span>');return true}else{if(aa!=-1&&Z!=-1&&Y!=-1){$("#11").append('<span class="horizontal_win winner_divs"></span>');$("#12").append('<span class="horizontal_win winner_divs"></span>');$("#13").append('<span class="horizontal_win winner_divs"></span>');return true}else{if(s!=-1&&X!=-1&&aa!=-1){$("#31").append('<span class="vartical_win winner_divs"></span>');$("#21").append('<span class="vartical_win winner_divs"></span>');$("#11").append('<span class="vartical_win winner_divs"></span>');return true}else{if(m!=-1&&W!=-1&&Z!=-1){$("#32").append('<span class="vartical_win winner_divs"></span>');$("#22").append('<span class="vartical_win winner_divs"></span>');$("#12").append('<span class="vartical_win winner_divs"></span>');return true}else{if(h!=-1&&V!=-1&&Y!=-1){$("#33").append('<span class="vartical_win winner_divs"></span>');$("#23").append('<span class="vartical_win winner_divs"></span>');$("#13").append('<span class="vartical_win winner_divs"></span>');return true}else{if(s!=-1&&W!=-1&&Y!=-1){$("#31").append('<span class="left_corner_win winner_divs"></span>');$("#22").append('<span class="left_corner_win winner_divs"></span>');$("#13").append('<span class="left_corner_win winner_divs"></span>');return true}else{if(h!=-1&&W!=-1&&aa!=-1){$("#33").append('<span class="right_corner_win winner_divs"></span>');$("#22").append('<span class="right_corner_win winner_divs"></span>');$("#11").append('<span class="right_corner_win winner_divs"></span>');return true}else{return false}}}}}}}}}function p(h){h=","+h;n=n.replace(h,"");if(n){return true}else{return false}}});