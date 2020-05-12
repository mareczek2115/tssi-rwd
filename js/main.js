function hoveredSocial(id){
    var social = document.getElementById(id);
    switch(id){
        case "dribbble":
            social.setAttribute("src", "images/dribbble-colored.png");
            break;
        case "facebook":
            social.setAttribute("src", "images/facebook-colored.png");
            break;
        case "twitter":
            social.setAttribute("src", "images/twitter-colored.png");
            break;
    }
}

function notHoveredSocial(id){
    var social = document.getElementById(id);
    switch(id){
        case "dribbble":
            social.setAttribute("src", "images/dribbble-black.png");
            break;
        case "facebook":
            social.setAttribute("src", "images/facebook-black.png");
            break;
        case "twitter":
            social.setAttribute("src", "images/twitter-black.png");
            break;
    }
}