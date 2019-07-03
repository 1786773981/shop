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
          <a href="javascript:void(0)" class="price">
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
                <a href="javascript:void(0)">All</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">100 - 500</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">500 - 1000</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">1000 - 2000</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="static/9.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">999</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="static/3.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">1000</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="static/7.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">500</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <a href="#">
                      <img src="static/6.jpg" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">2499</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default {
  components: {
    Header,
    Footer,
    Bread
  }
};
</script>
 
<style scoped>
</style>