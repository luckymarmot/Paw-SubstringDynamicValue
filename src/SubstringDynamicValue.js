@registerDynamicValueClass
class SubstringDynamicValue {
  static identifier = 'com.luckymarmot.PawExtensions.SubstringDynamicValue'
  static title = 'Substring'
  static inputs = [
    new DynamicValueInput('input', 'Input', "String"),
    new DynamicValueInput('start', 'Start', "Number", {float: false}),
    new DynamicValueInput('length', 'Length', "Number", {float: false}),
  ]

  evaluate(context) {
    const input = this.input || ''
    if (this.start > input.length ||
        (this.start < 0 && Math.abs(this.start) > input.length)) {
        throw new Error('Substring: Start is larger than input length');
    }
    if (this.length < 0) {
        return input.substr(this.start)
    }
    else {
        return input.substr(this.start, this.length)
    }
  }
}
