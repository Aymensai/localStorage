
function LocalS() {
    var  liste =localStorage.getItem("Pays");
    liste=liste ? liste.split(','):[];
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
     li.appendChild(t);
      document.getElementById("myUL").appendChild(li);
      liste.push(inputValue);
      localStorage.setItem("Pays",liste.toString());
    }