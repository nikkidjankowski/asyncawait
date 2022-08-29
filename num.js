async function getFavInfo(x){
try {
    console.log("starting");
    let url = `http://numbersapi.com/${x}?json`
    let num = await $.getJSON(url);
    console.log("all done");
    console.log(num.text);
    } catch(e){
        console.log("no");
    }
};
getFavInfo(7);



async function getAllFavs(){
    try {
        console.log("starting");
        let arr = [7, 28, 23];
        let url = `http://numbersapi.com/${x}?json`
        let num = await $.getJSON(url);
        console.log("all done");
        console.log(num.text);
        } catch(e){
            console.log("no");
        }
    };
    getFavInfo(7);