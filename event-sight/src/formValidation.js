export const formValidation = (field, value)=>{
    switch(field){
        case "sid" :
            if(value.length === 8){return true}else {return false}
        
        case "password" :
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/;
            if(value.match(passwordRegex)){return true}else {return false}

        default : return true;
    }
}