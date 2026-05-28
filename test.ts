export{};

// const intro="Hello World";
// console.log(intro);
// const tuple:[number,string]=[20,"Hello"];
// console.log(tuple);


type User={name:string;id:number};
const user1:User={name:"Rahim",id:32};
const getUserFromObj=<T>(obj:T,prop:keyof T)=>{
    console.log(obj[prop]);
}
getUserFromObj(user1,"id");

const UserRoles={
    Admin:"Admin",Editor:"Editor",Viewer:"Viewer"
}as const;
const canEdit=(role:typeof UserRoles[keyof typeof UserRoles])=>{
    return (role===UserRoles.Admin||role===UserRoles.Editor)?true: false;
};
const isEditPermissable= canEdit(UserRoles.Editor);
console.log(isEditPermissable);
//==========================================

type areaNum={height:number;weidth:number;};

// type areaStr={height:string;weidth:string;};

//this is a mapped type ;
type areaStr={               
    // [key in "height"|"weidth"]:string;    //process 1
    [key in keyof areaNum]:string;   //process 2
};
// using generic ;
type area<T>={
    [key in keyof T]:T[key] ;
};

const area1:area<areaNum>={height:2,weidth:3};