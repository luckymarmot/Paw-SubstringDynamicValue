class Substring {

  evaluate() {

  	if (this.start > this.input.length - 1) {
  		return "";
  	}

  	if (this.length === 0) {
  		return this.input.substr(this.start)
  	}
	
  	else {

  		return this.input.substr(this.start, this.length);
  	}

  }
}

Substring.identifier = "com.luckymarmot.PawExtensions.SubstringDynamicValue";

Substring.title = "Substring";


Substring.inputs = [
	InputField("input", "String", "String"),
	InputField("start", "Start from (index)", "Number", {defaultvalue: 0} ),
	InputField("length", "Length (optional)", "Number", {defaultvalue: 0})
]



registerDynamicValueClass(Substring);

