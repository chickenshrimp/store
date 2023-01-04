<template>
    <div class="page">
        <div class="header">
            <div class="logo">Genius Profile</div>
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

        <div class="orders">
            <div class="text" @click="getOrders()">Your previous orders</div>
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
    methods: {
        SubmitInfo() {
            if (!sessionStorage.getItem("name")) {
                if (!document.getElementById("inp-1").value) {
                    alert("Write your name, please");
                }
                if (!document.getElementById("inp-2").value) {
                    alert("Write your surname, please");
                }
                if (!document.getElementById("inp-3").value) {
                    alert("Write your sity, please");
                }
                let res = [];
                res.push(document.getElementById("inp-1").value);
                res.push(document.getElementById("inp-2").value);
                res.push(document.getElementById("inp-3").value);
                sessionStorage.setItem("user", JSON.stringify(res));

                document.getElementById('t-1') ;
            }
        },
        ...mapActions([
            "GET_ORDERS"
        ]),
        getOrders() {
            this.GET_ORDERS();
        }
    }
}
</script>

<style>
li {
    display: inline-block;
    margin: 15px 40px;
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
    margin-top: 60px;
    flex-direction: column;
    justify-content: center;
    flex: auto;
    background-color: rgba(180, 135, 84, 0.1);
    padding-bottom: 30px;
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
</style>