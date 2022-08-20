/**
 * Banner selector
 * 
 * It selects a banner with the parameters color and darkmode (enabled or disabled)
 * @param {string} colormode
 * @param {boolean} darkmode 
 * @return {path} It returns a banner path
 */
module.exports = (colormode, darkmode) => {
    this
    function getColorPath() {
        if (colormode == purple) {
            return "purpel";
        } else if (colormode == blue) {
            return "blue";
        } else if (colormode == red) {
            return "red";
        } else return green;
    };
    function getDarkModePath() {
        return darkmode ? "dark" : "light";
    };

    function selectBanner() {
        return __dirname+"images/branding/"+getDarkModePath()+"/banner_"+getColorPath()+"_logo.png";
    };
};