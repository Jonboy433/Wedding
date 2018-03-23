function createCountdown() { 
    var e = $('[data-hide-countdown="false"]#wedding-countdown'), 
    t = e.data("wedding-date"), 
    i = moment(t).startOf("day").diff(moment().startOf("day"), "days"); 
    
    if (0 === i) return e.html("Today!"); 
    
    var n = Math.abs(i), s = 0 > i ? "ago" : "to go", o = 1 != n ? "days" : "day", r = n + " " + o + " " + s; i > 0 && (r += "!"), 
    e.html(r) } 
    
    var onMainNavButtonPressed = function () { 
        $("#main-nav").toggleClass("visible"), 
        $(".main-nav-container-container").toggleClass("nav-open"), 
        $(document.body).toggleClass("nav-open") 
    }, 
        
        handleScroll = function () { 
            var e = document.getElementById("main-nav-container"), 
                t = document.getElementById("header") || document.getElementById("content"), 
                //i = e.clientHeight,
                i = 150,
                n = t.getBoundingClientRect(); 
            
                n.top <= i ? e.classList.add("fixed") : e.classList.remove("fixed") 
            }, 
        
        init = function () { 
                document.domain = window.location.hostname.match(/\.theknot.com/) ? "theknot.com" : window.location.hostname, window.location.hash && $(window.location.hash).length > 0 && $("html, body").animate({ scrollTop: $(window.location.hash).eq(0).offset().top }, 0), 
                createCountdown(), $("button.main-nav").on("click", onMainNavButtonPressed), $(".rsvp-link").on("click", segmentIoTrackRsvp), 
                $(".visit-website").on("click", segmentIoWebsiteClickThrough), 
                checkTheme(), 
                checkEditButton(), 
                checkLocationWrap(), 
                resizeCoverPhoto(), 
                disableTurbolinks() }; 
        
    window.addEventListener("scroll", handleScroll), $(function () { init() }), 
                
    $(document).on("page:load", function () { init() });