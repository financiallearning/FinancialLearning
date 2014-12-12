$(document).ready(function(){
  
  document.getElementById("intro").addEventListener("click",function(){display_section("intro")});
  document.getElementById("data_scraping").addEventListener("click",function(){display_section("data_scraping")});
  document.getElementById("unsup").addEventListener("click",function(){display_section("unsup")});
  document.getElementById("sup").addEventListener("click",function(){display_section("sup")});
  document.getElementById("regression").addEventListener("click",function(){display_section("regression")});
  document.getElementById("conclusion").addEventListener("click",function(){display_section("conclusion")});
  document.getElementById("video").addEventListener("click",function(){display_video()});
  
  });

  function display_section(id)
{
loc = "file:///C:/Users/fyodorminakov/Documents/Website/FinancialLearning/"
var iddiv = "#" + id;
$("#icontent").attr('src', loc + id + ".html");
}

function display_video()
{
	$("#icontent").attr('src', "https://www.youtube.com/embed/QYHeKQI8Oyw");
}