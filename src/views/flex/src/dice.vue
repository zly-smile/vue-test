<template>
  <div class="dice">
    <div class="first">
      <div class="first1-face">
        <span class="item"></span>
      </div>
      <div class="first2-face">
        <span class="item"></span>
      </div>
      <div class="first3-face">
        <span class="item"></span>
      </div>
      <div class="first4-face">
        <span class="item"></span>
      </div>
      <div class="first5-face">
        <span class="item"></span>
      </div>
      <div class="first6-face">
        <span class="item"></span>
      </div>
      <div class="first7-face">
        <span class="item"></span>
      </div>
      <div class="first8-face">
        <span class="item"></span>
      </div>
      <div class="first9-face">
        <span class="item"></span>
      </div>
    </div>
    <div class="second">
      <div class="second1-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second2-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second3-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second4-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second5-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second6-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second7-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second8-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="second9-face">
        <span class="item"></span>
        <span class="item"></span>
      </div>
    </div>
    <div class="third">
      <div class="third1-face">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="third2-face">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="third3-face">
        <div class="column">
          <span class="item"></span>
          <span class="item"></span>
        </div>
        <div class="column">
          <span class="item"></span>
          <span class="item"></span>
        </div>
      </div>
      <div class="third4-face">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(screen.width, screen.height, '屏幕的宽高')
    console.log(window.innerWidth, window.innerHeight, '网页可用尺寸，包括滚动条')
  }
}
</script>

<style lang="scss">
.dice {
  background: linear-gradient(top, #222, #333);
  width: 100%;
  height: 100%;
}
.first,
.second,
.third {
  display: flex;
}
.first1-face {
  display: flex;
}
.first2-face {
  display: flex;
  justify-content: center;
}
.first3-face {
  display: flex;
  justify-content: flex-end;
}
.first4-face {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.first5-face {
  display: flex;
  justify-content: center;
  align-items: center;
}
.first6-face {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.first7-face {
  display: flex;
  align-items: flex-end;
}
.first8-face {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.first9-face {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.second1-face {
  display: flex;
  justify-content: space-between;
}
.second2-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.second3-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.second4-face {
  display: flex;

  > :nth-of-type(2) {
    align-self: center;
  }
}
.second5-face {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.second6-face {
  display: flex;

  > :nth-of-type(2) {
    align-self: flex-end;
  }
}
.second7-face {
  display: flex;
  justify-content: space-between;

  >:nth-of-type(2) {
    align-self: flex-end;
  }
}
.second8-face {
  display: flex;
  justify-content: space-between;

  >:nth-of-type(1) {
    align-self: flex-end;
  }
  >:nth-of-type(2) {
    align-self: flex-start;
  }
}
.second9-face {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.third1-face {
  display: flex;

  >:nth-of-type(2) {
    align-self: center;
  }

  >:nth-of-type(3) {
    align-self: flex-end;
  }
}
.third2-face {
  display: flex;

  >:nth-of-type(1) {
    align-self: flex-end;
  }
  >:nth-of-type(2) {
    align-self: center;
  }

  >:nth-of-type(3) {
    align-self: flex-start;
  }
}
.third3-face {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .column {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
  }
}
.third4-face {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
[class$='face'] {
  width: 104px;
  height: 104px;
  margin: 16px;
  padding: 4px;
  border-radius: 10%;
  background-color: #e7e7e7;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7;
}

.item {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;
  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}
</style>
