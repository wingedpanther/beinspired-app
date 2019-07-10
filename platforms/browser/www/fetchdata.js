const quote = document.querySelector('#lblQuote');
const auth = document.querySelector('#lblAuth');
const next = document.querySelector('#btnget');
const copy = document.querySelector('#copy');
const share = document.querySelector('#share');


var dquote = '';
var dauth = '';

// window.onload = GetData();
window.onload = IsInternetAvailanble();
next.addEventListener('click', () => {
    GetData();
});

function IsInternetAvailanble() {
    document.addEventListener("deviceready", function (e) {
        // GetData();
        console.log("Net Available");
        document.addEventListener("offline", function (e) {
            // presentAlert();
        console.log("Net NOT Available");


        }, false);
    }, false);
}


function GetData() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
        function (data, textStatus, jqXHR) {
            quote.innerHTML = '<ion-icon name="quote"></ion-icon> ' + data.quoteText + '<ion-icon name="quote"></ion-icon>';
            dauth = data.quoteAuthor
            if (dauth === "") {
                dauth = "Unknown"
            }
            auth.innerHTML = '<ion-icon name="person"></ion-icon> By, ' + dauth;
        }
    );


};
async function presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();

    const alert = await alertController.create({
        header: 'No internet connection',
        message: 'Please check your internet connectivity.',
        buttons: ['OK']
    });
    return await alert.present();
}


copy.addEventListener('click', () => {

    cordova.plugins.clipboard.copy(quote.textContent);

});

share.addEventListener('click', () => {

    navigator.share(quote.textContent, "Be Inpired, Share this quote?")

});