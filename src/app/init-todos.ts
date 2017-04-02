export class Init{
     load(){
         if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
             console.log('no todos found... creating');
             var todos = [
                 {
                     text: 'yahoo'
                 },
                 {
                     text: 'koi mujhe'
                 },
                 {
                     text: 'jangli kahe'
                 }
             ];
             localStorage.setItem('todos', JSON.stringify(todos));
         } else{
             console.log("Found Todos...");
         }
     }
}