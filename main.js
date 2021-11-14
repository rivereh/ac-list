
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        fishes: null
    },
    methods: {
        getFishData: function() {
            fetch("./data/fish.json")
            .then(response => response.json())
            .then(data => (this.fishes = data));
        }
    },
    mounted: function() {
        fetch("./data/fish.json")
        .then(response => response.json())
        .then(data => (this.fishes = data));
    }
})