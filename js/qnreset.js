/**
 * Created by yujuenianbei on 2017/5/5.
 */

(function(){
    // 初始化
    var id = ['img1_show','img2_show','img3_show'];
    // for(var m = 0;m<id.length;m++){
    //     var idm = id[m];
    //     QN(idm);
    //     console.log(idm)
    // }
    // QN(img1_show);

    //遍历需要用七牛的id
    id.forEach(function (id){
        var img_url = QN(id);
    })


    // setTimeout(function(){
    //     // // change事件用来做预览
    //     // document.addEventListener('change',function (e){
    //     //     if(e.target.getAttribute('type')!='file'){
    //     //         return;
    //     //     }
    //     //     QN.showImg(e.target,e.target.files[0],function (src){
    //     //         $('#img1_show').css({'background':'','background-size':'cover'});
    //     //         // console.log(e.target)
    //     //         $(e.target).css({'background-image':'url('+src+')','background-size':'cover'});
    //     //         $(e.target).parent().css({'background-image':'url('+src+')','background-size':'cover'});
    //     //     })
    //     // },true);
    //
    //
    //     // // 上传进度
    //     // QN.uploadType=function (id,type){
    //     //     console.log(id,type + '进度')
    //     // };
    //     // // 上传结束
    //     // QN.uploadEnd=function (id,url){
    //     //     // console.log(id,url + '上传完成');
    //     //     // console.log(QN.imgLink)
    //     // };
    //     // // 上传出错
    //     // QN.uploadError=function (id,err,errTip){
    //     //     console.log(id,err,errTip +'上传出错');
    //     // };
    // });
}());

