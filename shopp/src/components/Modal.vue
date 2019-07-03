<template>
  <div class="Modal">
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':isMdShow}">
      <div class="md-modal-inner">
        <!-- 弹框关闭 -->
        <div class="md-top">
            <!-- 插槽 title-->
          <slot name="title"></slot>
          <button class="md-close" @click="closeModal">Close</button>
        </div>
        <!-- 弹框内数据 -->
        <div class="md-content">
          <div class="confirm-tips">
              <!-- 插槽 main-->
            <slot name="main"></slot>
          </div>
          <div class="btn-wrap">
              <!-- 插槽 btnGroup-->
              <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <!-- 
      灰色遮罩
      知识点： v-if 控制DOM（HTML代码不显示）  v-show 控制样式（通过display不显示）
    -->
    <div class="md-overlay" v-if="isMdShow" @click="closeModal"></div>
  </div>
</template>
 
<script>
export default {
  props: ["isMdShow"],
  data() {
    return {
      // isMdShow:true
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
 
<style scoped>
</style>