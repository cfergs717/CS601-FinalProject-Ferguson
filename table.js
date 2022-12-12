//loads DOM with button to populate table

document.addEventListener("DOMContentLoaded", function (event) {   
    fetch("recipes.json")
      .then((response) => response.json())
      .then((data) => {

      let dataArray = Object.values(data.NEIPA_recipe);
      console.log("dataArray: ", dataArray);

      // Create a table.
      const table = document.createElement("table");
      let tr = document.createElement('tr');

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
        console.log("length of each dataArray object:", Object.keys(element).length);

        let tr = document.createElement('tr');
        let td = document.createElement("td");
        let content = document.createTextNode(element.ingredient);

        td.appendChild(content);      
        tr.appendChild(td);

        content = document.createTextNode(element.time_to_add);
        td = document.createElement("td");
        td.appendChild(content);      
        tr.appendChild(td);

        content = document.createTextNode(element.amount);
        td = document.createElement("td");
        td.appendChild(content);      
        tr.appendChild(td);

        table.appendChild(tr);
      });

      document.getElementById("tableSpot").appendChild(table);

    });
  });
  