function register(){

    let fname = document.forms["regForm"]["fname"].value;
    let arr1 = [];
    if(/^$/.test(fname)){
        arr1.push("first name can't be empty");
    }else if(!/^[A-Za-z0-9$_]{3,6}$/.test(fname)){
        arr1.push("minimum 3 characters and maximum 6 characters are allowed");
    }
    document.getElementById("fname_errors").innerHTML = arr1.join(",");



    let lname = document.forms["regForm"]["lname"].value;
    let arr2 = [];
    if(/^$/.test(lname)){
        arr2.push("last name can't be empty");
    }else if(!/^[A-Za-z0-9$_]{3,6}$/.test(lname)){
        arr2.push("minimum 3 characters and maximum 6 characters are allowed");
    }
    document.getElementById("lname_errors").innerHTML = arr2.join(",");

    let upwd = document.forms["regForm"]["upwd"].value;
    let arr3 = [];
    if(/^$/.test(upwd)){
        arr3.push("password can't be empty");
    }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(upwd)){
        arr3.push("Enter one upper case, one lower case ,one digit and a special symbol");
     }
    document.getElementById("upwd_errors").innerHTML = arr3.join(",");

    let confpwd = document.forms["regForm"]["confpwd"].value;
    let arr4 = [];
    if(/^$/.test(confpwd)){
        arr4.push("password can't be empty");
    }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(confpwd)){
        arr4.push("Enter one upper case one lower case one digit and special symbol");
     }
    if (upwd!= confpwd){
       arr4.push("enter same password as above");
    }
    document.getElementById("cpwd_errors").innerHTML = arr4.join(",");

    let emailid = document.forms["regForm"]["emailid"].value;
    let arr5 = [];
    if(/^$/.test(emailid)){
        arr5.push("Email can't be empty");
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailid)){
        arr5.push("Enter mail correctly");
    }
    document.getElementById("email_errors").innerHTML = arr5.join(",");

    let uage = document.forms["regForm"]["uage"].value;
    let arr6 = [];
    if(/^$/.test(uage)){
        arr6.push("Age can't be empty");
    }else if(!/^[0-9]{1,2}$/.test(uage)){
        arr6.push("Age cannot be other than number");
    }
    document.getElementById("age_errors").innerHTML = arr6.join(",");

    let gender= document.forms["regForm"]["gender"].value;
    let arr7=[];
    if(/^$/.test(gender)){
        arr7.push("Select any gender");
    }
    document.getElementById("gender_errors").innerHTML = arr7.join(",");


    let skills= document.forms["regForm"]["skills"].value;
    let arr8=[];
    if(/^$/.test(skills)){
        arr8.push("Select any skill");
    }
    document.getElementById("checkbox_errors").innerHTML = arr8.join(",");
    

    let country= document.forms["regForm"]["country"].value;
    let arr9= [];
    if(/^$/.test(country)){
        arr9.push("Select any Country");
    }
    document.getElementById("country_errors").innerHTML = arr9.join(",");
    

    let udob = document.forms["regForm"]["udob"].value;
    let arr10= [];
    if(/^$/.test(udob)){
        arr10.push("Date can't be empty");
    }
    document.getElementById("date_errors").innerHTML = arr10.join(",");

    let time = document.forms["regForm"]["time"].value;
    let arr11 = [];
    if(/^$/.test(time)){
        arr11.push("Choose a timing");
    } 
    document.getElementById("time_errors").innerHTML = arr11.join(",");

    let address= document.forms["regForm"]["address"].value;
    let arr13=[];
    if(/^$/.test(address)){
        arr13.push("Enter your address");
    }else if(!/^[A-Za-z0-9-/]{3,6}$/.test(address)){
        arr13.push("Enter address with proper characters");
    }
    document.getElementById("address_errors").innerHTML= arr13.join(",");

    let resume= document.forms["regForm"]["resume"].value;
    let arr14=[];
    if(/^$/.test(resume)){
        arr14.push("submit your resume");
    } else if(!/^(?=.*[.pdf])$/.test(resume)) 
    {
        arr14.push("**pdf files only**");
    }
    document.getElementById("resume_errors").innerHTML=arr14.join(",");







    

    





    
    
    








    return false;
}