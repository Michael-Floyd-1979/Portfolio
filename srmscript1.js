$(document).ready(function()
{
	var fullMenu = 0;
	var openForm = 0;
	var formEntry = new Array();
	var formSelect = 0;
	var scrollPos = 0;
	var mpOpen = 0;
	var mpImg = 0;
	var picMode = 0;
	var scrollImg = $(".mediabanner").position();
	
	formEntry[0] = 0;
	formEntry[1] = 0;
	formEntry[2] = 0;
	formEntry[3] = 0;
	
	$(".menuclose").hide();
	$("form").hide();
	$(".headbg").css({"opacity":"0"}).animate({opacity:0.5},1000);
	$(".headfilter").css({"opacity":"0"}).delay(500).animate({opacity:1},500);
	$(".headchar").css({"opacity":"0"}).delay(1500).animate({opacity:1},500);
	$(".topbar, nav").css({"opacity":"0"}).delay(500).animate({opacity:1},1000);
	$(".headtext").css({"opacity":"0"}).delay(1000).animate({opacity:1},1000);
	$(".menuextra").hide();
	$(".mediaplayer").hide();
	$("section").css({"opacity":"0"});
	$(".mediaitem").addClass("mihide");
	
	function screenCheck()
	{
		if($(window).innerWidth() > 768)
			{
				$(".maincontainer").css({"grid-template-rows":"70px 50px " + ($(window).innerHeight()-230) + "px 120px 200px auto 360px 400px auto 75px"});
				$(".mediaplayer").css({"grid-template-rows":"70px " + ($(window).innerHeight()-140) + "px 70px"});
			}
		else if($(window).innerWidth() <= 768)
			{
				$(".maincontainer").css({"grid-template-rows":"50px 50px " + ($(window).innerHeight()-210) + "px 120px 200px auto auto 300px 250px auto 75px"});
				$(".mediaplayer").css({"grid-template-rows":"50px " + ($(window).innerHeight()-120) + "px 70px"});
			}
		
		if($(window).innerWidth() > $(window).innerHeight())
			{
				$(".headchar").css({"width":"100%","height":($(window).innerHeight()+30) + "px","top":"70px","left":"0%"});
				$(".headchar img").css({"object-position":"75% 0"});
				if(picMode === 0)
					{
						$(".mpimage").css({"width":"55%","height":"100%"});
						$(".mpinfo").css({"width":"35%","height":"100%"});
					}
			}
		else if($(window).innerHeight() > $(window).innerWidth())
			{
				$(".headchar").css({"width":"100%","height":($(window).innerHeight()+30) + "px","top":"70px","left":"0%"});
				$(".headchar img").css({"object-position":"center"});
				if(picMode === 0)
					{
						$(".mpimage").css({"width":"100%","height":"65%"});
						$(".mpinfo").css({"width":"100%","height":"35%"});
					}
			}
	}
	
	screenCheck();
	
	if($(document).scrollTop() >= scrollImg.top-200)
		{
			$("section").css({"opacity":"1"});
			$(".mediaitem").removeClass("mihide");
		}
	else if($(document).scrollTop() < scrollImg-200)
		{
			$("section").css({"opacity":"0"});
			$(".mediaitem").addClass("mihide");
		}
	
	$(window).on("resize",function()
	{
		screenCheck();
	});
	
	$(window).on("scroll",function()
	{
		scrollImg = $(".mediabanner").position();
		$(".headbg").css({"background-position":"center " + $(document).scrollTop()*0.7 + "px"});
		$(".headchar").offset({top:($(document).scrollTop()*0.5)+70});
		if($(document).scrollTop() >= scrollImg.top-50)
			{
				$("section").css({"opacity":"1"});
				$(".mediaitem").removeClass("mihide");
			}
		else if($(document).scrollTop() < scrollImg.top-50)
			{
				$("section").css({"opacity":"0"});
				$(".mediaitem").addClass("mihide");
			}
	});
	
	function navOpen()
	{
		$(".topbar").css({"background-color":"rgba(0,0,0,0)","border-bottom":"2px solid rgba(255,255,255,1)"});
		$(".mainlogo").removeClass("logoone").addClass("logotwo");
		$(".topbutton").hide();
		$(".menuclose").show();
	}
	
	function navClose()
	{
		$(".topbar").css({"background-color":"rgba(0,0,0,0.7)","border-bottom":"2px solid rgba(240,53,107,1)"});
		$(".mainlogo").removeClass("logotwo").addClass("logoone");
		$(".topbutton").show();
		$(".menuclose").hide();
	}
	
	$(".topbutton").eq(0).click(function()
	{
		$(".topbar, nav, nav ul, form, header, form h3, form input, form textarea, .headfilter").finish();
		if(openForm === 0)
			{
				navOpen();
				$("nav").hide();
				$("form").css({"opacity":"0"}).show().animate({opacity:1},500);
				$("form h3, form input, form textarea").css({"opacity":"0"}).delay(500).animate({opacity:1},500);
				$("header").hide();
				$(".headfilter").css({"grid-row":"1/4","opacity":"0"}).animate({opacity:1},500);
				openForm = 1;
			}
	});
	
	$(".topbutton").eq(1).click(function()
	{
		$(".topbar, nav, nav ul, header, .headfilter").finish();
		if(fullMenu === 0)
			{
				navOpen();
				$("nav").css({"grid-row":"2/5","opacity":"0"}).animate({opacity:1},500);
				$("nav ul").css({"flex-flow":"column nowrap","justify-content":"flex-start","margin":"30px 0 0 0","opacity":"0"}).delay(500).animate({opacity:1},500);
				$("nav ul li").css({"width":"200px","margin":"15px 10px","text-align":"left"});
				$(".menuextra").show();
				$("header").hide();
				$(".headfilter").css({"grid-row":"1/4","opacity":"0"}).animate({opacity:1},500);
				$(".headchar").css({"z-index":"4"});
				fullMenu = 1;
			}
	});
	
	$(".menuclose").click(function()
	{
		if(fullMenu === 1)
			{
				navClose();
				$("nav").css({"grid-row":"2","opacity":"0"}).animate({opacity:1},500);
				$("nav ul").css({"flex-flow":"row nowrap","justify-content":"flex-end","margin":"0","opacity":"0"}).delay(500).animate({opacity:1},500);
				$("nav ul li").css({"width":"120px","margin":"5px 10px","text-align":"center"});
				$(".menuextra").hide();
				$("header").css({"opacity":"0"}).show().delay(1000).animate({opacity:1},500);
				$(".headfilter").css({"grid-row":"1/3","opacity":"0"}).animate({opacity:1},500);
				$(".headchar").css({"z-index":"2"});
				fullMenu = 0;
			}
		if(openForm === 1)
			{
				navClose();
				$("nav").css({"opacity":"0"}).show().animate({opacity:1},500);
				$("nav ul").css({"opacity":"0"}).delay(500).animate({opacity:1},500);
				$("form").hide();
				$("header").css({"opacity":"0"}).show().delay(1000).animate({opacity:1},500);
				$(".headfilter").css({"grid-row":"1/3","opacity":"0"}).animate({opacity:1},500);
				openForm = 0;
			}
	});
	
	$(".textfield").focus(function()
	{
		formSelect = $(".textfield").index(this);
		if(formEntry[formSelect] !== 2)
			{
				$(this).val("").css({"color":"rgba(255,255,255,1)"});
				formEntry[formSelect] = 1;
			}
	});
	
	$(".textfield").blur(function()
	{
		if(formEntry[formSelect] !== 2)
			{
				$(this).val($(this).attr("value")).css({"color":"rgba(255,255,255,0.5)"});
				formEntry[formSelect] = 0;
			}
	});
	
	$(".textfield").keypress(function()
	{
		formEntry[formSelect] = 2;
	});
	
	$("textarea").focus(function()
	{
		formSelect = $(".textfield").index(this);
		if(formEntry[formSelect] !== 2)
			{
				$(this).text("").css({"color":"rgba(255,255,255,1)"});
				formEntry[formSelect] = 1;
			}
	});
	
	$("textarea").blur(function()
	{
		if(formEntry[formSelect] !== 2)
			{
				$(this).text("Leave a comment here.").css({"color":"rgba(255,255,255,0.5)"});
				formEntry[formSelect] = 0;
			}
	});
	
	$("textarea").keypress(function()
	{
		formEntry[formSelect] = 2;
	});
	
	$(".formbutton").eq(1).click(function()
	{
		$(".textfield").css({"color":"rgba(255,255,255,0.5)"});
		$("textarea").css({"color":"rgba(255,255,255,0.5)"});
		formEntry[0] = 0;
		formEntry[1] = 0;
		formEntry[2] = 0;
		formEntry[3] = 0;
	});
	
	function mediaChange()
	{
		$(".mpimage, .mpinfo").finish();
		$(".mpimage").addClass("mpblur").css({"opacity":"0","background-image":"url(" + $(".m1").eq(mpImg).attr("data-content-theme") + ")"}).show().delay(250).animate({opacity:1},1000,function()
		{
			$(".mpimage").removeClass("mpblur");
		});
		$(".mpinfo h3").text($(".m1").eq(mpImg).attr("title"));
		$(".mpinfo h6").text("by " + $(".m1").eq(mpImg).attr("data-filter-theme"));
		$(".mpinfo p").text($(".m1").eq(mpImg).attr("data-theme"));
		$(".mpnumber h6").text("Media " + (mpImg+1) + " of " + $(".m1").length);
		if(picMode === 0)
			{
				$(".mpinfo").css({"opacity":"0"}).show().delay(500).animate({opacity:1},500);
			}
	}
	
	$(".m1").click(function()
	{
		mpImg = $(".m1").index(this);
		$(".maincontainer, .mpimage, .mpinfo, .mpbottom").finish();
		if(mpOpen === 0)
			{
				scrollPos = $(document).scrollTop();
				$(document).scrollTop(0);
				$(".maincontainer").hide();
				$(".mediaplayer").show();
				$(".mpbottom").css({"opacity":"0"}).animate({opacity:1},500);
				$(".mpimage").addClass("mpblur").css({"opacity":"0","background-image":"url(" + $(".m1").eq(mpImg).attr("data-content-theme") + ")"}).delay(250).animate({opacity:1},1000,function()
				{
					$(".mpimage").removeClass("mpblur");
				});
				$(".mpinfo").css({"opacity":"0"}).delay(1000).animate({opacity:1},500);
				$(".mpinfo h3").show().text($(".m1").eq(mpImg).attr("title"));
				$(".mpinfo h6").show().text("by " + $(".m1").eq(mpImg).attr("data-filter-theme"));
				$(".mpinfo p").show().text($(".m1").eq(mpImg).attr("data-theme"));
				$(".mpnumber h6").text("Media " + (mpImg+1) + " of " + $(".m1").length);
				picMode = 0;
				mpOpen = 1;
			}
	});
	
	$(".mpclose").click(function()
	{
		if(mpOpen === 1)
			{
				$(".maincontainer").show().css({"opacity":"0"}).animate({opacity:1},1000);
				$(".mediaplayer").hide();
				if($(window).innerWidth() > $(window).innerHeight())
					{
						$(".mpimage").css({"opacity":"0","width":"55%","height":"100%"}).animate({opacity:1},800);
						$(".mpinfo").css({"width":"35%","height":"100%"});
					}
				else if($(window).innerHeight() > $(window).innerWidth())
					{
						$(".mpimage").css({"opacity":"0","width":"100%","height":"65%"}).animate({opacity:1},800);
						$(".mpinfo").css({"width":"100%","height":"35%"});
					}
				$(".mpinfo").show();
				$(".mpcontrols").eq(0).css({"background-image":"url('images/infoon1.png')"});
				$(document).scrollTop(scrollPos);
				picMode = 0;
				mpOpen = 0;
			}
	});
	
	$(".mpimage").click(function()
	{
		$(".mpimage, .mpinfo, .mpinfo h3, .mpinfo h6, .mpinfo p").finish();
		if(picMode === 1)
			{
				if($(window).innerWidth() > $(window).innerHeight())
					{
						$(".mpimage").animate({width:"55%",height:"100%"},800);
						$(".mpinfo").animate({width:"35%",height:"100%"},800);
					}
				else if($(window).innerHeight() > $(window).innerWidth())
					{
						$(".mpimage").animate({width:"100%",height:"65%"},800);
						$(".mpinfo").animate({width:"100%",height:"35%"},800);
					}
				$(".mpinfo h3, .mpinfo h6, .mpinfo p").css({"opacity":"0"}).show().delay(800).animate({opacity:1},500);
				$(".mpcontrols").eq(0).css({"background-image":"url('images/infoon1.png')"});
				picMode = 0;
			}
	});
	
	$(".mpnav").eq(0).click(function()
	{
		if(mpImg > 0)
			{
				mpImg --;
				mediaChange();
			}
		else if(mpImg <= 0)
			{
				mpImg = $(".m1").length-1;
				mediaChange();
			}
	});
	
	$(".mpnav").eq(1).click(function()
	{
		if(mpImg < $(".mediaitem").length-1)
			{
				mpImg ++;
				mediaChange();
			}
		else if(mpImg >= $(".m1").length-1)
			{
				mpImg = 0;
				mediaChange();
			}
	});
	
	$(".mpcontrols").eq(0).click(function()
	{
		$(".mpimage, .mpinfo, .mpinfo h3, .mpinfo h6, .mpinfo p").finish();
		if(picMode === 0)
			{
				if($(window).innerWidth() > 768)
					{
						$(".mpimage").animate({width:"100%",height:"100%"},800);
						$(".mpinfo").animate({width:"0%",height:"0%"},800);
					}
				else if($(window).innerWidth() <= 768)
					{
						$(".mpimage").animate({width:"100%",height:"100%"},800);
						$(".mpinfo").animate({width:"0%",height:"0%"},800);
					}
				$(".mpinfo h3, .mpinfo h6, .mpinfo p").hide();
				$(".mpcontrols").eq(0).css({"background-image":"url('images/infooff1.png')"});
				picMode = 1;
			}
		else if(picMode === 1)
			{
				if($(window).innerWidth() > $(window).innerHeight())
					{
						$(".mpimage").animate({width:"55%",height:"100%"},800);
						$(".mpinfo").animate({width:"35%",height:"100%"},800);
					}
				else if($(window).innerHeight() > $(window).innerWidth())
					{
						$(".mpimage").animate({width:"100%",height:"65%"},800);
						$(".mpinfo").animate({width:"100%",height:"35%"},800);
					}
				$(".mpinfo h3, .mpinfo h6, .mpinfo p").css({"opacity":"0"}).show().delay(800).animate({opacity:1},500);
				$(".mpcontrols").eq(0).css({"background-image":"url('images/infoon1.png')"});
				picMode = 0;
			}
	});
});