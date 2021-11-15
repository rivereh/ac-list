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
        addToChecked: function(event, name) {
            this.checked.push(name)
            localStorage.setItem("checked", this.checked)
            event.target.parentElement.remove()
        },
        resetChecked: function() {
            this.checked = []
            localStorage.setItem("checked", this.checked)
            location.reload()
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
        console.log(this.checked)
    }
})

// get current hour
function getHour() {
    var date = new Date();
    var hour = date.getHours();
    return hour;
}

// get current month
function getMonth() {
    var date = new Date();
    var month = date.getMonth();
    return month + 1;
}