let host = "https://project-1-api.herokuapp.com/comments?api_key=";
let symbols = "9852548a-4738-4d73-904d-816c4b81c4ec";

axios.get(host + symbols).then(response => getIt(body,response.data));

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
   }
   console.log(getRandomNum(0, 8886));
   let body = document.getElementById("grid");
   function getIt(div, data) {
    for (i = 0; i < 101; i++) {
      var ranNum = getRandomNum(0, 8886);
      let divBody = document.createElement("div");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");


      
      let textSymbol = document.createTextNode(data[ranNum].symbol);
      h1.appendChild(textSymbol);
      h1.classList.add("ticker"); 
      divBody.appendChild(h1);
      

      let textName = document.createTextNode(data[ranNum].name);
      h2.appendChild(textName);
      h2.classList.add("coName"); 
      divBody.appendChild(h2);

      let textId = document.createTextNode(data[ranNum].iexId);
      h3.appendChild(textId);
      h3.classList.add("idNo"); 
      divBody.appendChild(h3);

      divBody.classList.add("card"); 

      div.appendChild(divBody);


    }
   }


   function lookUp() {
    var input = document.getElementById("scourBox");
    var filter = input.value.toUpperCase();
    var div = document.getElementsByClassName("card");
    for (i = 0; i < div.length; i++) {
      sText = div[i].getElementsByClassName("ticker")[0];
      sText2 = div[i].getElementsByClassName("coName")[0];
      sText3 = div[i].getElementsByClassName("idNo")[0];
      var txtValue = sText.textContent || sText.innerText;
      var txtValue2 = sText2.textContent || sText.innerText;
      var txtValue3 = sText3.textContent || sText.innerText;
      if (
        txtValue.toUpperCase().indexOf(filter) > -1 ||
        txtValue2.toUpperCase().indexOf(filter) > -1 ||
        txtValue3.toUpperCase().indexOf(filter) > -1
      ) {
        div[i].style.display = "";
      }
      else {
        div[i].style.display = "none";
      }


    }
   }


   // 9852548a-4738-4d73-904d-816c4b81c4ec