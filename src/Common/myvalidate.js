let validate = options => {
  if (options.el.parentNode.querySelector('.validate-label')) {
    options.el.parentNode.removeChild(options.el.parentNode.querySelector('.validate-label'))
  }
  let regtel = /^1[356789][0-9]{9}$/
  let regEmail = /^[0-9]{9,11}@qq\.com$/
  let result = {}
  if (options.name === 'tel') {
    if (options.value === '') {
      result.status = false
      result.msg = '请输入电话'
    } else if (regtel.test(options.value)) {
      result.status = true
      result.msg = ''
    } else {
      result.status = false
      result.msg = '请输入正确电话'
    }
  } else if (options.name === 'pwd') {
    if (options.value === '') {
      result.status = false
      result.msg = '密码不能为空'
    } else if (options.value.length > 16 || options.value.length < 8) {
      result.status = false
      result.msg = '密码长度为8-16位'
    } else {
      result.status = true
      result.msg = ''
    }
  } else if (options.name === 'email') {
    if (options.value === '') {
      result.status = false
      result.msg = '请输入邮箱'
    } else if (regEmail.test(options.value)) {
      result.status = true
      result.msg = ''
    } else {
      result.status = false
      result.msg = '请输入正确邮箱'
    }
  } else if (options.name === 'repwd') {
    let pwdvalue = options.el.parentNode.parentNode.querySelector('[name=pwd]')
    if (options.value === '') {
      result.status = false
      result.msg = '密码不能为空'
    } else if (options.value !== pwdvalue.value) {
      result.status = false
      result.msg = '前后密码不一致'
    } else {
      result.status = true
      result.msg = ''
    }
  } else {
    if (options.value === '') {
      result.status = false
      result.msg = '此处不能为空'
    } else {
      result.status = true
      result.msg = ''
    }
  }
  let child = document.createElement('label')
  child.innerHTML = result.msg
  child.style.position = 'absolute'
  child.style.bottom = '-50px'
  child.style.left = '0'
  child.style.width = '100%'
  child.setAttribute('class', 'validate-label')
  options.el.parentNode.appendChild(child)
  return result.status
}

export default validate
