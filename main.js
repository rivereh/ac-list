var app = new Vue({
    el: '#app',
    data: {
        month: getMonth(),
        hour: getHour(),
        fishes: null,
        bugs: null,
        seacreatures: null,
        showThisHour: false,
        checked: []
    },
    methods: {
        titleCase: function(str) {
            var splitStr = str.toLowerCase().split(' ')
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
            }
            return splitStr.join(' ')
        },
        getMonth: function() {
            var date = new Date();
            var month = date.getMonth();
            return month + 1;
        },
        addToChecked: function(name) {
            this.checked.push(name)
            localStorage.setItem("checked", this.checked)
        },
        removeFromChecked: function(name) {
            this.checked.splice(this.checked.indexOf(name), 1)
            localStorage.setItem("checked", this.checked)
        },
        resetChecked: function() {
            this.checked = []
            localStorage.setItem("checked", this.checked)
            location.reload()
        },
        numberWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        expand: function(event) {
            event.target.parentElement.classList.toggle("expanded")
            event.target.classList.toggle("expanded")
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

        if (localStorage.getItem("checked") != null) {
            this.checked = localStorage.getItem("checked").split(",")
        }
    }
})

function getHour() {
    var date = new Date();
    var hour = date.getHours();
    return hour;
}

function getMonth() {
    var date = new Date();
    var month = date.getMonth();
    return month + 1;
}