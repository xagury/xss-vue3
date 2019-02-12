
app: https://m.ehaier.com

##海尔商城


##npm install @vue/cli -g     使用Vue3

##vue create . 创建vue项目

##vue.config.js编写    (别名配置)
            chainWebpack: config => {
                    config
                        .resolve
                        .alias // 配置解析别名
                        .set('@api', resolve('src/api'))
                        .set('@config', resolve('src/config'))
                        .set('@views', resolve('src/views'))
                        
                }



##1 首页
  #布局


##2 分类
  #布局
  #导航
  #列表

##3 购物车
  #布局
  #空购物车
  #存在商品的购物车
  #加入购物车逻辑

##4 我的
  #布局
  #登录
  #注册
  #我的
  #登录注册逻辑

##5 商品
  #布局
  #商品列表
  #商品详情