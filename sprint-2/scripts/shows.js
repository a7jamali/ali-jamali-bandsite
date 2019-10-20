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
      for (key in show) {
        let cell = row.insertCell();
        let text = document.createTextNode(show[key]);
        cell.appendChild(text);        
      }

      let child = row.insertCell();
      let btn = document.createElement("button");
      btn.innerHTML = "Pem";
      child.appendChild(btn); 
    }
  }

  let table = document.querySelector("table");
  let showKeys = Object.keys(shows[0]);
  generateTable(table, shows);
  generateTableHead(table, showKeys);
  