/**
 * promise .... 与promise/A不同
 * @author  blueni
 */

// exp;
// var promise = deferred();
// promise(function( next ){
//     console.log( 'deffer started...' );
//     next( null , 'res1...........' , 'res111111' );  
// })
// .then(function( res1 , res11 , next ){
//     console.log( res1 , res11 );
//     next( null , 'res2...........' );
// })
// .then(function( res2 , next ){
//     console.log( res2 );
// },function( err ){
//     console.log( err );
// });

var deferred = (function(){
    'use strict';
    function Promise(){
        this.fns = {};
        this.length = this.index = 0;
        this.errMsg = null;
    }

    // 异步链
    Promise.prototype.then = function( fn1 , fn2 ){
        var _this = this;
        this.fns[this.length++] = fn1;
        if( typeof fn2 === 'function' ){
            this.fns[this.length - 1].errFn = fn2;
        }
        return this;
    };

    function Deferred(){
        this.promise = new Promise();
    }

    // 通过，下一个
    Deferred.prototype.resolve = function( res ){
        var promise = this.promise;
        promise.index++;
        _doFn.apply( this , arguments );
    };

    // 拒绝，跳出
    Deferred.prototype.reject = function( errMsg ){
        var promise = this.promise;
        promise.index = promise.length - 1;
        promise.errMsg = errMsg;
        _doFn.call( this );
    };

    function _doFn(){
        var deferred = this;
        var promise = this.promise;
        var fn = promise.fns[ promise.index + '' ];
        if( !fn )return;
        if( promise.errMsg ){
            return fn.errFn && fn.errFn( promise.errMsg );
        }
        var slice = Array.prototype.slice;
        var args = slice.call( arguments , 0 );
        args.push( function( err ){
            if( err ){
                deferred.reject( err );
            }else{
                deferred.resolve.apply( deferred , slice.call( arguments , 1 ) );
            }
        });
        fn.apply( null , args);
    }

    return function deferred(){
        var deferred = new Deferred();
        return function( fn ){
            setTimeout(function(){
                _doFn.call( deferred );
            },0);
            return deferred.promise.then( fn );
        }
    }
})();