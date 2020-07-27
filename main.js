const vm = new Vue({
    el:'#app',
    data:{
        result:"誰かのエールで夢を叶えよう",
        yellResult:[
            
        ]
    },
    mounted :function(){
        axios({
            "method":"GET",
            "url":"https://zisyuu.microcms.io/api/v1/yell1/{CONTENT_ID}?depth=2",
            "headers":{
            "x-rapidapi-key":"b1112041-04c4-4c90-a8cb-0b08a82d177e",
            }
            })
            .then(response => this.yellResult = response.data)
            .catch(response => console.log(response))
    },
    methods:{
        yellrandom:function(){
            const num = Math.floor(Math.random()*this.yellResult.length);
            this.result = this.yellResult[num];
        }
    },

    
})

const ns = new Vue({
    el:'group',
    data:{
        name:''
    },

    methods : {
        createNewUser:function(){
        axios.post('https://jsonplaceholder.typicode.com/users',{
            name: this.name
        })
        .then(response => this.users.unshift(response.data))
        .catch(response => console.log(response))
        }
    },
});