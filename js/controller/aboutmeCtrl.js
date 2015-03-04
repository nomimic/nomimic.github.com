/**
 * Created by lucas on 15. 3. 3..
 */
'use strict';

app.controller('aboutmeCtrl',function($scope,$window){
    
    $scope.timelineDatas = [];

    var i = 0;

    //타임라인 관련 데이터
    $scope.timelineDatas = [
        {
            'date' : "현재"
            ,'desc' : "서버 프로그래밍 세계 여행 중.."
        },
        {
            'date' : "2010.06"
            ,'desc' : "코나아이 입사"
        },
        {
            'date' : "2009.07"
            ,'desc' : "민택기술 퇴사"
        },
        {
            'date' : "2008.11"
            ,'desc' : "결혼에 골인"
        },
        {
            'date' : "2007.09"
            ,'desc' : "민택기술 입사"
        },
        {
            'date' : "2007.08"
            ,'desc' : "삼테크아이인씨 퇴사"
        },
        {
            'date' : "2005.02"
            ,'desc' : "서일대학 졸업"
        },
        {
            'date' : "2004.08"
            ,'desc' : "삼테크아이앤씨 입사"
        },
        {
            'date' : "2002.03"
            ,'desc' : "서일대학 입학"
        },
        {
            'date' : "1983.06"
            ,'desc' : "출생"
        }
    ];

    //기술 관련
    $scope.skillDatas = [
        {
            'name' : "JAVA"
        },
        {
            'name' : "SPRING"
        },
        {
            'name' : "VC++"
        },
        {
            'name' : "SQL"
        },
        {
            'name' : "SMART CARD(SE)"
        },
        {
            'name' : "WEB SERVER"
        }
    ];
    
})
