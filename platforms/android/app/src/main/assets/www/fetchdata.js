const quote = document.querySelector('#lblQuote');
const auth = document.querySelector('#lblAuth');
const next = document.querySelector('#btnget');
const copy = document.querySelector('#copy');
const share = document.querySelector('#share');


var dquote = '';
var dauth = '';

// document.addEventListener("offline", presentAlert() , false);

window.onload = GetData();

next.addEventListener('click', () => {
    GetData();
});




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
        buttons: [{
            text: 'Ok',
            handler: ()=>{
                navigator.app.exitApp();
            }
        }]
    });
    return await alert.present();
    
}

async function presentToast() {
    const toastController = document.querySelector('ion-toast-controller');
    await toastController.componentOnReady();
  
    const toast = await toastController.create({
      message: 'Copied successfully',
      position: 'top',
      duration: 2000
    });
    return await toast.present();
  }

copy.addEventListener('click', () => {

    cordova.plugins.clipboard.copy(quote.textContent);
    presentToast();

});

share.addEventListener('click', () => {

    navigator.share(quote.textContent, "Be Inpired, Share this quote?")

});