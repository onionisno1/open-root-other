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
},{//monitor_01.jpg
  id: '3',
  title: '进入系统',
  content: [
    {
      text: '1、点击封面图片，进入系统。',
      imgUrl: ['/preset/other/use-instruction/enter_sys_01.jpg']
    },{
      text: '2、进入系统后，可以查看系统设备的数量、运行状态、数据分析以及历史记录等。',
      imgUrl: ['/preset/other/use-instruction/enter_sys_02.jpg']
    }
  ]
},{//statistics_01.jpg
  id: '4',
  title: '实时监控',
  content: [
    {
      text: '1、进入系统后，点击“实时监控”图标，进入实时监控选择界面。',
      imgUrl: ['/preset/other/use-instruction/monitor_01.jpg']
    },{
      text: '2、在输入框中可以搜索相应的设备与文件夹，接着点击选择的设备可以进入设备监控界面。',
      imgUrl: ['/preset/other/use-instruction/monitor_02.jpg']
    },{
      text: '3、在设备监控界面，可以查看设备的运行状态、分享二维码、查看设备实时的图形和列表数据、查看设备的报警历史数据。',
      imgUrl: ['/preset/other/use-instruction/monitor_03.jpg']
    }
  ]
},{//statistics_01.jpg
  id: '5',
  title: '数据分析',
  content: [
    {
      text: '1、进入系统后，点击“数据分析”图标，进入数据分析界面。',
      imgUrl: ['/preset/other/use-instruction/statistics_01.jpg']
    },{
      text: '2、选择完要分析的属性、时间段等信息后，按下“执行统计”按钮后，可以进行报警分析、数据分析、同比分析、趋势分析、堆叠分析、CPK分析查看不同的分析结果。',
      imgUrl: ['/preset/other/use-instruction/statistics_02.jpg']
    }
  ]
}]

export default{
  getInfo(){
    return info
  }
}