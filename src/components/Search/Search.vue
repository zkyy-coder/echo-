<template>
  <div class="search">
		<input type="text" placeholder="输入要搜索的内容" />
	</div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="less" scoped>
	.search {
	  display: inline-block;
		
	  input {
			background: url('http://www.app-echo.com/v/dist-prod/images/e7bc9b0172145494d645f3671c2a3aba.png') no-repeat;
			background-size: 14px 14px;
			background-position: 10px 50%;
	    outline: none;
	    padding: 8px 28px 8px 32px;;
	    height: 14px;
	    width: 150px;
	    border-radius: 50px;
	    border: 1px solid #777;
	    background: rbg(247,247,247);
	  }
	}
</style>
