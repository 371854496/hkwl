// components/itemNav/component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      navArr:{
          type:Array,
          value:[]
<<<<<<< HEAD
      },
<<<<<<< HEAD
      curId: {
        type: Number,
        value: 0,
        observer(newval, oldval) {
          this.setData({ 'activeNav': newval })
          console.log('爱的撒旦', newval)
          console.log('asdasdasdadad', this.data)
=======
      curId:{
        type:Number,
        value:0,
        observer(newval,oldval) {
          this.setData({'activeNav':newval})
          console.log('爱的撒旦',newval)
          console.log('asdasdasdadad',this.data)
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
        },
      },
=======
      }
>>>>>>> parent of d5405ec... jy
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeNav: 0,
  },
<<<<<<< HEAD
  attached() {
<<<<<<< HEAD
    this.setData('activeNav', this.data.curId)
=======
    this.setData('activeNav',this.data.curId)
>>>>>>> 60dd8234ae1544672ad3633bcae69e0d56e98b2f
  },
=======
>>>>>>> parent of d5405ec... jy

  /**
   * 组件的方法列表
   */
  methods: {
      navBtn(e) {
          
          let id = e.currentTarget.dataset.id
          let self = this;
          self.setData({
              activeNav: index
          });
          console.log(id)
          self.triggerEvent("changeNav", { activeNav: id});
      },
  }
})
