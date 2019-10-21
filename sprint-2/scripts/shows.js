let shows = [
    { dates: "Mon Dec 17 2018", venue: "Ronald Lane", location: "San Francisco, CA" },
    { dates: "Tue Jul 18 2019", venue: "Pier 3 East", location: "San Francisco, CA" },
    { dates: "Fri Jul 22 2019", venue: "View Lounge", location: "San Francisco, CA" },
    { dates: "Sat Aug 12 2019", venue: "Hyatt Agency", location: "San Francisco, CA" },
    { dates: "Fri Sep 05 2019", venue: "Moscow Center", location: "San Francisco, CA" },
    { dates: "Wed Aug 11 2019", venue: "Pres Club", location: "San Francisco, CA" },
  ];
  
  // function declaration
  function generateTableHead(table, shows) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let show of shows) {
      let th = document.createElement("th");
      let text = document.createTextNode(show);
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
        cell.classList.add("table__cell");
        let text = document.createTextNode(show[key]);
        cell.appendChild(text);        
      }

      let child = row.insertCell();
      let btn = document.createElement("button");
      btn.innerHTML = "Buy Tickets";
      child.appendChild(btn)
      child.classList.add("table__button");
      ; 
    }
  }

  function mobileTable(table, shows, keys) {
    for (show of shows) {
      let tHead = table.createTHead();
      let row = table.insertRow();
      row.className = "mobile__row";
      for (key of keys) {
        let cell = row.insertCell();
        cell.className = "mobile__keyword";
        let keyWord = document.createTextNode(key);
        let text = document.createTextNode(show[key]);
        cell.appendChild(keyWord);
        let dataCell = row.insertCell();
        dataCell.className = "mobile__cell";
        dataCell.appendChild(text);
      }
      let child = row.insertCell();
      let btn = document.createElement("button");
      btn.innerHTML = "Buy Tickets";
      child.appendChild(btn);
      child.classList.add("mobile__button");




    }
  }


  let table = document.querySelector("table");
  let showKeys = Object.keys(shows[0]);
  let width = window.innerWidth

  if (width <= 500) {
    mobileTable (table, shows, showKeys)
  }
  
  if (width > 500) {
    generateTable(table, shows);
    generateTableHead(table, showKeys);  }