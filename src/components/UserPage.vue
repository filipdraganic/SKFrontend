<template>


    <div class="container">
        <div class="row profile">
            <div class="col-md-3">
                <div class="profile-sidebar">
                    <!-- SIDEBAR USERPIC -->
                    <div class="profile-userpic">
                        <img src="https://elysator.com/wp-content/uploads/blank-profile-picture-973460_1280-e1523978675847.png" class="img-responsive" alt="">
                    </div>
                    <!-- END SIDEBAR USERPIC -->
                    <!-- SIDEBAR USER TITLE -->
                    <div class="profile-usertitle">
                        <div class="profile-usertitle-name">
                            {{this.$store.state.trenutniuser}}
                        </div>
                        <div class="profile-usertitle-job">

                        </div>
                    </div>
                    <!-- END SIDEBAR USER TITLE -->
                    <!-- SIDEBAR BUTTONS -->
                    <div class="profile-userbuttons">
                        <button type="button" class="btn btn-success btn-sm" v-on:click="promeniboju">Follow</button>
                    </div>
                    <!-- END SIDEBAR BUTTONS -->
                    <!-- SIDEBAR MENU -->
                    <div class="profile-usermenu">
                        <ul class="nav">
                            <li class="active">
                                <a href="#">
                                    <i class="glyphicon glyphicon-home"></i>
                                    Overview </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Account Settings </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class="glyphicon glyphicon-ok"></i>
                                    Tasks </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-flag"></i>
                                    Help </a>
                            </li>
                        </ul>
                    </div>
                    <!-- END MENU -->
                </div>
            </div>
            <div class="col-md-9">
                <div class="profile-content">
<!--                    <mdb-list-group>-->
<!--                        <mdb-list-group-item href="#" data-alias="Nesto" :action="true" :active="true" id="prvi" v-on:click="console.log('AAAAAAAA')" class="flex-column align-items-start">-->
<!--                            <div class="d-flex w-100 justify-content-between" >-->
<!--                                <h5 class="mb-1">List group item heading</h5>-->
<!--                                <small>3 days ago</small>-->
<!--                            </div>-->
<!--                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>-->
<!--                            <small>Donec id elit non mi porta.</small>-->
<!--                        </mdb-list-group-item>-->
<!--                        <mdb-list-group-item href="#" :action="true" :active="false" class="flex-column align-items-start" v-on:click="console.log('AAAAAAAA')">-->
<!--                            <div class="d-flex w-100 justify-content-between">-->
<!--                                <h5 class="mb-1">List group item heading</h5>-->
<!--                                <small class="text-muted">3 days ago</small>-->
<!--                            </div>-->
<!--                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>-->
<!--                            <small class="text-muted">Donec id elit non mi porta.</small>-->
<!--                        </mdb-list-group-item>-->
<!--                        <mdb-list-group-item class="flex-column align-items-start" v-on:click="console.log('AAAAAAAA')">-->
<!--                            <div class="d-flex w-100 justify-content-between">-->
<!--                                <h5 class="mb-1">List group item heading</h5>-->
<!--                                <small class="text-muted">3 days ago</small>-->
<!--                            </div>-->
<!--                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>-->
<!--                            <small class="text-muted">Donec id elit non mi porta.</small>-->
<!--                        </mdb-list-group-item>-->
<!--                    </mdb-list-group>-->

                    <div class="list-group" id='listGroup'>
                        <a  class="list-group-item flex-column align-items-start" v-bind:class="{ 'active' : boolprvi }" v-on:click="isSelected(boolprvi) ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <br>
                        </a>
                            <div class="containerZaRadioInput">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio111" value="option1">
                                    <label class="form-check-label" for="inlineRadio111">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio222" value="option2">
                                    <label class="form-check-label" for="inlineRadio222">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio333" value="option3">
                                    <label class="form-check-label" for="inlineRadio333">3 </label>
                                </div>
                            </div>




                        <a  class="list-group-item flex-column align-items-start" v-bind:class="{ 'active' : this.booldrugi  }" v-on:click="isSelected1(booldrugi)">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <br>
                        </a>
                        <div class="containerZaRadioInput">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio11" value="option1">
                                <label class="form-check-label" for="inlineRadio11">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio22" value="option2">
                                <label class="form-check-label" for="inlineRadio22">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio33" value="option3">
                                <label class="form-check-label" for="inlineRadio33">3 </label>
                            </div>
                        </div>



                        <a  class="list-group-item flex-column align-items-start" v-bind:class="{ 'active' : this.booltreci  }" v-on:click="isSelected2(booltreci)">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <br>
                        </a>
                        <div class="containerZaRadioInput">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="option1">
                                <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio2" value="option2">
                                <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3">
                                <label class="form-check-label" for="inlineRadio3">3 </label>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mdbListGroup, mdbListGroupItem } from 'mdbvue';
    import $ from 'jquery'
    import 'jquery'

    export default {

        name: "UserPage",
        created(){
            console.log("iz Userpage = " + this.$store.state.trenutniuser)
        },
        data(){
            return{
                boolean:'true',
                boolprvi:false,
                booldrugi:false,
                booltreci:false
            }

        },
        components: {
            mdbListGroup,
            mdbListGroupItem
        },
        methods:{
            isSelected: function(i){
                //send http request to toggle subscription on service
                return this.boolprvi  = !i;

            },
            isSelected1: function(i){
                return this.booldrugi  = !i;

            },isSelected2: function(i){
                return this.booltreci  = !i;

            },

            promeniboju : function(){
                console.log("promeniBoju" + this.selected)
                // document.getElementsByTagName("prvi").setAttribute(":active", "true");

            }
        },
        mounted(){
            $(document).on('click', '#eventList .mdb-list-group-item', function(e) {
                this.promeniboju()
                console.log("nesto")

            });
            }
    }
</script>

<style scoped>

    body {
        background: #F1F3FA;
    }


    .containerZaRadioInput{
        margin-top: -25px;
        z-index: 3;
    }

    /* Profile container */
    .profile {
        margin: 20px 0;
    }

    /* Profile sidebar */
    .profile-sidebar {
        padding: 20px 0 10px 0;
        background: #fff;
    }

    .profile-userpic img {
        float: none;
        margin: 0 auto;
        width: 50%;
        height: 50%;
        -webkit-border-radius: 50% !important;
        -moz-border-radius: 50% !important;
        border-radius: 50% !important;
    }

    .profile-usertitle {
        text-align: center;
        margin-top: 20px;
    }

    .profile-usertitle-name {
        color: #5a7391;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 7px;
    }

    .profile-usertitle-job {
        text-transform: uppercase;
        color: #5b9bd1;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .profile-userbuttons {
        text-align: center;
        margin-top: 10px;
    }

    .profile-userbuttons .btn {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        padding: 6px 15px;
        margin-right: 5px;
    }

    .profile-userbuttons .btn:last-child {
        margin-right: 0px;
    }

    .profile-usermenu {
        margin-top: 30px;
    }

    .profile-usermenu ul li {
        border-bottom: 1px solid #f0f4f7;
    }

    .profile-usermenu ul li:last-child {
        border-bottom: none;
    }

    .profile-usermenu ul li a {
        color: #93a3b5;
        font-size: 14px;
        font-weight: 400;
    }

    .profile-usermenu ul li a i {
        margin-right: 8px;
        font-size: 14px;
    }

    .profile-usermenu ul li a:hover {
        background-color: #fafcfd;
        color: #5b9bd1;
    }

    .profile-usermenu ul li.active {
        border-bottom: none;
    }

    .profile-usermenu ul li.active a {
        color: #5b9bd1;
        background-color: #f6f9fb;
        border-left: 2px solid #5b9bd1;
        margin-left: -2px;
    }

    /* Profile Content */
    .profile-content {
        padding: 20px;
        background: #fff;
        min-height: 460px;
    }
</style>