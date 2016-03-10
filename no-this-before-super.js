//#Patterns: no-this-before-super

class A extends B { 
	constructor() { 
		//#Err: no-this-before-super
		this.a = 0; 
		super(); 
	} 
} 
class A extends B { 
	constructor() {
		//#Err: no-this-before-super
		super.foo();
		super(); 
	} 
} class A extends B { 
	constructor() { 
		//#Err: no-this-before-super
		super(this.foo()); 
	} 
}
