/* SUPREME RECOMMEND */
const bestItems = Array.from({ length: 9 }, (_, i) => document.getElementById(`bestItem${i + 1}`));

if (bestItems.length > 0) {
    bestItems.forEach((item, index) => {
        if (item) {
            item.addEventListener("mouseover", () => {
                item.setAttribute("src", `image/item-${index + 1}-2.jpg`);
            });

            item.addEventListener("mouseleave", () => {
                item.setAttribute("src", `image/item-${index + 1}-1.jpg`);
            });
        }
    });
}

/* newItem */
const items = Array.from({ length: 9 }, (_, i) => document.getElementById(`newItem${i + 1}`));

if (items.length > 0) {
    items.forEach((item, index) => {
        if (item) {
            item.addEventListener("mouseover", () => {
                item.setAttribute("src", `image/newItem-0${index + 1}-02.jpg`);
            });

            item.addEventListener("mouseleave", () => {
                item.setAttribute("src", `image/newItem-0${index + 1}-01.jpg`);
            });
        }
    });
}

/* 상품 메인 작은 이미지 선택 이벤트 */
function changeImage(imageSrc) {
    const mainImg = document.getElementById("main-img");
    if (mainImg) {
        mainImg.src = imageSrc;
    }
}

/* 구매하기 이벤트 */

// 현재 선택된 사이즈를 저장할 변수
let selectedSize = null;

// 선택된 버튼에 스타일 적용하고, 선택된 사이즈를 저장하는 함수
function selectSize(button, size) {
    const buttons = document.querySelectorAll(".size-box button");
    if (buttons.length > 0) {
        buttons.forEach(btn => {
            btn.style.border = "1px solid black";
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        });

        // 선택된 버튼에 스타일 적용
        button.style.border = "2px solid black";
        button.style.backgroundColor = "black";
        button.style.color = "white";

        // 선택된 사이즈 저장
        selectedSize = size;
    }
}

// 구매하기 버튼 클릭 시 사이즈 선택 여부 확인하는 함수
function buyNow() {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    if (modal && modalMessage) {
        if (!selectedSize) {
            // 사이즈가 선택되지 않은 경우 모달 메시지를 업데이트하고 모달을 표시
            modalMessage.textContent = "사이즈를 선택해 주세요.";
            modal.style.display = "flex";
        } else {
            // 사이즈가 선택되었을 때의 모달 메시지를 업데이트하고 모달을 표시
            modalMessage.textContent = `${selectedSize} 사이즈가 선택되었습니다. 구매를 진행합니다.`;
            modal.style.display = "flex";
        }
    }
}

// 장바구니 버튼 클릭 시 사이즈 선택 여부 확인 후 모달 표시하는 함수
function addToCart() {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    if (modal && modalMessage) {
        if (!selectedSize) {
            // 사이즈가 선택되지 않은 경우 모달 메시지를 업데이트하고 모달을 표시
            modalMessage.textContent = "사이즈를 선택해 주세요.";
            modal.style.display = "flex";
        } else {
            // 사이즈가 선택되었을 때 장바구니 메시지로 업데이트하고 모달을 표시
            modalMessage.textContent = "상품을 장바구니에 담았습니다.";
            modal.style.display = "flex";
        }
    }
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}