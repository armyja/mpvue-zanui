export default {
  // 基础类型输入框配置
  base: {
    name: {
      focus: true,
      title: '收货人',
      placeholder: '名字',
      componentId: 'name'
    },
    tel: {
      error: true,
      title: '联系电话',
      inputType: 'number',
      placeholder: '请输入手机号',
      componentId: 'tel'
    },
    address: {
      title: '详细地址',
      type: 'textarea',
      placeholder: '请输入详细地址',
      componentId: 'address'
    }
  },
  // 无标题输入框
  notitle: {
    placeholder: '请输入收货人姓名',
    componentId: 'notitle'
  },
  // 圆角输入框
  radius: {
    totalPrice: {
      right: true,
      mode: 'wrapped',
      title: '消费总额',
      inputType: 'number',
      placeholder: '询问收银员后输入',
      componentId: 'totalPrice'
    },
    excludePrice: {
      right: true,
      error: true,
      mode: 'wrapped',
      title: '不参与优惠金额',
      inputType: 'number',
      placeholder: '询问收银员后输入',
      componentId: 'excludePrice'
    },
    notitle: {
      mode: 'wrapped',
      inputType: 'number',
      placeholder: '请输入消费金额',
      componentId: 'notile-radius'
    }
  },
  // Form 中使用输入框
  form: {
    name: {
      placeholder: '请输入收货人姓名',
      componentId: 'form:test:name'
    },
    tel: {
      name: 'tel',
      inputType: 'tel',
      placeholder: '请输入收货人手机号码',
      componentId: 'form:test:tel'
    }
  }
}
