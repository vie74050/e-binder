/** Sep 13 2023 
 * SME: Angela Lam
 * Updated: Vienna Ly from unknown source 
 * - fix tab-text missing issue, and tab readability
*/

$(function () {
      
    $tabtext = $(".tab-content h2");
    generateTabs($tabtext);

    $(".tab-content:not(:first)").hide();

    function generateTabs($tabtext) {
        $("body").append($('<aside class="binder-sidenav">').append($('<div class="side-tabs">')));
        let idx = 0;
        
        $tabtext.each(function () {
            let trimText = $(this).attr("title")? $(this).attr("title") : $(this).text();

            trimText = $.trim(trimText);
            
            if (trimText.length) {                
                trimText = trimText.replace(/\s+/g, " ");
                let $tab = $("<div>").addClass("tab-button tab-button-active").append($("<p>").text(trimText));
                let currentIdx = idx;

                if (idx == 0) {
                    $tab.addClass("selected");
                }
                $tab.click(function () {
                    $(".tab-content, .tab-image").hide();
                    $(`.tab-content:nth(${currentIdx}), .tab-image:nth(${currentIdx})`).show();
                    $(".side-tabs").css("border-left-color", $tab.css("background-color")); 
                    $(".selected").removeClass("selected");
                    $tab.addClass("selected");
                });
                $(".side-tabs").append($tab);
                
                idx++;
            }
            else {
                $(this).closest($(".tab-content")).remove();
            }
        });
       
    }
});