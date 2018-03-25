$(function(){
    let firstname=$("#firstname")
    let lastname=$("#lastname")
    let areacode=$("#areacode")
    let telnum=$("#telnum")
    let email=$("#emailid")
    let allow=$("#allowcontact")
    let preffered=$("#prefferedcontact")
    v=true
    v=allow.is(":checked")==true
    let feedback=$("#feedback")
    let btn=$("#btn")
    console.log("loaded")
    btn.click(function(){
        $.post("/api/contact",{
            first_name:firstname.val(),
            last_name:lastname.val(),
            area_code:areacode.val(),
            telephone:telnum.val(),
            email:email.val(),
            allow_contact:v,
            preffered_mode:preffered.val(),
            feedback:feedback.val()
        }).done((data)=>{
            alert("Sent")
        })
    })
})
