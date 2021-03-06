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
             {id: 1, message: 'Yo', name: 'Mia', type: 'incoming'},
             {id: 2, message: 'Bla bla', name: 'Me', type: 'outgoing'},
             {id: 3, message: 'How are you?', name: 'Kate', type: 'incoming'},
             {id: 4, message: 'Ha ha', name: 'Alex', type: 'incoming'},
             {id: 5, message: 'Oy', name: 'Me', type: 'outgoing'}
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
             {id: 1, avaUrl: 'https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album', name: 'Mia'},
             {id: 2, avaUrl: 'https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album', name: 'Alex'},
             {id: 3, avaUrl: 'https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album', name: 'Cristy'},
             {id: 4, avaUrl: 'https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album', name: 'Kate'},
             {id: 5, avaUrl: 'https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album', name: 'Costya'},
             {id: 6, avaUrl: 'https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album', name: 'Felix'}
         ]
     }
 }

 export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
 }

 export default state;