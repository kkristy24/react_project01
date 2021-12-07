 let state = {
     dialogsPage: {
         dialogs: [
             {id: 1, name: 'Mia'},
             {id: 2, name: 'Alex'},
             {id: 3, name: 'Cristy'},
             {id: 4, name: 'Kate'},
             {id: 5, name: 'Constantin'}
         ],
         messages: [
             {id: 1, message: 'Yo'},
             {id: 2, message: 'Bla bla'},
             {id: 3, message: 'How are you?'},
             {id: 4, message: 'Ha ha'},
             {id: 5, message: 'Oy'}
         ]
     },
     profilePage : {
         posts : [
             {id:1, message:'Hi', likesCount:10},
             {id:2, message:'My first post', likesCount:12},
             {id:3, message:'My second post', likesCount:7}
         ]
     },
     navbarPage : {
         friends:[
             {id: 1, name: 'Mia'},
             {id: 2, name: 'Alex'},
             {id: 3, name: 'Cristy'},
             {id: 4, name: 'Kate'},
             {id: 5, name: 'Costya'},
             {id: 6, name: 'Felix'}
         ]
     }
 }

 export default state;