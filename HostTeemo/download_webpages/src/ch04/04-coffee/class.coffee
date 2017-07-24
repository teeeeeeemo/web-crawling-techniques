# Champion 클래스 정의
class Champion
	# 프로퍼티 정의
	atype: "LOL Champion"

	# 생성자 정의 
	constructor: (@name) ->
		# name 프로퍼티는 자동으로 생성

	# 메소드 정의
	print: ->
		console.log "이름은 #{@name}, 종류는 #{@atype}입니다."

# 인스턴스 생성
teemo = new Champion "Teemo"
teemo.print()
