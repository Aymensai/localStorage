
var votemeriem =localStorage.getItem('votemeriem');
document.getElementById("B.Meriem").addEventListener("click", function(ev){
   var V =localStorage.getItem("votemeriem");
   localStorage.setItem("votemeriem",votemeriem++);
   document.getElementById("voteMeriem").innerHTML =V;
  
});
var votewajdy =localStorage.getItem('votewajdy');
  document.getElementById("B.Wajdy").addEventListener("click", function(ev){
var V =localStorage.getItem("votewajdy");
localStorage.setItem("votewajdy",votewajdy++);
document.getElementById("voteWajdy").innerHTML =V;


  });
  var voteemir =localStorage.getItem('voteemir');
  document.getElementById("B.Emir").addEventListener("click", function(ev){
    var V =localStorage.getItem("voteemir");
    localStorage.setItem("voteemir",voteemir++);
    document.getElementById("voteEmir").innerHTML =V;
    
  });
  function reset() {
    localStorage.setItem("votemeriem",0);
    localStorage.setItem("votewajdy",0);
    localStorage.setItem("voteemir",0);
    
    
  }
  function load() {
    document.getElementById("voteEmir").innerHTML=localStorage.getItem("voteemir");
  }