var app = new Vue({
    el:'#shopcart',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'水餃',
            imgUrl:'https://cdn1.iconfinder.com/data/icons/mammals-i/300/25-512.png',
            price:'50',
            count:'1',
            info:'限時優惠',
            classname:'timelimit',
            indexlocalhref:'./templates/1.html#munedot',
            templateslocalhref:'./1.html#munedot'
          },
          {
            id:'2',
            itemName:'冰火',
            imgUrl:'http://farm5.staticflickr.com/4890/46577344842_5f42956324_c.jpg',
            price:'100',
            count:'1',
            info:'新品上市',
            classname:'new',
            indexlocalhref:'./templates/2.html#munedot',
            templateslocalhref:'./2.html#munedot'
          },
          {
            id:'3',
            itemName:'旺旺仙貝',
            imgUrl:'https://cs-b.ecimg.tw/items/DBACFNA900ADK0T/000001_1574412574.jpg',
            price:'100',
            count:'1',
            info:'熱門商品',
            classname:'hot',
            indexlocalhref:'./templates/3.html#munedot',
            templateslocalhref:'./3.html#munedot'
          },
          {
            id:'4',
            itemName:'質感褐色系大衣服',
            imgUrl:'https://cs-b.ecimg.tw/items/DBACFNA900ADK0T/000001_1574412574.jpg',
            price:'100',
            count:'1',
            info:'熱門商品',
            classname:'hot',
            indexlocalhref:'./templates/4.html#munedot',
            templateslocalhref:'./4.html#munedot'
          },
          {
            id:'5',
            itemName:'質感褐色系大衣服',
            imgUrl:'https://cs-b.ecimg.tw/items/DBACFNA900ADK0T/000001_1574412574.jpg',
            price:'100',
            count:'1',
            info:'熱門商品',
            classname:'hot',
            indexlocalhref:'./templates/5.html#munedot',
            templateslocalhref:'./5.html#munedot'
          },
          {
            id:'6',
            itemName:'質感褐色系大衣服',
            imgUrl:'https://cs-b.ecimg.tw/items/DBACFNA900ADK0T/000001_1574412574.jpg',
            price:'80',
            count:'1',
            info:'特價品',
            classname:'sale',
            indexlocalhref:'./templates/6.html#munedot',
            templateslocalhref:'./6.html#munedot'
          },
          {
            id:'7',
            itemName:'質感褐色系大衣服',
            imgUrl:'https://cs-b.ecimg.tw/items/DBACFNA900ADK0T/000001_1574412574.jpg',
            price:'100',
            count:'1',
            info:'',
            classname:'',
            indexlocalhref:'./templates/7.html#munedot',
            templateslocalhref:'./7.html#munedot'
          },
          {
            id:'8',
            itemName:'質感褐色系大衣服',
            imgUrl:'https://cs-b.ecimg.tw/items/DBACFNA900ADK0T/000001_1574412574.jpg',
            price:'100',
            count:'1',
            info:'',
            classname:'',
            indexlocalhref:'./templates/8.html#munedot',
            templateslocalhref:'./8.html#munedot'
          },
        ],
        balls: [ 
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            },
            {
              show: false
            },
        ],
      dropBalls: [],
      addedGood: [],
    },
    methods:{
        handlePlus: function(item){
          item.count++;
        },
        handleSub: function(item){
          if(item.count>1){
            item.count--;
          }
        },
        handledelete: function(index){
          const goods = this.addedGood[index];
          for(let i = 0;i < this.addedGood.length;i++){
            if(this.addedGood[i].id == goods.id){
              this.addedGood.splice(i,1);
            }
          }
            
        },
        handadditem: function(index){
          const goods = this.itemList[index];
          const checkcartdiff = this.addedGood.find(nothing=>nothing.id == goods.id);
          console.log('index=', index);
          if(checkcartdiff){
            for(let i = 0;i < this.addedGood.length;i++){
              if(this.addedGood[i].id == goods.id){
                this.addedGood[i].count++;
                console.log('id=', i);
                break;
              }
              
            }
            
          }
            
          else
            this.addedGood.push({
              id:goods.id,
              itemName:goods.itemName,
              imgUrl:goods.imgUrl,
              price:goods.price,
              count:goods.count,
              info:goods.info,
              classname:goods.classname
            });
        },
        additem(event) {
          this.drop(event.target);
          
          
        },
        drop(el) { //抛物
          for(let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i];
            if(!ball.show) {
              ball.show = true;
              

              ball.el = el;
              this.dropBalls.push(ball);
              return;
            }
          }
        },
        beforeDrop(el) { /* 购物车小球动画实现 */
          let count = this.balls.length;
          while(count--) {
            let ball = this.balls[count];
            if(ball.show) {
              let rect = ball.el.getBoundingClientRect(); //元素相对于视口的位置
              let x = rect.left - 32;                        //       起始x
              let y = -(window.innerHeight - rect.top - 22); //获取y  起始點Y
              el.style.display = '';
              el.style.webkitTransform = 'translateY(' + y + 'px)'; //translateY
              el.style.transform = 'translateY(' + y + 'px)';
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.webkitTransform = 'translateX(' + x + 'px)';
              inner.style.transform = 'translateX(' + x + 'px)'; 
            }
          }
        },
        dropping(el, done) { /*重置小球数量  样式重置*/
          let rf = el.offsetHeight;

          el.style.webkitTransform = 'translate3d(100,800,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(100,800,0)';
          el.addEventListener('transitionend', done);
        },
        afterDrop(el) { /*初始化小球*/
          let ball = this.dropBalls.shift();
          if(ball) {
            ball.show = false;
            el.style.display = 'none';
          }
        }
        
    },
    computed:{
      totalPrice(){
        let totalprice=0
        for(let i = 0;i < this.addedGood.length; i++){
            totalprice += this.addedGood[i].count*this.addedGood[i].price;
        }
        return totalprice;
      },
      filteredClassNameIsHot: function() {
        return this.itemList.filter(function(item) {
          return item.classname == 'hot';
        });
      },
      filteredClassNameIsNew: function() {
        return this.itemList.filter(function(item) {
          return item.classname == 'new';
        });
      },
    }
})