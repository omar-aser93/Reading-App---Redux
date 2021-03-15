export const addBooks =(title, auther) =>{
    return {
        type : 'ADD',
        payload : { title:title , auther:auther }
    };
};

export const removeBooks =(id) =>{
    return {
        type : 'REMOVE',
        payload : { id:id }
    };
};

export const editBooks =(id,title, auther) =>{
    return {
        type : 'EDITBOOK',
        payload : { id:id , title:title , auther:auther }
    };
};

export const editAuther =(id, auther ,title) =>{
    return {
        type : 'EDITAUTHER',
        payload : { id:id , auther:auther , title:title  }
    };
};

export const completedBook =(id,title, auther , isCompleted) =>{
    return {
        type : 'COMPLETED',
        payload : { id:id , title:title , auther:auther , isCompleted : isCompleted }
    };
};

