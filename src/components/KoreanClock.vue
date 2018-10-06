<template>
<div id="container">
  <div id="clock">
    <div id="ampm">
      {{ ampm }}
    </div>

    <div id="hours">
      {{ hours }}
    </div>

    <div id="minutes">
      {{ minutes}}
    </div>

    <div id="seconds">
      {{ seconds}}
    </div>
  </div>
</div>
</template>

<script>

  var date = new Date();
  export default {
    name: 'KoreanClock',
    data () {
      return {
        ampm: this.setAmpm(date.getHours()),
        date: null,
        hours: null,
        minutes: null,
        seconds: null,
        message : 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      updateTime: function() {

        this.date = new Date();
        this.setAmpm(this.date.getHours());
        this.setHours(this.date.getHours());
        this.setMinutesandSeconds(this.date.getMinutes(), true);
        this.setMinutesandSeconds(this.date.getSeconds(), false);

      },
      setAmpm: function(num) {
        if(num < 12) this.ampm = '오전';
        else this.ampm = '오후';
      },
      setHours: function(num) {
        let ret;

        if(num === 1) ret='한';
        else if(num === 2) ret='두';
        else if(num === 3) ret='세';
        else if(num === 4) ret='네';
        else if(num === 5) ret='다섯';
        else if(num === 6) ret='여섯';
        else if(num === 7) ret='일곱';
        else if(num === 8) ret='여덟';
        else if(num === 9) ret='아홉';
        else if(num === 10) ret='열';
        else if(num === 11) ret='열한';
        else if(num === 12) ret='열두';
        else if(num === 13) ret='한';
        else if(num === 14) ret='두';
        else if(num === 15) ret='세';
        else if(num === 16) ret='네';
        else if(num === 17) ret='다섯';
        else if(num === 18) ret='여섯';
        else if(num === 19) ret='일곱';
        else if(num === 20) ret='여덟';
        else if(num === 21) ret='아홉';
        else if(num === 22) ret='열';
        else if(num === 23) ret='열한';
        else ret = '열두';

        this.hours = ret + '시';
      },
      setMinutesandSeconds: function(num, isMinutes) {
        let ret;

        if(num === 0) ret = '영';
        else if(num === 1) ret = '일';
        else if(num === 2) ret = '이';
        else if(num === 3) ret = '삼';
        else if(num === 4) ret = '사';
        else if(num === 5) ret = '오';
        else if(num === 6) ret = '육';
        else if(num === 7) ret = '칠';
        else if(num === 8) ret = '팔';
        else if(num === 9) ret = '구';
        else if(num === 10) ret = '십';
        else if(num === 11) ret = '십일';
        else if(num === 12) ret = '십이';
        else if(num === 13) ret = '십삼';
        else if(num === 14) ret = '십사';
        else if(num === 15) ret = '십오';
        else if(num === 16) ret = '십육';
        else if(num === 17) ret = '십칠';
        else if(num === 18) ret = '십팔';
        else if(num === 19) ret = '십구';
        else if(num === 20) ret = '이십';
        else if(num === 21) ret = '이십일';
        else if(num === 22) ret = '이십이';
        else if(num === 23) ret = '이십삼';
        else if(num === 24) ret = '이십사';
        else if(num === 25) ret = '이십오';
        else if(num === 26) ret = '이십육';
        else if(num === 27) ret = '이십칠';
        else if(num === 28) ret = '이십팔';
        else if(num === 29) ret = '이십구';
        else if(num === 30) ret = '삼십';
        else if(num === 31) ret = '삼십일';
        else if(num === 32) ret = '삼십이';
        else if(num === 33) ret = '삼십삼';
        else if(num === 34) ret = '삼십사';
        else if(num === 35) ret = '삼십오';
        else if(num === 36) ret = '삼십육';
        else if(num === 37) ret = '삼십칠';
        else if(num === 38) ret = '삼십팔';
        else if(num === 39) ret = '삼십구';
        else if(num === 40) ret = '사십';
        else if(num === 41) ret = '사십일';
        else if(num === 42) ret = '사십이';
        else if(num === 43) ret = '사십삼';
        else if(num === 44) ret = '사십사';
        else if(num === 45) ret = '사십오';
        else if(num === 46) ret = '사십육';
        else if(num === 47) ret = '사십칠';
        else if(num === 48) ret = '사십팔';
        else if(num === 49) ret = '사십구';
        else if(num === 50) ret = '오십';
        else if(num === 51) ret = '오십일';
        else if(num === 52) ret = '오십이';
        else if(num === 53) ret = '오십삼';
        else if(num === 54) ret = '오십사';
        else if(num === 55) ret = '오십오';
        else if(num === 56) ret = '오십육';
        else if(num === 57) ret = '오십칠';
        else if(num === 58) ret = '오십팔';
        else ret = '오십구';

        if(isMinutes) this.minutes = ret + '분';
        else this.seconds = ret + '초';
      }
    },
    created: function() {
      setInterval(this.updateTime, 1000)
    },
  }
</script>

<style scoped>
  *{
    margin:0;
    height:0;
  }
  #container{
    width:100%;
    height:100%;
    background-image: url("../assets/images/milkyway.jpg");
    position:absolute;
    left:0;
    top:0;

    overflow:hidden;
    background-position: center;
    background-size:cover;
  }
  #clock{
    width: 500px;
    height: 500px;

    border:1px solid white;
    box-sizing: border-box;
    padding: 50px;

    position: absolute;
    top: 50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -250px;
  }
  #ampm{
    width:100%;
    height:30px;
    font-size:30px;
    line-height:30px;
    color:white;
  }
  #hours{
    width:100%;
    height:90px;
    font-size:90px;
    line-height:90px;
    font-weight:bold;
    color:white;
    margin-top:30px;
  }
  #minutes{
    width:100%;
    height:50px;
    font-size:50px;
    line-height:50px;
    margin-top:15px;
    color:white;
  }
  #seconds{
    width:100%;
    height:30px;
    font-size:30px;
    margin-top:10px;
    color:white;
  }
</style>
