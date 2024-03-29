var xClickz = document.getElementById("xicon");
let tClickz = document.getElementById("ticon");
var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0];
var spinner = document.getElementById("spinz");
var noti = document.getElementById("copy-notification");

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// import {
//   getDatabase,
//   ref,
//   set,
//   query,
//   orderByChild,
//   orderByKey,
//   equalTo,
//   get,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyC17R7r9KdAcCPJeKFJhUbwsSiwNDrxzW4",
//   authDomain: "bk-rat.firebaseapp.com",
//   projectId: "bk-rat",
//   storageBucket: "bk-rat.appspot.com",
//   messagingSenderId: "1087798778587",
//   appId: "1:1087798778587:web:1b5a4da73fe0477d930afe"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const userRef = ref(database, "users");

// console.log(getAuth);

// const auth = getAuth(app);

// console.log("SEEEEEEE", auth);
console.log("Working!!!!!!!");

var retweetz = false;
var teleConf = false;
var addConf = false;
var referrals = 0;
var referralId;

window.addEventListener("load", function () {
  let currentURL = window.location.href;
  console.log(currentURL);

  let url = currentURL;
  let searchParams = new URLSearchParams(url.split("?")[1]);

  // Get the value of the 'referral_id' parameter
  let referralz = searchParams.get("referral_id");

  console.log("CurrentURRRRL", referralz !== null);

  if (referralz !== null) {
    console.log("MIDO", typeof referralz);

    // const q = query(
    //   ref(database, "users/"),
    //   orderByChild("referralId"),
    //   equalTo(referralz)
    // );

    console.log("MIDO2", referralz);

    const url = `https://api.ratsonsol.com/getref?referralId=${referralz}`;

    // console.log(snapshot.val());
    // console.log(typeof snapshot.val());

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let currentUserz = data[0];

        var tappy = `Data-${referralz}`;

        console.log("KUKUKUK", currentUserz);

        if (localStorage.getItem(tappy) === null) {
          // const q = query(
          //   ref(database, "users/"),
          //   orderByChild("referralId"),
          //   equalTo(referralz)
          // );

          // get(q).then((snapshot) => {
          //   snapshot.forEach(function (childSnapshot) {
          //     var address = childSnapshot.val().address;
          //     var telegram = childSnapshot.val().telegram;
          //     var referrals = childSnapshot.val().referrals;
          //     var referralId = childSnapshot.val().referralId;
          let increaseRef = currentUserz.referrals;
          console.log("UPdate", currentUserz);
          console.log(typeof currentUserz.referrals);
          console.log("Old 'referrals' value:", increaseRef);
        
          let conv = parseInt(increaseRef, 10);
          console.log("middle", conv);

          var newD = conv + 5; // Increase 'conv' by 5

          console.log("New 'referrals' value:", newD);
          console.log("Address:", currentUserz.address);
          console.log("Telegram:", currentUserz.telegram);
        

          // Create a new object with updated 'referrals' value
          const newData = {
            referrals: newD,
            referralId: currentUserz.referralId,
          };

          console.log("FOOOL: ", newData);

          localStorage.setItem(tappy, JSON.stringify(newData));
          updateData(newData);

          function updateData(data) {
            fetch("https://api.ratsonsol.com/updateReferrals", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data), // Convert object to JSON string
            }).then(console.log("SUCCCCCCESFUL"));
          }
        } else {
          console.log("Local storage is not empty");
        }
        console.log("URL REF", referralz);
      });

    // get(q).then((snapshot) => {});
  } else {
    console.log("URL DO NOT HAVE ID");

    // // Create a URLSearchParams object from the URL's query string
    // let searchParams = new URLSearchParams(url.split("?")[1]);

    // // Get the value of the 'referral_id' parameter
    // let referralz = searchParams.get("referral_id");
    // referralId = referralz;

    // let existingData = localStorage.getItem("Data");

    // if (existingData === null) {
    //   // Parse the existing data (assuming it's JSON)
    //   existingData = JSON.parse(existingData);

    //   // Update the 'referrals' value
    //   existingData.referrals += 1;

    //   // Save the updated data back to localStorage
    //   localStorage.setItem("Data", JSON.stringify(existingData));

    //   console.log("Referrals increased successfully:", existingData);
    // } else {
    // }
  }
});

const jsonData = {
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30,
};

var xClickedz = false;
var tClickedz = false;

xClickz.addEventListener("click", function () {
  xClickedz = true;
  xWarn.style.display = "none";
  btn1.style.color = "#4e5863";
});

tClickz.addEventListener("click", function () {
  tClickedz = true;
  tWarn.style.display = "none";
  btn2.style.color = "#4e5863";
});

var twitterUrl = document.getElementById("id_quote_retweet_link").value;
var xWarn = document.getElementById("xfollw-warning");
var tWarn = document.getElementById("twarning");
var airdropBtn = document.getElementById("airdropsubmitbtn");
var retweetWarn = document.getElementById("xwarning");
var Eachx = document.getElementById("eachz");
var Eachy = document.getElementById("eachx");

var telUserWarn = document.getElementById("tuserWarning");
var clearTask = document.getElementById("taskz");
var closeTask = document.getElementById("mover");
var Giveaway = document.getElementById("givez");

//   airdropBtn.addEventListener("click", function (event) {
//     event.preventDefault()

//     if(xClickedz ){

//         if(tClickedz){

//             if (retweetUrl.length > 40){
//                 retweetz = true

//                 // if(telUsername.length > 3){

//                 // }else{
//                 //     telUserWarn.innerHTML = 'Please input a valid username'
//                 // }

//             }else{
//                 retweetWarn.innerHTML = "Please input a valid link"

//             }
//         }else{
//             tWarn.innerHTML = 'You have not Join our Telegram community'
//         }

//     }else{
//         xWarn.innerHTML='ERROR! You have not Follow us on Twitter'

//     }

//     if(retweetz){
//         retweetWarn.style.display = "none"
//     }
//   });

// airdropBtn.addEventListener("click", function (event) {
//     event.preventDefault()
//     var retweetUrl = document.getElementById('id_quote_retweet_link').value.length
//     var telUsername = document.getElementById('id_telegram_username').value
//     var addValue = document.getElementById('id_solana_wallet').value
//     var addWarn = document.getElementById('addwarning')

//     if(xClickedz ){

//         if( retweetUrl > 40 ){

//            retweetz = true

//             if (tClickedz){

//                 if(telUsername.length > 3){
//                     teleConf = true

//                     if(addValue.length > 30){
//                         addConf = true

//                     }
//                     else{
//                         addWarn.innerHTML = "Please Enter a valid Address"
//                     }
//                 }else{
//                     telUserWarn.innerHTML = 'Please Enter a valid username'
//                 }

//             }else{
//                 tWarn.innerHTML = 'You have not Join our Telegram community'

//             }
//         }else{
//             retweetWarn.innerHTML = "Please Enter a valid link"
//             console.log(retweetUrl)

//         }

//     }else{
//         xWarn.innerHTML='ERROR! You have not Follow us on Twitter'

//     }

//     if(retweetz){retweetWarn.style.display = "none"}
//     if(teleConf){telUserWarn.style.display = "none"}
//     if(addConf){addWarn.style.display = "none"}

//   });

// Add event listeners to input fields for validation on change
document
  .getElementById("id_quote_retweet_link")
  .addEventListener("input", function () {
    validateInputs();
  });

document
  .getElementById("id_telegram_username")
  .addEventListener("input", function () {
    validateInputs();
  });

document
  .getElementById("id_solana_wallet")
  .addEventListener("input", function () {

  });

// Event listener for the airdropBtn click event
airdropBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateInputs();
});

// Function to validate inputs
function validateInputs() {
  var retweetUrl = document
    .getElementById("id_quote_retweet_link")
    .value.trim();
  var telUsername = document
    .getElementById("id_telegram_username")
    .value.trim();
  var addValue = document.getElementById("id_solana_wallet").value.trim();
  var addWarn = document.getElementById("addwarning");

  var retweetWarn = document.getElementById("xwarning");
  var tWarn = document.getElementById("twarning");
  var xWarn = document.getElementById("xfollw-warning");
  var telUserWarn = document.getElementById("tuserWarning");

  var retweetz = false;
  var teleConf = false;
  var addConf = false;

  if (!xClickedz) {
    xWarn.innerHTML = "ERROR! You have not Follow us on Twitter";
  }

  if (retweetUrl.length > 40) {
    retweetz = true;
    retweetWarn.style.display = "none";
  } else {
    retweetz = false;
    retweetWarn.innerHTML = "Please enter a valid link";
    retweetWarn.style.display = "block";
  }

  if (!tClickedz) {
    tWarn.innerHTML = "You have not Join our Telegram community";
  }

  if (telUsername.length > 3) {
    teleConf = true;
    telUserWarn.style.display = "none";
  } else {
    teleConf = false;
    telUserWarn.innerHTML = "Please enter a valid username";
    telUserWarn.style.display = "block";
  }

  if (addValue.length > 30) {
    addConf = true;
    addWarn.style.display = "none";
  } else {
    addConf = false;
    addWarn.innerHTML = "Please enter a valid address";
    addWarn.style.display = "block";
  }

  // Check if all validations pass
  if (xClickedz && tClickedz && retweetz && teleConf && addConf) {
    // Proceed with your logic here
    //addValue is the Address number

    function reader() {
      // console.log("READDDDD", currentUser[addValue]?.address)

      // console.log(currentUser);
      // var currentAddress = currentUser?.address;

      // console.log(currentUser?.referralId);

      // console.log(addValue !== currentAddress);

      var wow = "";
      // const q = query(
      //   ref(database, "users/"),
      //   orderByChild("address"),
      //   equalTo(addValue)
      // );

      const url = `https://api.ratsonsol.com/getdata?address=${addValue}`;

      // console.log(snapshot.val());
      // console.log(typeof snapshot.val());

      airdropBtn.disabled = true;
      airdropBtn.innerText = "Processing...";

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Handle successful response data
          console.log("New DATAA", typeof data[0] === "undefined");
          // Process the user data as needed

          let currentUserz = data[0];

          wow = currentUserz;
          // checkerz(wow); // Pass wow as an argument to checkerz
          // console.log("WOOOOOOW", window.wow);
          console.log("Windoooo", wow);
          console.log("GIIIIII", typeof wow === "object" && wow === null);

          if (typeof data[0] === "undefined") {
            console.log("NEW USER!!!!!");
            // alert("ERROR: Address mismatch");
            referralId = generateShortUUID();
            referrals = 0;

            var data = {
              address: addValue,
              telegram: telUsername,
              referrals: referrals,
              referralId: referralId,
            };

            // let jsonString = JSON.stringify(data); //Json covert data

            function sendDataToFirebase(data) {
              // set(ref(database, "users/" + addValue), data)
              //   .then()
              //   .catch((error) => {
              //     alert(error);
              //   });

              fetch("https://api.ratsonsol.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Convert object to JSON string
              }).then(updateUI(referralId, referrals));
            }

            // Example usage: send JSON data to Firebase
            sendDataToFirebase(data);

            // var tappy = `Data-${referralId}`

            // if (localStorage.getItem(tappy) === null) {
            //   localStorage.setItem(tappy, JSON.stringify(data));
            // } else {
            //   console.log("Local storage is not empty");
            // }
          } else {
            console.log("OLD USER!!!!!");

            let newRef = "EMpty";
            let newReferers = 0;

            // let currentUser;
            // const q = query(
            //   ref(database, "users/"),
            //   orderByChild("address"),
            //   equalTo(addValue)
            // );

            // get(q).then((snapshot) => {
            //   console.log(snapshot.val());
            //   currentUser = snapshot.val();
            //   // console.log("CURRRRRRENT", currentUser[addValue]);
            //   var wow = currentUser[addValue];
            // reader(fine);
            console.log("CURRRRRRENT", wow?.referrals);

            newRef = wow?.referralId;
            newReferers = wow?.referrals;

            console.log("Inside block", wow?.address);

            var tappy = `Data-${newRef}`;

            // if (localStorage.getItem(tappy) === null) {
            //   localStorage.setItem(tappy, JSON.stringify(wow));
            // } else {
            //   console.log("Local storage is not empty");
            // }
            updateUI(newRef, newReferers);
          }
        });
    }

    reader();

    // let myData = localStorage.getItem('Data');

    //   myData = JSON.parse(myData)

    //   console.log(myData)
    function updateUI(referralId, referrals) {
      Giveaway.innerHTML = "Successfully Participated";
      clearTask.style.display = "none";
      closeTask.style.display = "none";

      let paragraph = document.createElement("p");

      let strongElement = document.createElement("strong");
      strongElement.textContent = "Referrals ID:";
      paragraph.appendChild(strongElement);

      paragraph.appendChild(document.createTextNode(` ${referralId}`));

      paragraph.setAttribute("id", "success");

      let form = document.getElementById("airdrop-form");

      form.appendChild(paragraph);

      let Newparagraph = document.createElement("p");
      var old = document.getElementById("success");
      let strongElement2 = document.createElement("strong");
      strongElement2.textContent = "RAT BALANCE :";
      Newparagraph.appendChild(strongElement2);
      Newparagraph.appendChild(document.createTextNode(" 8000 $RAT"));
      Newparagraph.setAttribute("id", "ratu");
      old.appendChild(Newparagraph);

      let Newparagraph2 = document.createElement("p");
      var old = document.getElementById("success");
      let strongElement3 = document.createElement("strong");
      strongElement3.textContent = "Referral Points : ";
      Newparagraph2.appendChild(strongElement3);
      Newparagraph2.appendChild(document.createTextNode(` ${referrals}`));
      Newparagraph2.setAttribute("id", "ref");
      old.appendChild(Newparagraph2);

      let Newparagraph3 = document.createElement("p");
      var old = document.getElementById("success");
      let strongElement4 = document.createElement("strong");
      strongElement4.textContent = "Share Referral Link :";
      Newparagraph3.appendChild(strongElement4);
      Newparagraph3.setAttribute("id", "shareref");
      old.appendChild(Newparagraph3);

      let Newparagraph4 = document.createElement("p");
      var old = document.getElementById("success");
      Newparagraph4.textContent = "Share your referral link:";
      Newparagraph4.setAttribute("id", "sharetxt");
      old.appendChild(Newparagraph4);

      let inputElement = document.createElement("textarea");
      inputElement.setAttribute("type", "text");
      inputElement.setAttribute("name", "Refinput");
      inputElement.setAttribute("id", "Inputref");
      inputElement.readOnly = true;
      // Make the textarea resizable
      inputElement.style.resize = "both";
      inputElement.value = `www.ratsonsol.com/airdrop?referral_id=${referralId}`;
      old.appendChild(inputElement);

      let Newparagraph5 = document.createElement("p");
      var old = document.getElementById("success");
      Newparagraph5.textContent = "Copy";
      Newparagraph5.setAttribute("id", "CopyBtn");
      old.appendChild(Newparagraph5);

      Newparagraph5.addEventListener("click", function () {
        var copyText = document.querySelector("#Inputref");
        copyText.select();
        document.execCommand("copy");
        noti.style.display = "block";
        setTimeout(function () {
          noti.style.display = "none";
        }, 1500);
      });

      let Newparagraph6 = document.createElement("p");
      let imageElement = document.createElement("img");
      imageElement.src = "./twitter.png";
      var old = document.getElementById("success");
      Newparagraph6.appendChild(imageElement);

      Newparagraph6.textContent = "Share on Twitter";
      Newparagraph6.setAttribute("id", "TwitterBtn");
      old.appendChild(Newparagraph6);

      Newparagraph6.addEventListener("click", function () {
        window.open(
          `
      http://twitter.com/share?text=AIRDROP GIVEAWAY, Win 20,000 $RAT EACH FOR TOP 500 REFERRAL&url=https://www.ratsonsol.com/airdrop?referral_id=${referralId}`,
          "_blank"
        );
      });
    }

    // if (false) {
    //   alert('SEEEEE')

    //   //featch data
    // } else {
    //   if (localStorage.getItem("Data") !== null) {
    //     let shortUUID = generateShortUUID();
    //     referralId = shortUUID;
    //   }
    //   let shortUUID = generateShortUUID();
    //   var data = {
    //     address: addValue,
    //     telegram: telUsername,
    //     referrals: referrals,
    //     referralId: shortUUID,
    //   };

    //   let jsonString = JSON.stringify(data); //Json covert data

    //   localStorage.setItem("Data", jsonString);
    // }
  }
}

function generateShortUUID() {
  let uuid = "";
  for (let i = 0; i < 10; i++) {
    uuid += Math.floor(Math.random() * 16).toString(16);
  }
  return uuid;
}

var logBtn = document.getElementById("btnLog");
var logDash = document.getElementById("logCot");
var LoginSub = document.getElementById("Logsub");
var loginErr = document.getElementById("logError");

logBtn.addEventListener("click", function () {
  logDash.style.display = "block";
  closeTask.style.display = "none";
  closeTask.style.visibility = "hidden";
  Giveaway.style.display = "none";
  Eachx.style.display = "none";
  Eachy.style.display = "none";
  clearTask.innerHTML = "Login To Your $RAT Dashboard";
});

LoginSub.addEventListener("click", function (event) {
  event.preventDefault();
  validateLogin();
});

document.getElementById("logPut").addEventListener("input", function () {
  validateLogin();
});

function validateLogin() {
  var LogInfo = document.getElementById("logPut").value.trim();
  var checkNotEmpty = false;
  var userExist = false;

  if (LogInfo === "") {
    loginErr.innerHTML = "Enter your Solana wallet";
  } else {
    checkNotEmpty = true;
    loginErr.innerHTML = ""; // Clear error message when input is not empty
  }

  if (checkNotEmpty) {
    // const q = query(
    //   ref(database, "users/"),
    //   orderByChild("address"),
    //   equalTo(LogInfo)
    // );

    const url = `https://api.ratsonsol.com/getdata?address=${LogInfo}`;

    // console.log(snapshot.val());
    // console.log(typeof snapshot.val());

    LoginSub.disabled = true;
    LoginSub.innerText = "Logging...";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || data.length === 0) {
          throw new Error("User does not exist");
        }
        let newLogdata = data[0];
        var address = newLogdata.address;
        var telegram = newLogdata.telegram;
        var referrals = newLogdata.referrals;
        var referralId = newLogdata.referralId;

        updateUI(referralId, referrals);

        function updateUI(referralId, referrals) {
          logDash.style.display = "none";
          Giveaway.innerHTML = "Successfully Participated";
          clearTask.style.display = "none";
          closeTask.style.display = "none";

          let paragraph = document.createElement("p");

          let strongElement = document.createElement("strong");
          strongElement.textContent = "Referrals ID:";
          paragraph.appendChild(strongElement);

          paragraph.appendChild(document.createTextNode(` ${referralId}`));

          paragraph.setAttribute("id", "success");

          let form = document.getElementById("airdrop-form");

          form.appendChild(paragraph);

          let Newparagraph = document.createElement("p");
          var old = document.getElementById("success");
          let strongElement2 = document.createElement("strong");
          strongElement2.textContent = "RAT BALANCE :";
          Newparagraph.appendChild(strongElement2);
          Newparagraph.appendChild(document.createTextNode(" 8000 $RAT"));
          Newparagraph.setAttribute("id", "ratu");
          old.appendChild(Newparagraph);

          let Newparagraph2 = document.createElement("p");
          var old = document.getElementById("success");
          let strongElement3 = document.createElement("strong");
          strongElement3.textContent = "Referral Points : ";
          Newparagraph2.appendChild(strongElement3);
          Newparagraph2.appendChild(document.createTextNode(` ${referrals}`));
          Newparagraph2.setAttribute("id", "ref");
          old.appendChild(Newparagraph2);

          let Newparagraph3 = document.createElement("p");
          var old = document.getElementById("success");
          let strongElement4 = document.createElement("strong");
          strongElement4.textContent = "Share Referral Link :";
          Newparagraph3.appendChild(strongElement4);
          Newparagraph3.setAttribute("id", "shareref");
          old.appendChild(Newparagraph3);

          let Newparagraph4 = document.createElement("p");
          var old = document.getElementById("success");
          Newparagraph4.textContent = "Share your referral link:";
          Newparagraph4.setAttribute("id", "sharetxt");
          old.appendChild(Newparagraph4);

          let inputElement = document.createElement("textarea");
          inputElement.setAttribute("type", "text");
          inputElement.setAttribute("name", "Refinput");
          inputElement.setAttribute("id", "Inputref");
          inputElement.readOnly = true;
          // Make the textarea resizable
          inputElement.style.resize = "both";
          inputElement.value = `www.ratsonsol.com/airdrop?referral_id=${referralId}`;
          old.appendChild(inputElement);

          let Newparagraph5 = document.createElement("p");
          var old = document.getElementById("success");
          Newparagraph5.textContent = "Copy";
          Newparagraph5.setAttribute("id", "CopyBtn");
          old.appendChild(Newparagraph5);

          Newparagraph5.addEventListener("click", function () {
            var copyText = document.querySelector("#Inputref");
            copyText.select();
            document.execCommand("copy");
            noti.style.display = "block";
            setTimeout(function () {
              noti.style.display = "none";
            }, 1500);
          });

          let Newparagraph6 = document.createElement("p");
          let imageElement = document.createElement("img");
          imageElement.src = "./twitter.png";
          var old = document.getElementById("success");
          Newparagraph6.appendChild(imageElement);

          Newparagraph6.textContent = "Share on Twitter";
          Newparagraph6.setAttribute("id", "TwitterBtn");
          old.appendChild(Newparagraph6);

          Newparagraph6.addEventListener("click", function () {
            window.open(
              `
              http://twitter.com/share?text=AIRDROP GIVEAWAY, Win 20,000 $RAT EACH FOR TOP 500 REFERRAL&url=https://www.ratsonsol.com/airdrop?referral_id=${referralId}`,
              "_blank"
            );
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        loginErr.innerHTML = "Error: " + error.message; // Display error message
      });

    // get(q).then((snapshot) => {

    // });
  }
}
