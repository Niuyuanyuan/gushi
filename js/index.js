	
// h5页面控制像素

var fs=document.body.scrollWidth/10;
$('html').css('font-size',fs+'px');
var aa=function(){
	fs=document.body.scrollWidth/10;
	$('html').css('font-size',fs+'px');
};
$(window).on("resize",aa);


// 点击显示对应翻译
$('.cont').on('click',function(){
	$('.cont').hide();
	$('.fanyi').show();
	$('.fanyi li').removeClass('active');
	$('#'+$(this).attr('data-for')).addClass('active');
})

$('.fanyi').on('click',function(){
	$('.fanyi').hide();
	$('.cont').show();
})


// 填空
$('.blank').on('click',function(){
	$(this).find('span').show();
})











