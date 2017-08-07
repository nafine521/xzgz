// 搜索条件
var conditions = {
  // 商品类型
  types : [],
  // 阿诺币范围
  aruo : {
    from : 0,
    to : Infinity
  },
  // 排序方式
  orderBy : {
    name : '综合排序',
    direction : 'asc'
  }
};

var pager; // 分页

// ajax获取商品列表
function getGoodsList( page , cb ){
  // 模拟数据 
  var param = {};
  var name ;
  var to;
   if(conditions.orderBy.name == "新品"){
      name = "affectiveTime";
     }else if(conditions.orderBy.name == "阿诺币"){
      name = "price";
     }else{
      name = "id";
     }
   
   if( conditions.aruo.to == "Infinity"){
     to = null;
   }else{
     to = conditions.aruo.to;
   }
     
   param["paramMap.types"] = conditions.types.join( '_' );
   param["paramMap.from"] = conditions.aruo.from;
   param["paramMap.to"] = to;
   param["paramMap.name"] = name;
   param["paramMap.direction"] = conditions.orderBy.direction;
   param["paramMap.page"] = page;
  $.post("queryMerchandiseByaruo", param ,function(res) {
    res = {
      data :  res.list,
      pageNum: res.pageNum
    };
    cb( res );    
  })
}


$(function(){

  // 删除筛选条件
  $( '#conditions_list' ).on( 'click' , '.mall_clo' , function(){
    var par = $(this).parents( 'li' ).first();
    par.hide(function(){
      par.remove();
      renderSearchLabels();
      setConditions();
      renderGoodsContent( 1 );
    });
  });

  // 清空筛选条件 
  $( '#clear_conditions' ).click(function(){
    $('#conditions_list li').hide(function(){
      $('#conditions_list li').remove();
      renderSearchLabels();
      setConditions();
      renderGoodsContent( 1 );
    });
  });

  // 展开更多商品分类
  $( '.mall_qk1' ).toggle(function(){
    $('#mall_types_list').css( 'height' , 'auto' );
  } , function(){
    $('#mall_types_list').css( 'height' , '50px' );
  });
  
  // 商品分类选择
  $('#mall_types_list [type="checkbox"]').change(function(){
    setConditions();
    setConditionsTags();
    renderGoodsContent( 1 );
  });

  // 阿诺币选择
  $( '#aruo_list li').click(function(){
    if( $(this).hasClass( 'not_radio' ) )return;
    $( '#aruo_list li').removeClass( 'active' );
    $(this).addClass( 'active' );
    $( '#define_aruo input' ).val( '' );
    setConditions();
    setConditionsTags();
    renderGoodsContent( 1 );
  });

  // 自定义阿诺币区间
  (function(){
    var ipts = $( '#define_aruo input' );
    var aruoFrom = ipts.first();
    var aruoTo = ipts.eq( 1 );
    var confirmBtn = $( '.ensure_aruo' );
    var _fromValue = aruoFrom.val();
    var _toValue = aruoTo.val();
    iptLimit( ipts , 'number' );
    aruoFrom.blur(function( ev ){
      if( !_isDataAllowed( +this.value ) ){
        this.value = _fromValue;
      }
      _fromValue = this.value;
    });
    aruoTo.blur(function(){
      if( !_isDataAllowed( null , +this.value ) ){
        this.value = _toValue;
      }
      if( this.value == 0 ){
        this.value = '';
      }
      _toValue = this.value;
    });
    confirmBtn.click(function(){
      if( _isDataAllowed() && ( aruoFrom.val() || aruoTo.val() ) ){
        $( '#aruo_list li').removeClass( 'active' );
        setConditions();
        setConditionsTags();
        renderGoodsContent( 1 );
      }
    });

    function _isDataAllowed( from , to ){
      from = from || +aruoFrom.val() || 0;
      to = to || +aruoTo.val() || Infinity;
      return from < to;
    }

  })();

  // 排序选择
  (function(){
    var list = $( '#sort_list li' );
    var sortArrows = $( '#sort_list i' );
    list.click(function(){
      var $this = $(this);
      var arrow = $this.find( 'i' );
      var currentClass = arrow.attr( 'class' );
      if( currentClass.indexOf( 'gray' ) >= 0 ){
        currentClass = currentClass.replace( 'gray' , 'green' );
      }else{
        currentClass = currentClass.indexOf( 'down' ) >= 0 ? 'icon-sort-greenup' : 'icon-sort-greendown';  
      }      
      list.removeClass( 'active' );
      sortArrows.each(function(){
        var className = this.className;
        this.className = className.replace( 'green' , 'gray' );
      });
      $this.addClass( 'active' );
      arrow.attr( 'class' , currentClass );
      setConditions();
      renderGoodsContent( 1 );
    });
  })();
  
  // 分页
  (function(){
    var preBtn = $( '#mall_pages .prev_page' );
    var nextBtn = $( '#mall_pages .next_page' );
    var pageNow = $( '#mall_pages .mall_pageNow' );
    var goodsIsLoading = false;
    pager = $( '.mall_pager' ).xzPager({
      now : 1,
      beforeJump : function(){
        if(goodsIsLoading )return false;
      },
      afterJump : function(){
        renderGoodsContent( this.now );
      }
    })[0].pager;

    preBtn.click(function(){
      pager.prev();
    });

    nextBtn.click(function(){
      pager.next();
    });

  })();
  
  //根据url初始化搜索条件
  (function(){
    var queries = parseReq( location.search.substr( 1 ) );
    var id = queries.type;
    $('#mall_types_list [type="checkbox"]').each(function(){
      if( this.id == id ){
        this.checked = true;
        $(this).parents( '.checkbox' ).addClass( 'checked' );
      }
    });

    // 解析url请求
    function parseReq( req ){
      var obj = {};
      var reqArr = req.split( '&' );
      var singleReq , temp;
      for(var i=0;i<reqArr.length;i++){
        if( singleReq = reqArr[i] ){
          temp = singleReq.split( '=' );
          obj[temp[0]] = temp[1];
        }
      }
      return obj;
    }
  })();
  
  // 设置搜索条件 
  setConditions();

  // 设置已选条件
  setConditionsTags();
  
  // 默认加载
  renderGoodsContent( 1 );

});

// 设置搜索条件
function setConditions(){
  // 商品分类
  conditions.types = [];
  $('#mall_types_list [type="checkbox"]').each(function(){
    this.checked && conditions.types.push( this.id );
  });
  // 阿诺币区间
  var aruo = conditions.aruo = {};
  var tag;
  $( '#aruo_list li').each(function(){
    if( $(this).hasClass( 'active' ) ){
      tag = $(this);
    }
  });
  if( tag ){
    var temp = tag.html().match( /(\d+)/g );
    aruo.from = +temp[0];
    aruo.to = +temp[1] || Infinity;
  }else{
    var ipts = $( '#define_aruo input' );
    aruo.from = +ipts.first().val() || 0;
    aruo.to = +ipts.eq( 1 ).val() || Infinity;
  }
  // 排序方式
  var orderBy = conditions.orderBy = {};
  $('#sort_list li').each(function(){
    if( $(this).hasClass( 'active' ) ){
      tag = $(this);
    }
  });
  orderBy.name = tag.text();
  orderBy.direction = tag.find( 'i' ).attr( 'class' ).indexOf( 'up' ) >= 0 ? 'asc' : 'desc';
}

// 设置已选条件标签
function setConditionsTags(){
  var html = '';
  var types = conditions.types;
  var aruo = conditions.aruo;
  $('#mall_types_list .checkbox').each(function( index ){
    if( $(this).find('input[type="checkbox"]')[0].checked ){
      html += '<li><label>' + $(this).text() + '</label>&nbsp;&nbsp;<i class="mall_clo">×</i></li>';
    }
  });
  if( aruo.from != 0 || isFinite( aruo.to ) ){
    html += '<li id="searchId_aruo"><label>';
    html += isFinite( aruo.to ) ? aruo.from + '-' + aruo.to + '币' : aruo.from + '币以上';
    html += '</label>&nbsp;&nbsp;<i class="mall_clo">×</i></li>';  
  }
  $('#conditions_list').html( html );
}

// 动态删除筛选条件
function renderSearchLabels(){
  var aruoSearch = false;
  var types = [];
  $('#conditions_list li').each(function(){
    if( this.id == 'searchId_aruo' ){
      aruoSearch = true;
      return;
    }
    types.push( $(this).find( 'label' ).html() );
  });
  $( '#mall_types_list .checkbox' ).removeClass( 'checked' );
  $( '#mall_types_list [type="checkbox"]' ).attr( 'checked' , false );
  var typeName;
  while( typeName = types[0] ){
    var flag = false;
    $( '#mall_types_list .checkbox' ).each(function(){
      if( typeName == $(this).text() ){
        $(this).addClass( 'checked' );
        $(this).find( '[type="checkbox"]' ).attr( 'checked' , true );
      }
    });
    types.splice( 0 , 1 );
  }
  if( !aruoSearch ){
    $( '#aruo_list li' ).removeClass( 'active' );
    $( '#define_aruo input' ).val( '' );
  }
}

// 渲染商品列表及分页 
function renderGoodsContent( page ){  
  getGoodsList( page , function( res ){
    var html = '' , goods;
    var goodsList = res.data || [] ;
    for(var i=0;i<goodsList.length;i++){
      goods = goodsList[i];
      html += '<div class="mall_list_xl mall_list_xl1" id="' + goods.id + '">';
      html += '<p class="mall_list_p"><a href="'+basePath+'mall/goodsDetail-' + goods.id + '.html"><img src="' + goods.imagePath + '"></a></p>';
      html += '<p class="mall_list_p1"><a href="'+basePath+'mall/goodsDetail-' + goods.id + '.html">' + goods.name + '</a></p>';
      html += '<p class="mall_list_p2">' + goods.description + '</p>';
      html += '<p class="mall_list_p3"><label>' + goods.price + '</label> 阿诺币' + /*' + <label><em>￥</em>' + goods.price + '</label>' */'</p>';
      html += '</div>';
    }
    $( '#goods_list' ).hide(function(){
      $( '#goods_list' ).html( html ).show( 'slow' );
    });
    $( '#mall_pages .mall_pageNow' ).html( page );
    $( '#mall_pages .mall_pageCount' ).html( res.pageNum );
    pager.init( page , +res.pageNum || 1 );
  }); 
}
