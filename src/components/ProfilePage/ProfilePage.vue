<template>
    <div class="page">
        <div class="header">
            <div class="logo">Genius Profile</div>
        </div>
        <div class="profile-container">
            <div class="profile">
                <img src="" alt="">
                <div class="text">{{ this.name }} {{ this.surname }}</div>
                <div class="text">{{ this.city }}</div>
            </div>
            <div class="profile">
                <div class="row">
                    <div class="text">Your Name:</div>
                    <input type="text" id="inp-1">
                </div>

                <div class="row">
                    <div class="text">Your Surname:</div>
                    <input type="text" id="inp-2">
                </div>

                <div class="row">
                    <div class="text">Your Sity:</div>
                    <input type="text" id="inp-3">
                </div>
                <button class="submit" @click="SubmitInfo()">Submit</button>

            </div>
        </div>

        <div class="orders">
            <div class="text text-button" @click="getOrders()">Your previous orders</div>
            <SingleOrder :order_data="ORDERS" v-for="item in ORDERS" :key="item" :order_item_data="item">
            </SingleOrder>
        </div>


    </div>
</template>

<script>
import SingleOrder from './SingleOrder.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "ProfilePage",
    components: { SingleOrder },
    computed: {
        ...mapGetters([
            "ORDERS"
        ]),
    },
    props: {
        order_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        if (localStorage.getItem("user")) {
            let info = JSON.parse(localStorage.getItem("user"));
            let name = 'Welcome, ' + info.name;
            let surname = info.surname;
            let city = 'from ' + info.city;
            return {
                name,
                surname,
                city
            }
        }

        return {
            name: '',
            surname: '',
            city: ''
        }

    },
    methods: {
        SubmitInfo() {
            if (!document.getElementById("inp-1").value) {
                alert("Write your name, please");
            }
            else if (!document.getElementById("inp-2").value) {
                alert("Write your surname, please");
            }
            else if (!document.getElementById("inp-3").value) {
                alert("Write your sity, please");
            }
            else {
                let res = {
                    name: document.getElementById("inp-1").value,
                    surname: document.getElementById("inp-2").value,
                    city: document.getElementById("inp-3").value
                };
                localStorage.setItem("user", JSON.stringify(res));
                const info = JSON.parse(localStorage.getItem("user"));
                this.name = 'Welcome, ' + info.name;
                this.surname = info.surname;
                this.city = 'from ' + info.city;
            }
        },
        ...mapActions([
            "GET_ORDERS",
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART_FROM_LOCAL'
        ]),
        getOrders() {
            this.GET_ORDERS();
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API(),
        this.ADD_TO_CART_FROM_LOCAL()
    }
}
</script>

<style>
li {
    display: inline-block;
    margin: 15px 40px;
}

.profile-container {
    flex-direction: row;
    margin-top: 60px;
    justify-content: center;
    flex: auto;
    background-color: rgba(180, 135, 84, 0.1);
    padding-bottom: 30px;
}

.row {
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.text {
    font-family: SomeCoolFont;
    color: #490a43;
    font-weight: 500;
    padding-top: 7px;
    font-size: 18px;
}

.text-button {
    cursor: pointer;
}

.row {
    margin: auto;
    display: flex;
}

.total {
    font-size: 23px;
    color: #490a11;
    margin-top: 8px;
    margin-right: 30px;
}

.order {
    border-radius: 5px;
    border: none;
    background-color: #d6d8c8;
    margin-top: 8px;
    justify-items: center;
    max-height: 107px;
    width: 180px;
    cursor: pointer;
    font-size: 23px;
    color: #490a11;
    font-family: SomeCoolFont2;
}

.header {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    background-color: #d4d5cf;
}

.logo {
    padding-top: 30px;
    float: left;
    text-align: center;
    margin-right: 400px;
    font-family: SomeCoolFont;
    font-weight: 800;
    font-size: 55px;
    color: #74166a;
}

.profile {
    flex: auto;
    margin: auto;
    flex-direction: column;
}

input {
    font-family: SomeCoolFont2;
    border-radius: 10px;
    text-align: center;
    font-size: 22px;
    border: 0cm;
    margin-left: 30px;
}

.submit {
    border-radius: 5px;
    border: none;
    background-color: #d6d8c8;
    margin-top: 8px;
    justify-items: center;
    max-height: 107px;
    width: 180px;
    cursor: pointer;
    font-size: 23px;
    color: #490a11;
    font-family: SomeCoolFont2;
}

.submit:active {
    background-color: rgba(219, 88, 23, 0.329)
}
</style>