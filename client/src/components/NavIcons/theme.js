import {NavIcons} from "./NavIcons"

export async function themes()
{
    
    var e = document.getElementById("themes");

var text = e.options[e.selectedIndex].text;

if(text=="dark" || text=="srcery");

else
var text="sunburst";
alert(text);

return text;
}