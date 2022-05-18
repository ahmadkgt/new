

             function swal(){
                Swal.fire({
                   title:"ملاحظة",
                  icon: 'warning',
            //         text:"لقد تم اعادة تحديد المواعيد المحجوزة بتاريخ 2021-11-19 في حال عدم وصول رسالة تأكيد بالموعد الجديد يرجى تسجيل الدخول والاطلاع على الموعد الجديد"
                });
            }


            $(document).ready(function() {
                $("#login").click(function() {
                var user_id = fixNumbers($("#usr").val());
               
                var captcha =     $("#captcha").val().trim();
                var applied_kind      = $("input[name='applied_kind']:checked").val();

               
                if(user_id.trim().length != 11)
                {
                    $("#msgdiv").html("يرجى التأكد من الرقم الوطني");
                    return;

                }

                if(user_id.trim() != "" && captcha != "") {
                    $.ajax({
                            type:"POST",
                            data:'usrname='+user_id+'&applied_kind='+applied_kind+"&captcha="+captcha,
                            url:"API/update.php",
                            success:function(data){
                               
                                if(data == "success") {
                                    window.location="appointment.php";
                                }
                                else if(data.trim() == "captchaerr")
                                {
                                    Swal.fire({
                                        title:"تحذير",
                                        icon:"error",
                                        text:"هناك خطأ برمز التحقق"
                                    });
    
                                }
                                else if(data.trim() == "empty")
                                {
                                    Swal.fire({
                                        title:"",
                                        icon:"error",
                                        text:"لا يوجد حجز خاص بهذا الرقم الوطني"
                                    });
    
                                }
                                else {
                                    $("#msgdiv").html("الرقم الوطني");
                                }
                            }
                    });
                } else {
                    $("#msgdiv").html("يرجى استكمال كافة البيانات");
                }
                });

                /************register*******************/
               
                }); 
               

                var
            persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
            fixNumbers = function (str)
            {
            if(typeof str === 'string')
            {
                for(var i=0; i<10; i++)
                {
                str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                }
            }
            return str;
            };  