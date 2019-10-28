  function generateTableHead(table, shows) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let show of shows) {
      let th = document.createElement("th");
      let text = document.createTextNode(show);
      if (show === 'id')
      {
          th.classList.add('hidden');
      }
      th.appendChild(text);
      row.appendChild(th);
    }
  }


  function generateTable(table, shows) {
    for (let show of shows) {
      let row = table.insertRow();
      row.classList.add("table__row");
      for (key in show) {
        let cell = row.insertCell();

        if(key !== 'id')
            {
        
        cell.classList.add("table__cell");
        let text = document.createTextNode(show[key]);
        cell.appendChild(text);    
        }    

        
      }


      let child = row.insertCell();
      let btn = document.createElement("button");
      btn.innerHTML = "Buy Tickets";
      child.appendChild(btn)
      child.classList.add("table__button");
      
    }
  }


  function mobileTable(table, shows, keys) {
    for (show of shows) {
      let tHead = table.createTHead();
      let row = table.insertRow();
      row.className = "mobile__row";
      for (key of keys) {
        if(key !== 'id')
            {
        let cell = row.insertCell();
        cell.className = "mobile__keyword";
        let keyWord = document.createTextNode(key);
        let text = document.createTextNode(show[key]);
        cell.appendChild(keyWord);
        let dataCell = row.insertCell();
        dataCell.className = "mobile__cell";
        dataCell.appendChild(text);
            }
      }
      let child = row.insertCell();
      let btn = document.createElement("button");
      btn.innerHTML = "Buy Tickets";
      child.appendChild(btn);
      child.classList.add("mobile__button");



    }
  }


  let table = document.querySelector("table");
  let width = window.innerWidth;


  if (width <= 500) {
    axios.get("https://project-1-api.herokuapp.com/showdates?api_key=jj").then(result =>{
      console.log(result);
      const shows = result.data;
      let showKeys = Object.keys(result.data[0]);
      mobileTable (table, shows, showKeys);
     });
  }
  
  if (width > 500) {
    axios.get("https://project-1-api.herokuapp.com/showdates?api_key=jj").then(result =>{
      console.log(result);
      const shows = result.data;
      let showKeys = Object.keys(result.data[0]);
      generateTable(table, shows);
      generateTableHead(table, showKeys);
    
     });
    }
  