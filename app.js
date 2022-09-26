


/*

Embed Slayer

-User unput a url in the input element and clicks the button 
-We get the url by (input.value)
-We convert the noraml url to embed url 
-We create an iframe element by js
-We add the url in the src attribute of our iframe elment we just create
-We add the correct attributes to the iframe elment to be exactly like the attribute in the youtube embed code


*/



/*

Coverting Normal url To Embeded url


Normal youtube url   :  https://www.youtube.com/watch?v=IS5ycm7VfXg
Normal youtube url 2 :  youtube.com/watch?v=IS5ycm7VfXg
Embeded youtube url  :  https://www.youtube.com/embed/QVuBbRjMw0Q
URL Id               : The Last Sequence Of The URL After The Last Dash "/" 

-Normal youtube url : is the normal url of youtube and there is another version of youtube url which is the same thing but without the https://www.
EX youtube.com/watch?v=IS5ycm7VfXg , both of them work

-Embeded youtube url : is a specific format for embeded videos i.e waht you find when you copy the embed code from the youtube as 
an iframe element and without this format the video doesn't work

-The right format of embeded youtube video is (https://www.youtube.com/embed/) + video ID which is the 
last charachters sequense in the url after the last dash EX: https://www.youtube.com/watch?v="IS5ycm7VfXg" 
we have to replace "watch" with "embed" and "?v=" with "/" 

-We cut the url that the user inputs in the input element by replace method to just the url id then add the id to
the embeded video format


*/


//getting the elements
let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByClassName("btn")[0];
let form = document.getElementsByClassName("container")[0];
let embeded = document.getElementsByClassName("embeded")[0];

/*
//cuts the url from starting of the url to the url ID and returns just the url ID EX: QVBgfdgbRjw0fgQ , The url comes from input element
let urlId = input.value.replace("https://www.youtube.com/watch?v=", "");

//the right format of embeded youtube videos
let embedUrlFormat = "https://www.youtube.com/embed/"

//conecting the embed format with the ID to give us a valid embeded video
let newUrl = embedUrlFormat + urlId; 
*/



//prevent page from loading when click the submit button in the form
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


btn.onclick = urlConvertor;

//create an iframe, add the url in src, and add attributes when clikc the button 
function urlConvertor () {
    

    //cuts the url from starting of the url to the url ID and returns just the url ID EX: QVBgfdgbRjw0fgQ , The url comes from input element
    let urlId = input.value.replace("https://www.youtube.com/watch?v=", "");

    //the right format of embeded youtube videos
    let embedUrlFormat = "https://www.youtube.com/embed/"

    //conecting the embed format with the ID to give us a valid embeded video
    let newUrl = embedUrlFormat + urlId; 

    createElement(newUrl);
    
}


function createElement (newUrl) {

    

    
    //creating iframe element and add its attributes
    let myEmbed = document.createElement("iframe");
    myEmbed.src = newUrl;
    myEmbed.title="YouTube video player";
    myEmbed.frameborder="0";
    myEmbed.allow= "autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    // myEmbed.style.display = "none"  
    embeded.appendChild(myEmbed);

    validate(newUrl);


}



function validate (newUrl) {

    console.log("logsssss");

    var col = document.getElementsByClassName("embeded")[0].children;


    if (col.length >= 1) {

        for (let i = 0; i < col.length; i++) {

            console.log(col[i].src);
            console.log(newUrl);

            if ( col[i].src === newUrl ) {

                console.log("yeeeeep");
                col[i+1].remove();  
            }
            
        }
        
        
    }
    
    
}


