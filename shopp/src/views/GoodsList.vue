<template>
  <div class="GoodsList">
    <Header></Header>
    <div class="nav-breadcrumb-wrap">
      <div class="container">
        <Bread>
          <template v-slot:bread>
            <a href="/">首页</a>
            <span>商品列表</span>
          </template>
        </Bread>
      </div>
    </div>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default cur">默认</a>
          <a href="javascript:void(0)" class="price" :class="{'sort-up':order}" @click="goodsorder">
            价格
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short" />
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop">过滤规则</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>价格:</dt>
              <dd>
                <a
                  href="javascript:void(0)"
                  v-bind:class="{'cur':maxprice=='all'}"
                  @click="goodsWhere('all','all')"
                >All</a>
              </dd>
              <dd>
                <a
                  href="javascript:void(0)"
                  v-bind:class="{'cur':maxprice==100}"
                  @click="goodsWhere(0,100)"
                >0 - 100</a>
              </dd>
              <dd>
                <a
                  href="javascript:void(0)"
                  v-bind:class="{'cur':maxprice==500}"
                  @click="goodsWhere(100,500)"
                >100 - 500</a>
              </dd>
              <dd>
                <a
                  href="javascript:void(0)"
                  v-bind:class="{'cur':maxprice==1000}"
                  @click="goodsWhere(500,1000)"
                >500 - 1000</a>
              </dd>
              <dd>
                <a
                  href="javascript:void(0)"
                  v-bind:class="{'cur':maxprice==2000}"
                  @click="goodsWhere(1000,2000)"
                >1000 - 2000</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <!-- li标签通过接口数据遍历渲染 -->
                <li v-for="(goods,index) in goodslist" :key="index">
                  <div class="pic">
                    <a href="#">
                      <img :src="goods.img2" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{goods.title}}</div>
                    <div class="price">{{goods.price}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(goods.id)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录遮罩框 -->
    <Modal :isMdShow="isshow" @close="closeModal"></Modal>
    <!-- 加入购物车弹框1 -->
    <Modal :isMdShow="isCartErrorShowFlag" @close="isCartErrorShowFlag=false">
      <template v-slot:main>请先登录，否则无法加入到购物车中!</template>
      <template v-slot:btnGroup>
        <a class="btn btn--m" href="javascript:;" @click="isCartErrorShowFlag=false">关闭</a>
      </template>
    </Modal>
    <!-- 加入购物车弹框2 -->
    <Modal :isMdShow="isCartOkShowFlag" @close="isCartOkShowFlag=false">
      <template v-slot:main>
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok" />
        </svg>
        <span>加入购物车成功!</span>
      </template>
      <template v-slot:btnGroup>
        <a class="btn btn--m" href="javascript:;" @click="isCartOkShowFlag = false">继续购物</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </template>
    </Modal>
    <!-- 加入购物车按钮 -->
    <!-- <input type="button" value="加入购物车弹框1" @click="isCartErrorShowFlag=true" />
    <input type="button" value="加入购物车弹框2" @click="isCartOkShowFlag=true" />-->
    <Footer></Footer>
  </div>
</template>
 
<script>
// 引入css文件
import "@/assets/css/base.css";
import "@/assets/css/product.css";

// 引入组件
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bread from "@/components/Bread";
import Modal from "@/components/Modal";
import axios from "axios";
import { goodsIndexApi, cartCreateApi } from "@/api/index.js";

export default {
  created() {
    this.initdata();
  },

  // 模型数据
  data() {
    return {
      userId: "",
      goodsId: "",
      minprice: "all", //最小价格
      maxprice: "all", //最大价格
      order: false, //排序
      goodslist: [], //列表数据
      isshow: false, // 登录遮罩框
      isCartErrorShowFlag: false, // 加入购物车弹框1
      isCartOkShowFlag: false // 加入购物车弹框2
    };
  },

  // 声明普通方法
  methods: {
    // 调用addCart方法，请求接口数据添增加入购物车效果
    addCart(goodsId) {
      let userId = localStorage.getItem("userId"); //获取本地存储的userId
      if (userId) {
        //如果ID存在则发送请求否则弹框提示登录
        cartCreateApi({
          // 传参用户ID与商品ID
          userId: userId,
          goodsId: goodsId
        }).then(res => {
          if (res.meta.state == 201) {
            // 状态码为201则显示加入购物车弹框
            this.isCartOkShowFlag = true;
          } else {
            alert(res.meta.msg);
          }
        });
      } else {
        this.isCartErrorShowFlag = true;
      }
    },

    // 价格筛选
    goodsWhere(minprice, maxprice) {
      this.minprice = minprice;
      this.maxprice = maxprice;
      this.initdata(); //重新发送请求
    },

    // 控制排序箭头
    goodsorder() {
      this.order = !this.order;
      this.initdata();
    },

    // 控制遮罩层
    closeModal() {
      this.isshow = false;
    },

    // 封装axios以便调用（请求接口数据渲染首页商品列表）
    initdata() {
      let order = this.order ? "asc" : "desc";
      goodsIndexApi({
        //传参排序方式以及最小价格最大价格
        order: order,
        minprice: this.minprice,
        maxprice: this.maxprice
      }).then(res => {
        this.goodslist = res.data;//将数据存入模型中
      });
    }
  },

  // 激活子组件
  components: {
    Header,
    Footer,
    Bread,
    Modal
  }
};
</script>
 
<style scoped>
</style>