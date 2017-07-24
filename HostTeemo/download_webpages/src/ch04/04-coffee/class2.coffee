# Animal 클래스 정의
class Animal
	# 프로퍼티 정의
	atype: "Animal"

	# 생성자 정의
	constructor: (@name) ->
		#name 프로퍼티는 자동으로 생성 

	# 메소드 정의 
	print: ->
		console.log "이름은 #{@name}, 종류는#{@atype}입니다."

class Dog extends Animal
	atype: "Dog"
	print: ->
		console.log "몽몽"
		super()

class Cat extends Animal
	atype: "Cat"
	print: ->
		console.log "냐옹"
		super()

# 인스턴스 생성
mongee = new Dog "Mongee"
mongee.print()

haro = new Cat "Haro"
haro.print()
