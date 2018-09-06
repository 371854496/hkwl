// components/shopList/shopList.js
Component({
    /**
     * 组件的属性列表
     */
    options: {
        multipleSlots: true
    },
    properties: {
        shopInfo:{
            type:Object,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },
    /**
     * 组件的方法列表
     */
    methods: {
        shopBtn(e) {
            let self = this;
            let id = e.currentTarget.dataset.id;
            console.log(id)
            self.triggerEvent("shopBtn", { id: id });
        }
    }
})
