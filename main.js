
var app = new Vue({
    el: '#app',
    data: {
        month: 11,
        fishes: null,
        bugs: null,
        seacreatures: null,
    },
    methods: {
        titleCase: function(str) {
            var splitStr = str.toLowerCase().split(' ')
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
            }
            return splitStr.join(' ')
        }
    },
    mounted: function() {
        fetch("./data/fish.json")
        .then(response => response.json())
        .then(data => (this.fishes = data))

        fetch("./data/bugs.json")
        .then(response => response.json())
        .then(data => (this.bugs = data))

        fetch("./data/sea.json")
        .then(response => response.json())
        .then(data => (this.seacreatures = data))
    }
})