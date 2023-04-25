<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<style>
    #c1,#c2{
        height:400px;
        width:400px;
        border:10px solid blueviolet;
        margin:0px 10px 0px 10px;
    }
    #container > div {
        justify-content: flex-end;
        display:inline-block;
    }

</style>
<script src="/js/newCenter/newCenterUSD.js"></script>  <!-- USD- Currency Line chart-->
<script src="/js/newCenter/newCenterBell.js"></script>   <!-- USD- Bell shaped chart-->

<div class="container" id="container">
    <h4> 아래의 데이터는 동일한 데이터를 line chart와 bell-shaped 분산 차트로 표현한 것입니다. </h4>
            <div id="c1">      </div>
            <div id="c2">      </div>
    <h4> 왼쪽 그래프는 채권시장의 실시간 매도량입니다. </h4>
    <h4> 오른쪽 그래프는 채권시장의 실시간 매도량의 분산(리스크) 분포입니다. </h4>
</div>
