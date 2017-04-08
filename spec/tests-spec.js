'use strict';
var myApp = require('../app/library.js');
describe("Get prime test",function(){
  it("should return [ '2', '3', '5' ] for getPrime of 5", function(){
		expect(myApp.getPrime(5)).toEqual([ '2', '3', '5' ]);
	});

	it("should return [ '2', '3', '5', '7'] for getPrime of 10", function(){
		expect(myApp.getPrime(10)).toEqual([ '2', '3', '5', '7']);
	});

	it("should return [ '2', '3' ] for getPrime of 3", function(){
		expect(myApp.getPrime(3)).toEqual([ '2', '3' ]);
	});

	it("should return 'Invalid input' for getPrime of true", function(){
		expect(myApp.getPrime(true)).toBe('Invalid input');
	});

	it("should return 'Invalid input' for getPrime of [40]", function(){
		expect(myApp.getPrime([40])).toBe('Invalid input');
	});

	it("should return 'Invalid input' for getPrime of a", function(){
		expect(myApp.getPrime('a')).toBe('Invalid input');
	});

	it("should return 'Negative input' for getPrime of -5", function(){
		expect(myApp.getPrime(-5)).toBe('Negative input');
	});

	it("should return 'Invalid input' for getPrime of false", function(){
		expect(myApp.getPrime(false)).toBe('Invalid input');
	});

	it("should return 'Invalid input' for getPrime of {}", function(){
		expect(myApp.getPrime({})).toBe('Invalid input');
	});

	it("should return [ '2', '3', '5' ] for getPrime of 6", function(){
		expect(myApp.getPrime(6)).toEqual([ '2', '3', '5' ]);
	});
});