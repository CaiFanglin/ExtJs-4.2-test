/*---------------------------------------------------
 * JS 1.11.3
 * 
 * Copyright (c) hust
 * 
 * 履历       ：2016/07/27 初版 CFL 新作成
 * 
 * Author：CFL 2016/07/27
 * 
 ---------------------------------------------------*/

/*
*  页面布局初始化函数入口
*/
Ext.onReady(function () {
    var login = new Login(); //创建Login构造函数的实例，目的是初始化页面布局
});
/*
*  立即执行函数，创建初始化函数原型链及相关属性方法
*/
;(function (root,factory) {
    if(typeof define === 'function' && define.amd){
        define([],factory);
    }else if(typeof module === 'object' && module.exports){
        module.exports = factory();
    }else{
        root.Login = factory();//调用Login构造函数
    }
})(this, function () {
    'use strict';//js的严格模式

    //定义函数变量
    var Login = function () {
        this.ViewPort.render(Ext.getBody()); //将Login构造函数原型链上的属性Viewport渲染到页面中
    };
    //构造Login的原型链
    Login.prototype = {
        constructor:'Login',//重新定义Login原型链的构造器
        "ViewPort":Ext.create('Ext.container.Viewport', {//定义ViewPort函数
            layout: 'border',//定义全局为border布局，将整个页面分为上中下左右（[注]整个border布局必须有center）
            //整个页面内的元素
            items: [{
                region: 'north',//页面上方
                html: '<h1 class="x-panel-header">突发事件应急决策辅助支持系统</h1>',
                baseCls: 'header',
                height: 110,//上方元素所占高度
                border: false,//边框为0
            },{
                region: 'center',//页面中部
                xtype: 'panel', // 元素类型为panel
                baseCls:'center',
                items: [{
                    layout: 'anchor',//锚点布局
                    width: '100%',//宽度为100%
                    height: '100%',//高度为100%
                    border:false,//边框为0
                }, {
                    //title: '<span class="loginTitle">Login</span>',
                    baseCls:'form',
                    cls: 'loginForm',
                    width: 300,
                    height: 300,
                    //bodyPadding: 10,
                    border:false,
                    items: [{
                         xtype:'textfield',
                         baseCls: 'baseName',
                         //bodyCls: 'name',
                         cls:'name',
                         name: 'name',
                        inputType:'text',
                         fieldLabel: '姓名',
                         allowBlank: false  // 非空
                    }, {
                         xtype: 'textfield',
                         baseCls: 'basePassword',
                         cls: 'password',
                         name: 'password',
                         fieldLabel: '密码',
                         inputType: 'password',// requires value to be a valid email address format
                         allowBlank: false
                    }, {
                        xtype: 'button',
                        baseCls:'btnSubmit',
                        text: '登录 Sign in',
                        //border:false,
                       // inputType: 'submit',
                        handler: function () {//按钮点击所执行的函数
                            alert("sdfsdf");
                        }
                    }, {
                        xtype: 'label',
                        baseCls: 'btnLable1',
                        html: '<a href="register.html">还没有账号？</a>',
                        margin: '0 0 0 10'
                    }, {
                        xtype: 'label',
                        text: '前往注册',
                        margin: '0 0 0 10'
                    }]
                }]
            }]
        })
        //"header": Ext.create('Ext.panel.Panel', {
        //    bodyPadding: 5,  // 避免Panel中的子元素紧邻边框
        //    baseCls: 'backgroundColor:#157FCC',
        //    bodyCls: 'backgroundColor:#157FCC',
        //    border: false,
        //    icon: '../images/u5.png',
        //    iconCls: 'iconHead',
        //    cls: 'header',
        //    html:'<h3 class="h3">突发事件应急决策辅助支持系统</h3>'
        //}),
        //"form": Ext.create('Ext.form.Panel', {
        //    title: '<h4 class="h4">Login</h4>',
        //    cls: 'loginForm',
        //    width: 300,
        //    height: 200,
        //    bodyPadding: 10,
        //    bodyCls: 'backgroundColor:red',
        //    items: [{
        //        xtype: 'textfield',
        //        name: 'name',
        //        fieldLabel: 'Name',
        //        allowBlank: false  // requires a non-empty value
        //    }, {
        //        xtype: 'textfield',
        //        name: 'email',
        //        fieldLabel: 'Email',
        //        vtype: 'email'  // requires value to be a valid email address format
        //    }, {

        //    }]
        //})
    };
    return Login;//将构造函数暴露出去，以便外部函数调用
});
