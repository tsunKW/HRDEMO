/*
 * Autumn
 * www.���}����������-getCoupon_ms_v20200714
 *******************************************************************
 *  --2020.07.14--�W�[SweetAlert2�u�������M���salert�B�h�˦�
 *  --2017.04.21--IT�̪쪩��
 *******************************************************************
 */

var checkCouponNum = '';
var checkCouponMsg = '';
function sendCouponNum (cp_no){
  momoj().MomoLogin({GoCart:false, LoginSuccess:function() {
    if(checkCouponNum != cp_no){
      checkCouponNum = cp_no;
      var jsonData = new Object();
      jsonData.flag = '3002';
      jsonData.data = {
        cp_no: cp_no
      }
      momoj.ajax({
        type: 'POST',
        dataType: 'json',
        data: {data:JSON.stringify(jsonData)},
        url: '/servlet/MemberCenterServ',
        error: function(){
          Swal.fire({icon: 'error', title: '�k�ᥢ�ѡA�Э��s��J',confirmButtonText: '�T�{'})
          checkCouponNum='';
        },
        success: function(objData){
          switch(objData.rtnCode) {
            case '101':
              Swal.fire({icon: 'success', title: '������k�ᦨ�\',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹��T�w�C�b��';
              break;
            case '210':
              Swal.fire({icon: 'warning', title: '����鸹���s�b',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹���s�b';
              break;
            case '211':
              Swal.fire({icon: 'warning', title: '����鸹����ϥ�',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹����ϥ�';
              break;
            case '212':
              Swal.fire({icon: 'warning', title: '����鸹�w�ϥιL',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹�w�ϥιL';
              break;
            case '213':
              Swal.fire({icon: 'success', title: '����鸹��T�w�C�b��',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹��T�w�C�b��';
              break;
            case '214':
              Swal.fire({icon: 'warning', title: '����鸹�w�L��',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹�w�L��';
              break;
            case '215':
              Swal.fire({icon: 'warning', title: '����鸹�����\�ۦ�n��',confirmButtonText: '�T�{'})
              checkCouponMsg = '����鸹�����\�ۦ�n��';
              break;
            case '301':
            case '998':
              Swal.fire({icon: 'error', title: '�k�ᥢ�ѡA�Э��s��J',confirmButtonText: '�T�{'})
              checkCouponNum='';
              break;
          }
        }
      });
    }
    else{
      if(checkCouponMsg!=''){
        Swal.fire({icon: 'warning', title: checkCouponMsg })
      }
      else{
        Swal.fire({icon: 'warning', title: '�t�ο��~�A�Э��s��z����',confirmButtonText: '�T�{'})
      }
    }
  }}); 
}

//
var checkCouponNum1 = '';
var checkCouponMsg1 = '';
function sendCouponNumLt (cp_no){
  momoj().MomoLogin({GoCart:false, LoginSuccess:function() {
    if(checkCouponNum1 != cp_no){
      checkCouponNum1 = cp_no;
      var jsonData = new Object();
      jsonData.flag = '3002';
      jsonData.data = {
        cp_no: cp_no
      }
      momoj.ajax({
        type: 'POST',
        dataType: 'json',
        data: {data:JSON.stringify(jsonData)},
        url: '/servlet/MemberCenterServ',
        error: function(){
          alert('�k�ᥢ�ѡA�Э��s��J');
          checkCouponNum1='';
        },
        success: function(objData){
          if(objData.rtnCode == '213') {
            Swal.fire({icon: 'error', title: '�k�ᥢ�ѡA�Э��s��J',confirmButtonText: '�T�{'})
            checkCouponMsg1 = '����鸹��T�w�C�b��';
          } else {
            Swal.fire({icon: 'success', title: '������k�ᦨ�\',confirmButtonText: '�T�{'})
            checkCouponMsg1 = '������k�ᦨ�\';
          }
        }
      });
    }
    else{
      if(checkCouponMsg1!=''){
        Swal.fire({icon: 'warning', title: checkCouponMsg1 })
      }
      else{
        Swal.fire({icon: 'warning', title: '�t�ο��~�A�Э��s��z����',confirmButtonText: '�T�{'})
      }
    }
  }}); 
}