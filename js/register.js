//定义表单变量
//手机号验证
/*function phoneCode(){
		var reg = /^[1][3578]\d{9}$/;
	$(".tet1").blur(function(){
		console.log(this.innerHTML);
//		alert($(b));
		
	})
}*/
//console.log($("form")[0])



$(document).ready(function () {
    	//validate()方法 核心
        $("#demoForm").validate({
        	//常用默认规则
            rules: {
                username: {   //元素的name值
                    required: true,
                    //minlength: 8,
                    //maxlength: 20,
                    //max:6,
                    //min:2,
                    //number:true,
                    //digits:true, //整数
                    //url:true,
                    rangelength:[8,20], //数组 包含两个数据
                    remote:"remote.json"  //使用ajax方法调用remote.json验证输入值
                },
                email:{
                  required: true,
                  email:true
                },
                password: {
                    required: true,
                    //minlength: 8,
                    //maxlength: 20,
                    rangelength:[8,20]
                },
                "confirm-password": {
                    equalTo: "#password"  //要比较的文本框
                }
            },
            //错误提示信息
            messages: {
                username: {
                    required: '请输入用户名',
                    minlength: '用户名不能小于8个字符',
                    maxlength: '用户名不能超过20个字符',
                    max:'不能大于6~',
                    min:'不能小于2~',
                    number:'请输入数值(整数 小数 负数)',
                    digits:'请输入整数',
                    url:'请输入正确的url',
                    rangelength:'用户名需要在8到20个字符之间',
                    remote: '用户名不存在'
                },
                email:{
                    required:'请输入邮箱',
                    email:'请输入正确格式的邮箱'
                },
               	password: {
                    required: '请输入密码',
                    //minlength: '密码不能小于8个字符',
                    //maxlength: '密码不能超过20个字符',
					rangelength: '密码需要在8到20个字符之间'
                },
                "confirm-password": {
                    equalTo: "两次密码不一致"
                }
            }
        });

        $("#check").click(function () {
            console.log($("#demoForm").valid() ? "填写正确" : "填写不正确");
        });
    });