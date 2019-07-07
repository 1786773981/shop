<template>
  <div class="OrderSuccess">
    <div>
      <div class="container">
        <div class="page-title-normal">
          <!-- <h2 class="page-title-h2"><span>检查</span></h2> -->
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li>
              <span>确认</span> 地址
            </li>
            <li>
              <span>确定</span> 订单
            </li>
            <li class="cur">
              <span>查看</span> 订单
            </li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic">
            <img src="static/ok-2.png" alt />
          </div>
          <div class="order-create-main">
            <h3>
              祝贺你!
              <br />你的订单创建成功!
            </h3>
            <p>
              <span>订单编号：{{orderList.order_no}}</span>
              <span>订单总价：{{orderList.total_price}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <a href="javascript:;" class="btn btn--m" @click="goCart">返回购物车</a>
              </div>
              <div class="btn-r-wrap">
                <a href="javascript:;" class="btn btn--m">订单列表</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
// 引入css
import "@/assets/css/base.css";
import "@/assets/css/checkout.css";
import {orderDetailApi } from "@/api/index.js";

// 引入组件
import axios from "axios";

export default {
  // 模型初始化完毕后请求接口
  created() {
    this.initData();
  },
  // 定义模型数据
  data() {
    return {
      orderList: {} //订单详情数据
    };
  },
  // 声明普通方法
  methods: {
    // 回到购物车页
    goCart(){
      this.$router.push({ path: "/cart" });
    },
    // 封装axios以便调用（请求接口数据渲染订单详情页）
    initData() {
      let userId = localStorage.getItem("userId"); //获取本地存储的userId
      let orderId = this.$route.params.id;
      orderDetailApi({
        // 传参用户ID以及订单ID
        userId: userId,
        orderId:orderId
      })
        .then(res => {
          this.orderList = res.data;
        })
    }
  }
};
</script>
 
<style scoped>
</style>