var toggleMainPopup = function() {

    /* 스토리지 제어 함수 정의 */
    var handleStorage = {
        // 스토리지에 데이터 쓰기(이름, 만료일)
        setStorage: function (name, exp) {
        // 만료 시간 구하기(exp를 ms단위로 변경)
        var date = new Date();
        date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

        // 로컬 스토리지에 저장하기
        // (값을 따로 저장하지 않고 만료 시간을 저장)
        localStorage.setItem(name, date)
        },
        // 스토리지 읽어오기
        getStorage: function (name) {
        var now = new Date();
        now = now.setTime(now.getTime());
        // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
        // 시간이 남아 있으면 true, 아니면 false 리턴
        return parseInt(localStorage.getItem(name)) > now
        }
    };
    
    
    // 쿠키 읽고 화면 보이게
    if (handleStorage.getStorage("today")) {
        $(".main-popup").removeClass("on");
    } else {
        $(".main-popup").addClass("on");
    }

    // 오늘하루 보지 않기 버튼
    $(".main-popup").on("click", ".btn-today-close", function () {
        // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
        handleStorage.setStorage("today", 1);
        $(this).parents(".main-popup.on").removeClass("on");
    });

    // 일반 닫기 버튼
    $(".main-popup").on("click", ".btn-close", function () {
        $(this).parents(".main-popup.on").removeClass("on");
    });
    }

    $(function() {
        toggleMainPopup();
    });