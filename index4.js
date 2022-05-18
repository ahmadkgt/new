


            $(document).ready(function() {
                $("#login").click(function() {
                var user_id = fixNumbers($("#usr").val());
               
                var captcha =     $("#captcha").val().trim();
                var applied_kind      = $("input[name='applied_kind']:checked").val();

               
                

                if(user_id.trim() != "" && captcha != "") {
                    $.ajax({
                            type:"POST",
                            data:'id='+user_id+'&applied_kind='+applied_kind+"&captcha="+captcha,
                            url:"API/update.php",
                            success:function(data){
                                alert(data);
                               
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