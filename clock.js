var clock = new Vue({
    el: '#time' ,
    data: {
        hour: '',
        minute: '' ,
        second: '' ,
    },

    methods: {
        setClock () {
            var date = new Date();
            this.hour = new Date().getHours();
            this.minute = new Date().getMinutes() ;
            this.second = new Date().getSeconds() ; 
        }
    },
    mounted () {
        setInterval(this.setClock, 1000);
   }
});

