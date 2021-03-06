import axios from 'axios'

const state = {
    announcement: [{
        annTitle: '蚂蚁置物上线:一个专注于校园二手租赁，方便学生教师闲置物品出售购入平台',
        annTime: '2019-5-10',
        annId: '',
    }],
    parentClassification: [{
        parentPicture: require('../../assets/img/icon/book.png'),
        parentName: '书籍'
    }, {
        parentPicture: require('../../assets/img/icon/stationery.png'),
        parentName: '文具'
    }, {
        parentPicture: require('../../assets/img/icon/daily.png'),
        parentName: '日用'
    }, {
        parentPicture: require('../../assets/img/icon/cosmetics.png'),
        parentName: '美妆'
    }, {
        parentPicture: require('../../assets/img/icon/food.png'),
        parentName: '食品'
    }, {
        parentPicture: require('../../assets/img/icon/electrical.png'),
        parentName: '电器'
    }],
    childClassification: [
        ["英语四六级", "证从", "银从", "会计", "教师资格证", "计算机二级", "其他"],
        ["本子", "笔", "便签", "文件夹", "计算器", "办公用品", "包装用品", "其他"],
        ["收纳", "服饰", "鞋表", "箱包", "洗护用品", "非处方药物", "餐桌用品", "其他"],
        ["化妆水乳", "防晒隔离", "粉底定妆", "眼妆眉笔", "唇膏口红", "化妆工具", "美甲用具", "其他"],
        ["速食品", "饮料", "调味料", "五谷", "甜品", "膨化食物", "冲泡花茶", "其他"],
        ["U盘", "台灯", "数据线", "充电宝", "鼠标键盘", "洗衣机", "烘干机", "其他"]
    ],
    guessLike: [{
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '价格'
    }],
    hottest: [{
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '30',
        starNum: '1'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '30',
        starNum: ''
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '30',
        starNum: ''
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '30',
        starNum: ''
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '30',
        starNum: ''
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '30',
        starNum: ''
    }, ],
    latest: [{
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '20',
        uploadTime: '2019-01-18'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '20',
        uploadTime: '2019-01-18'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '20',
        uploadTime: '2019-01-18'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '20',
        uploadTime: '2019-01-18'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '20',
        uploadTime: '2019-01-18'
    }, {
        goodsPicture: require('../../assets/img/index/antsLogo.png'),
        goodsName: '商品名',
        goodsPrice: '20',
        uploadTime: '2019-01-18'
    }]
}

const getters = {
    getParentClassification(state) {
        return state.parentClassification;
    },
    getChildClassification(state) {
        return state.childClassification;
    },
    getGuessLike(state) {
        return state.guessLike;
    },
    getHottest(state) {
        return state.hottest;
    },
    getLatest(state) {
        return state.latest;
    },
    getAnnouncement(state) {
        return state.announcement;
    }
}

const mutations = {
    initRequest(state, res) {
        state.parentClassification = res.parentClassification;
        state.guessLike = res.guessLike;
        state.hottest = res.hottest;
        state.latest = res.latest;
        state.announcement = res.announcement;
    },
    concreteRequest(state, childClassification) {
        state.childClassification = childClassification;
    }
}

const actions = {
    initRequest({ commit }) {
        axios.get('/ants/dataRendering/homePage')
            .then(res => {
                commit("initRequest", res.data);
            })
    },
    concreteRequest({ commit }) {
        axios.get('/ants/class/allClassify')
            .then(res => {
                commit("concreteRequest", res.data.childClassification);
            })
    }
}

export default { state, getters, mutations, actions }