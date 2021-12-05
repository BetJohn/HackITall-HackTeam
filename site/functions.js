function mySearchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    updateCompany(input);
}
  
  
  let text = "";
  for (i in top500)
      text+= "<li><button width:1080px><a >"+ top500[i] + "</button></a></li>"
  document.getElementById("myUL").innerHTML = text;
  
  function updateCompany(company){
      compId = company;
      document.getElementById("demo").innerHTML = compId;
      updateGraph();
  }
  
  function dayUpdate(){
      startDay= document.getElementById("UpdateStartDayId").value;
      finalDay= document.getElementById("UpdateFinalDayId").value;
      updateGraph();
  }
  
  
  function updateGraph(){
      var labels = database[compId].map(function(e) {
         return e.Date;
      });
      var Open = database[compId].map(function(e) {
         return e.Open;
      });;
      var Close = database[compId].map(function(e) {
         return e.Close;
      });;
      var Volume = database[compId].map(function(e) {
         return e.Volume;
      });;
  
      var ctx = canvas.getContext('2d');
      var config = {
         type: 'line',
         data: {
            labels: labels.slice(startDay, finalDay),
            datasets: [{
           label: 'open',
           data: Open.slice(startDay, finalDay),
           backgroundColor: 'rgba(50, 69, 204, 0.3)',
           borderColor: 'rgba(0,0,0,0.7)'
            },{
           label: 'close',
           data: Close.slice(startDay, finalDay),
           backgroundColor: 'rgba(0, 119, 204, 0.3)',
           borderColor: 'rgba(0,0,0,0.7)'
            }
      ]}};
  
      var chart = new Chart(ctx, config);
  
      var ctx = canvas2.getContext('2d');
      var config = {
         type: 'bar',
         data: {
            labels: labels.slice(startDay, finalDay),
            datasets: [{
           label: 'Volume',
           data: Volume.slice(startDay, finalDay),
           backgroundColor: 'rgba(26, 26, 0, 0.3)'
            }
            
            ]
         }
      };
  
      var chart = new Chart(ctx, config);
  }
  