const info = [{
  id: '0',
  title: '进入小程序',
  content: [
    {
      text: '1、在微信中搜索“点度物联”，点击“点度物联”进入。',
      imgUrl: ['/preset/other/use-instruction/enter_01.jpg']
    }
  ]
},{
  id: '1',
  title: '注册账号',
  content: [
    {
      text: '1、点击“还没有注册账号？点击这里注册”。',
      imgUrl: ['/preset/other/use-instruction/register_01.jpg']
    },
    {
      text: '2、填写完必要信息后，点击“立即注册”，完成注册。',
      imgUrl: ['/preset/other/use-instruction/register_02.jpg']
    }
  ]
},{
  id: '2',
  title: '忘记密码，重设密码',
  content: [
    {
      text: '1、点击“忘记密码？”。',
      imgUrl: ['/preset/other/use-instruction/reset_cipher_01.jpg']
    },
    {
      text: '2、填写完必要信息后，点击“重设密码”，完成重设。',
      imgUrl: ['/preset/other/use-instruction/reset_cipher_02.jpg']
    }
  ]
}]

export default{
  getInfo(){
    return info
  }
}