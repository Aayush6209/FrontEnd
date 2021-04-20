export const formValidation = (field, value)=>{
    switch(field){
        case "sid" :
            if((value.length === 8) 
            &&
            (parseInt(value.substring(2,5)) >= 101 && parseInt(value.substring(2,5)) <= 109 )
            &&
            (parseInt(value.substring(0,2)) <= parseInt(new Date().getFullYear().toString().substr(-2)) ) 
            &&
            (parseInt(value.substring(5)) < 250 ))
            {return true}else {return false}
        
        case "password" :
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/;
            if(value.match(passwordRegex)){return true}else {return false}
        
        case "email" :
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
            if((value.match(emailRegex))
                &&
                (value.split("@")[1] === "pec.edu.in")
            ){return true}else {return false}

        case "firstName" : 
            if(value.length > 0){return true}else {return false}

        case "lastName" : 
            if(value.length > 0){return true}else {return false}
        
        default : return true;
    }
}