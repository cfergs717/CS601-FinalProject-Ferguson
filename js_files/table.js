//loads DOM with button to populate table

document.addEventListener("DOMContentLoaded", function (event) {
    //const btn = document.querySelector("button");
  
    //if (btn) {
      //btn.onclick = function() {    
        fetch("recipes.json")
          .then((response) => response.json())
          .then((data) => {
  
          let dataArray = Object.values(data.NEIPA_recipe);
          console.log("dataArray: ", dataArray);
  
          // Create a table.
          const table = document.createElement("table");
          let tr = document.createElement('tr');
  
          //Grab headers (dynamically) and append to table
          /*for (let key in dataArray[0]) {        
            let th = document.createElement('th');
            let content = document.createTextNode(key);
            th.appendChild(content);
  
            tr.appendChild(th);       
          }*/
          let th1 = document.createElement('th');
          let th2 = document.createElement('th');
          let th3 = document.createElement('th');

          let content = document.createTextNode("Ingredient");
          th1.appendChild(content);
          tr.appendChild(th1);

          content = document.createTextNode("Time (when to add)");
          th2.appendChild(content);
          tr.appendChild(th2);

          content = document.createTextNode("Amount");
          th3.appendChild(content);
          tr.appendChild(th3);

          table.appendChild(tr);
  
          //Populate table with data from JSON
          dataArray.forEach(element => {
            console.log(Object.keys(element).length);
  
            let tr = document.createElement('tr');
            let td = document.createElement("td");
            let content = document.createTextNode(element.school);
  
            td.appendChild(content);      
            tr.appendChild(td);
  
            content = document.createTextNode(element.program);
            td = document.createElement("td");
            td.appendChild(content);      
            tr.appendChild(td);
  
            content = document.createTextNode(element.type);
            td = document.createElement("td");
            td.appendChild(content);      
            tr.appendChild(td);
  
            content = document.createTextNode(element.yearConferred);
            td = document.createElement("td");
            td.appendChild(content);      
            tr.appendChild(td);
  
            table.appendChild(tr);
          });
  
          document.body.appendChild(table);
  
        });
     // }
    //}
  });
  