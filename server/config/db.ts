let LOCAL = true;
let HostName, URI;
if(LOCAL){
    URI = "mongodb://localhost/contacts";
    HostName = "localhost";
}else{
    URI = "mongodb+srv://fouzaanshaiknissar:5y43WALi84nXWIbq@contacts.2mvrmhn.mongodb.net/?retryWrites=true&w=majority&appName=Contacts";
    HostName = "MongoDB Atlas";
}

export{URI, HostName};
export const SessionSecret = "INFT2202SessionSecret";



