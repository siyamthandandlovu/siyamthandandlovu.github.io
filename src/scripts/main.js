console.log('Waasssuuuuppppp 😝😝');
console.log('Want to reach out? ', '@siyamthandafr on ig');
//====================================================
// READ MORE
//====================================================

function readMore(textID) {
    const text = document.getElementById(textID);
    text.className="collapse-false";
}

//====================================================
// READ LESS
//====================================================
function readLess(textID) {
    const text = document.getElementById(textID);
    text.className="collapse";
}