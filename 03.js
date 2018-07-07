<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>A Simple Cart Engine using Javascript</title>
  

  <link rel="stylesheet" href="style.css">

  <style>
  
    .item{

      border:1px solid black; 
       



    }

    .productItem{

      border:1px soli black; 
      text-decoration:none; 
      background-color:orange; 
      border-radius:10px; 
      padding:12px; 
      font-size:1.2em;
      display:inline-block;



    }

    .remove{

      background-color:pink; 


    }

    td{

      text-align:center;
      padding:5px;
      border:1px solid #ddd; 




    }


    th{
      border:1px solid #ddd; 
      text-align:center; 
      font-size:1.3em;




    }

    #output2{

      margin-top:30px; 



    }

    #output{

      margin-bottom:20px; 



    }

    
  
  </style>


  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
  <!-- Please open this file using Chrome web browser-->
</head>

<body>

  <h3>============= A Simple Cart Engine : We have some cool items here, Happy Shopping :) ========================= <br></h3>
  <p>You can enter the product code and add the product to the shopping cart or you can also check all products that we have listed below. </p>

  <input type="text" id="item" value="Enter the Product Code">
  <br><br>
  <input type="button" onClick="addTheItem()" value="Add Product">


  <h3> ================= Check all products that we have listed here and add them to your shopping cart ================= </h3>
  <div id="output">  </div>

  <h2>==================== Check Your Order Information below =======================</h2>
  
  <div id="output2">

    
  </div>


  

  <script>
    //the list of all items that are provided on the site 
    //all items are stored in the array 
    //each item which is stored is an object 
    var items = [{name:"Playstation 3", details:0, cost:30000, quantity: 10}, 
    {name:"Samsung LCD", details:1, cost:10000, quantity:12}, 
    {name:"Asus ROG", details:2, cost:100000, quantity:15}, 
    {name:"Nintendo WII PINK Edition", details:3, cost:36000, quantity: 16},
    {name:"HP Envy Printer", details:4, cost:25000, quantity:20} 
    
      


    
    
    ];
    

    
    





    var html = '<br>';
    var shopcart  = [];

    window.onload = init; 


    function init(){

       

      buildItems();
      var q = document.querySelectorAll(".productItem");
      for(var x=0; x<q.length; x++){

          q[x].addEventListener("click", function(e){

            e.preventDefault();
            addToCart();


          });




      }

      outputCart();

    }

    function addToCart(){

      
      var iteminfo = event.target.dataset;  
      var itemincart = false; 
      iteminfo.qty = 1; 
      
      shopcart.forEach(function(v){

        if(v.id == iteminfo.id){

          v.qty = parseInt(v.qty) + parseInt(iteminfo.qty);
          itemincart = true;  



        }





      });

      if(!itemincart){
        
        shopcart.push(iteminfo);



      }



      
      localStorage.setItem("scart", JSON.stringify(shopcart) );
      outputCart();


    }

    function outputCart(){

      if(localStorage.getItem("scart")!= null){
        shopcart = JSON.parse(localStorage.getItem("scart"));
      
      }

      var html ='<table border="1|0"><tr style="color:blue;"><th>Your Item</th><th>Quantity</th>' + 
      '<th>Cost</th><th>Product Code</th><th>Subtotal</th><th>Options</th></tr>';

      var total = 0;

      shopcart.forEach(function(v){
        var stotal = v.qty * v.price; 
        total += stotal; 
        html += '<tr><td style="background-color:grey;">'+v.name+ '(' + v.s + ')' + '</td><td>'+v.qty+'</td><td>'+formatTotal(v.price)+'</td><td>'+v.id+'</td><td>'+formatTotal(stotal)+'</td><td><span class="remove btn" onclick="remove('+ v.id +')">Click here to remove your order(s)</span></td></tr>';




      });
      html += '<tr><td colspan=6 style="background-color:orange;">Total &nbsp;&nbsp;&nbsp;'+ formatTotal(total) +' </td></tr></table>';
      document.getElementById("output2").innerHTML = html;
     


    }

    function formatTotal(n){

      return '$' + (n/100).toFixed(2);


    }




    function buildItems(){

      var x = 0;
      items.forEach(function(v){
        html += '<div class="item"><h3>'+ v.name +  '</h3>' +
        '</div> Product Code: ' + v.details + ' &nbsp;&nbsp;<a href="#"  class="productItem" data-name="'+ v.name +'" data-s="' + v.details 
          + '" data-price="'+ v.cost + '" data-id="'+ v.details +'">Click here to add the product to your shopping Cart</a>&nbsp;&nbsp;</div>' + formatTotal(v.cost)+ '</div>';
          
          x++; 

        console.log(v);
        


      });
      
      document.getElementById("output").innerHTML += html; 


    }

    function remove(id){

      for(var x=0; x<shopcart.length; x++){

        if(shopcart[x].id ==id){

          var rem = shopcart.splice(x,1);
          console.log(rem);



        }



      }

      localStorage.setItem('scart', JSON.stringify(shopcart))
      outputCart();





    }

    

    





  
  
  </script>
  
  




</body>
</html>
