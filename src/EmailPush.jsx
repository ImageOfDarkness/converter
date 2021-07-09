

function EmailPush() {

  function validate(form_id,email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
      alert('Введите корректный e-mail');
      return false;
    }
  }

  return (
    <div className="EmailPush">
      <input type="email" id={"email"} name={"email"}/>
      <input className={'emailSubmit'} type="submit" value={"Записаться на обмен валюты"}/>
    </div>
  )
}

export default EmailPush