//randomly displays one of the quotes in the array
function writeRandomQuote() {
    let footer = document.getElementById("foot");
    let quotes = new Array();
    quotes[0] = "Humankind was built on beer. From the world's first writing to its first laws, " +
    "in rituals social, religious, and political, civilization is <b>soaked</b> in beer. - William Bostwick";
    quotes[1] = "Beer, if drank with moderation, softens the temper, cheers the spirit and promotes health. - Thomas Jefferson";
    quotes[2] = "Beer is proof that God loves us and wants us to be happy. - Benjamin Franklin";
    quotes[3] = "On victory, you deserve beer; in defeat, you need it. - Napoleon";
    let rand = Math.floor(Math.random()*quotes.length);
    footer.innerHTML = `<i>${quotes[rand]}</i><br><br>Copyright &copy; 2022 Colin Ferguson. All Rights Reserved.`;
}

//formats and displays current date
function showDate() {
    let d = new Date();
    let currentDay = d.getDate();
    let currentMonth = d.getMonth() + 1; //months are zero based
    let currentYear = d.getFullYear();
    document.write(`<br><b>Current Date:</b><br>${currentMonth}-${currentDay}-${currentYear}`);
}