const info = [{
  id: '0',
  title: '起步',
  children:[{
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
    }
  ]
},{//monitor_01.jpg
  id: '1',
  title: '主页面',
  children: [{
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
    }
  ]
},{//statistics_01.jpg
  id: '2',
  title: '系统实时监控',
  children:[{
      id: '0',
      title: '系统实时监控',
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
    }
  ]
},{
  id: '3',
  title: '系统数据分析',
  children: [{
      id: '0',
      title: '系统数据分析',
      content: [
        {
          text: '1、进入系统后，点击“数据分析”图标，进入数据分析界面。',
          imgUrl: ['/preset/other/use-instruction/statistics_01.jpg']
        },{
          text: '2、选择完要分析的属性、时间段等信息后，按下“执行统计”按钮后，可以进行报警分析、数据分析、同比分析、趋势分析、堆叠分析、CPK分析查看不同的分析结果。',
          imgUrl: ['/preset/other/use-instruction/statistics_02.jpg']
        }
      ]
    }
  ]
},{
  id: '4',
  title: '系统综合看板',
  children: [{
      id: '0',
      title: '系统综合看板',
      content: [
        {
          text: '1、进入系统后，点击“综合看板”图标，进入综合看板选择界面。',
          imgUrl: ['/preset/other/use-instruction/kanban_01.jpg']
        },{
          text: '2、在输入框中可以搜索看板，接着点击选择的看板可以进入看板显示界面。',
          imgUrl: ['/preset/other/use-instruction/kanban_02.jpg', '/preset/other/use-instruction/kanban_03.jpg']
        }
      ]
    }
  ]
},{
  id: '5',
  title: '添加设备',
  children: [{
      id: '0',
      title: '进入添加设备',
      content: [
        {
          text: '1、进入系统后，点击“添加设备”图标',
          imgUrl: ['/preset/other/use-instruction/setDevice_01.jpg']
        },{
          text: '2、可以选择4中不同添加设备的方式，选择完后点击“下一步”继续。',
          imgUrl: ['/preset/other/use-instruction/setDevice_02.jpg']
        }
      ]
    },{
      id: '1',
      title: '  新建一个空白的物',
      isIndent: true,
      content: [
        {
          text: '1、为设备选择合适的硬件模型后，点击“下一步”。',
          imgUrl: ['/preset/other/use-instruction/blankDevice_01.jpg']
        },{
          text: '2、选择填写硬件的主配置信息后，点击“下一步”。',
          imgUrl: ['/preset/other/use-instruction/blankDevice_02.jpg']
        },{
          text: '3、填写物的名称后，点击“下一步”。',
          imgUrl: ['/preset/other/use-instruction/blankDevice_03.jpg']
        },{
          text: '4、选择物要添加到的节点，点击“完成”。',
          imgUrl: ['/preset/other/use-instruction/blankDevice_04.jpg']
        }
      ]
    },{
      id: '2',
      title: '从现有的物中复制',
      isIndent: true,
      content: [
        {
          text: '1、选择好要复制的物后，点击“下一步”。',
          imgUrl: ['/preset/other/use-instruction/copyDevice_01.jpg']
        },{
          text: '2、填写物的名称后，点击“下一步”。',
          imgUrl: ['/preset/other/use-instruction/blankDevice_03.jpg']
        },{
          text: '3、选择物要添加到的节点，点击“完成”。',
          imgUrl: ['/preset/other/use-instruction/blankDevice_04.jpg']
        }
      ]
    }
  ]
},{
  id: '6',
  title: '用户管理',
  children: [{
      id: '0',
      title: '进入用户管理',
      content: [
        {
          text: '1、进入系统后，点击“用户管理”图标，进入用户管理选择界面。',
          imgUrl: ['/preset/other/use-instruction/userManage_01.jpg']
        }
      ]
    },{
      id: '1',
      title: '添加用户',
      isIndent: true,
      content: [
        {
          text: '1、点击“新增用户”开始添加用户。',
          imgUrl: ['/preset/other/use-instruction/userManage_02.jpg']
        },{
          text: '2、按照要求填写必要的信息，注意登录名不得事中文和手机号。',
          imgUrl: ['/preset/other/use-instruction/userManage_03.jpg']
        }
      ]
    },{
      id: '2',
      title: '分享系统',
      isIndent: true,
      content: [
        {
          text: '1、在用户列表中，点击用户。',
          imgUrl: ['/preset/other/use-instruction/userManage_04.jpg']
        },{
          text: '2、点击“分享”按钮',
          imgUrl: ['/preset/other/use-instruction/userManage_05.jpg']
        },{
          text: '3、点击“执行分享”按钮，在微信好友列表中选择要分享的对象。',
          imgUrl: ['/preset/other/use-instruction/userManage_06.jpg']
        },{
          text: '4、好友收到分享，点击进入，接着填写必要的信息即可。',
          imgUrl: ['/preset/other/use-instruction/userManage_07.jpg', '/preset/other/use-instruction/userManage_08.jpg']
        },{
          text: '5、好友成功进入分享的系统。',
          imgUrl: ['/preset/other/use-instruction/userManage_09.jpg']
        }
      ]
    }
  ]
},{
  id: '7',
  title: '推送设置',
  children: [{
      id: '0',
      title: '进入推送设置',
      content: [
        {
          text: '1、进入系统后，点击“推送设置”图标，进入推送设置界面。',
          imgUrl: ['/preset/other/use-instruction/pushSetting_01.jpg']
        }
      ]
    },{
      id: '1',
      title: '微信绑定',
      isIndent: true,
      content: [
        {
          text: '1、点击“绑定到当前微信”绑定微信。',
          imgUrl: ['/preset/other/use-instruction/pushSetting_02.jpg']
        },{
          text: '2、点击“解除用户微信绑定”解除绑定微信。',
          imgUrl: ['/preset/other/use-instruction/pushSetting_03.jpg']
        }
      ]
    }
  ]
},{
  id: '8',
  title: '物联配置',
  children: [{
      id: '0',
      title: '进入物联配置',
      content: [
        {
          text: '1、进入系统后，点击“物联配置”图标，进入物联配置界面。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_01.jpg']
        }
      ]
    },{
      id: '1',
      title: '添加向导文件夹',
      isIndent: true,
      content: [
        {
          text: '1、点击图中的添加图标。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_02.jpg']
        },{
          text: '2、填写相对文件夹名称，点击“下一步”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_03.jpg']
        },{
          text: '3、选择要添加到的节点，点击“完成”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_04.jpg']
        }
      ]
    },{
      id: '2',
      title: '操作向导文件夹',
      isIndent: true,
      content: [
        {
          text: '1、选择要操作的向导文件夹。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_05.jpg']
        },{
          text: '2、删除：点击“设置”的下拉框中的“删除”完成删除。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_06.jpg']
        },{
          text: '3、编辑：点击“设置”的下拉框中的“编辑”，修改完成后点击“√”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_11.jpg', '/preset/other/use-instruction/thingsSetting_12.jpg']
        }
      ]
    },{
      id: '3',
      title: '用户授权',
      isIndent: true,
      content: [
        {
          text: '1、点击要授权的物。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_07.jpg']
        },{
          text: '2、点击“授权给客户”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_08.jpg']
        },{
          text: '3、点击“创建物联授权码”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_09.jpg']
        },{
          text: '4、生成授权码，提供扫码。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_10.jpg']
        }
      ]
    },{
      id: '4',
      title: '操作物',
      isIndent: true,
      content: [
        {
          text: '1、选择要操作的物，接着点击设置。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_07.jpg', '/preset/other/use-instruction/thingsSetting_12.jpg']
        },{
          text: '2、编辑节点：点击“设置”的下拉框中的“编辑节点”，修改完成后点击“√”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_14.jpg']
        },{
          text: '3、修改名称和描述：点击“设置”的下拉框中的“修改名称和描述”，修改完成后点击“√”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_15.jpg']
        },{
          text: '4、删除：点击“设置”的下拉框中的“删除”，点击“确定”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_16.jpg']
        },{
          text: '5、分离：点击“设置”的下拉框中的“分离”，点击“确定”。',
          imgUrl: ['/preset/other/use-instruction/thingsSetting_17.jpg']
        }
      ]
    }
  ]
},{
  id: '9',
  title: '系统配置',
  children: [{
      id: '0',
      title: '系统配置',
      content: [
        {
          text: '1、进入系统后，点击“推送设置”图标，进入系统配置界面。',
          imgUrl: ['/preset/other/use-instruction/systemSetting_01.jpg']
        },{
          text: '2、进入“系统配置”后，可以点击“系统名”、“系统描述”、“系统Logo”、“系统封面”、“管理员超级权限”、“系统密钥”修改配置。',
          imgUrl: ['/preset/other/use-instruction/systemSetting_02.jpg']
        }
      ]
    }
  ]
}]

export default{
  getInfo(){
    return info
  }
}