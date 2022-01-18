module.exports = {

    posts: [
        // {id: "ahsua",
        //  title: "teste do mural",
        //  description: "Descrição teste"}
    ],

    getAll(){
        return this.posts
    },

   newPost(title, description){

        this. posts.push({id:generateID(), title, description})
   },

   deletPost(id){

   }

}
// 36 é o alfabeto + numeros de 0 a 9
// (2, 9) é começar da posição 2 e pegar os 9 proximos numeros
function generateID(){
    return Math.random().toString(36).substr(2, 9)
}