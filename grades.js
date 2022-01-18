
function mapping() {

    
    var a = parseInt(document.getElementById("num1").value);
    
    
    
    switch (true){
      case (a>89): 
          answer="A+";
          break;
      case (a>79): 
          answer="A";
          break;
      case (a>74):
          answer="B+";
          break;
      case (a>69):
          answer="B";
          break;
      case (a>64):
          answer="C+";
          break;
      case (a>59):
            answer="C";
            break;
      case (a>54):
          answer="D+";
          break;
      case (a>49):
          answer="D";
          break;
      case (a>39):
          answer="E";
          break;

          
      default:
          answer="F";
    }
    
    
     
       document.getElementById("output").innerHTML = answer;
    
  }
  function point(){
    var avg = parseInt(document.getElementById("num2").value);

    switch (true){
        case (avg>89): 
            result = (avg / 100) * 4;
            break;
        case (avg>79): 
            result = (avg / 100) * 4;
            break;
        case (avg>74):
            result = (avg / 100) * 4;
            break;
        case (avg>69):
            result = (avg / 100) * 4;
            break;
        case (avg>64):
            result = (avg / 100) * 4;
            break;
        case (avg>59):
            result = (avg / 100) * 4;
            break;
        case (avg>54):
            result = (avg / 100) * 4;
            break;
        case (avg>49):
            result = (avg / 100) * 4;
            break;
        case (avg>39):
            result = (avg / 100) * 4;
            break;
  
            
        default:
            result = "1.0";
        
    }
        document.getElementById("output2").innerHTML = result;
  }