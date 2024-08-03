const openMenuIconNav = document.querySelector(".open-menu-icon-nav")
const closeMenuIconNav = document.querySelector(".close-menu-icon-nav")
const backThisProjectBtn = document.querySelector(".back-this-project-btn");
const closeSelectionModalIcon = document.querySelector(".close-icon-selection-modal");
const progressBar = document.querySelector(".progress-bar");
const successModal = document.querySelector(".success-modal");
const successModalBtn = document.querySelector(".success-modal-got-it-btn");
const selectRewardBtns = document.querySelectorAll(".select-reward-btn");


const darkBackground = document.querySelector(".dark-background");
const mobileNav = document.querySelector(".mobile-nav");
const main = document.querySelector(".main");
const selectionModal = document.querySelector(".selection-modal");

const bookmarkIcon = document.querySelector(".bookmark-icon");
const bookmarkedIcon = document.querySelector(".bookmarked-icon");
const bookmarkSpan = document.querySelector(".bookmark-span");

const totalMoneyRaised = document.querySelector(".total-money-raised");
const totalBackers = document.querySelector(".total-backers");

const noRewardModal = document.querySelector(".no-reward-modal");
const bambooStandModal = document.querySelector(".bamboo-stand-modal");
const blackEditionStandModal = document.querySelector(".black-edition-modal");
const mahoganySpecialModal = document.querySelector(".mahogany-special-modal");

const bambooStandSelectBtn = document.querySelector(".bamboo-stand-select-btn");
const blackEditionStandSelectBtn = document.querySelector(".black-edition-stand-select-btn");
const mahoganySpecialSelectBtn = document.querySelector(".mahogany-special-select-btn");

const noRewardPledgeInputRadio = document.querySelector(".no-reward-pledge-input-radio");
const bambooStandPledgeInputRadio = document.querySelector(".bamboo-stand-pledge-input-radio");
const blackEditionStandPledgeInputRadio = document.querySelector(".black-edition-stand-pledge-input-radio");
const mahoganySpecialPledgeInputRadio = document.querySelector(".mahogany-special-pledge-input-radio");

const bambooStandPledgeInput = document.querySelector(".bamboo-stand-pledge-input");
const blackEditionStandPledgeInput = document.querySelector(".black-edition-stand-pledge-input");
const mahoganySpecialPledgeInput = document.querySelector(".mahogany-special-pledge-input");

const bambooStandPledgeDiv = document.querySelector(".bamboo-stand-pledge-div");
const blackEditionStandPledgeDiv = document.querySelector(".black-edition-stand-pledge-div");
const mahoganySpecialPledgeDiv = document.querySelector(".mahogany-special-pledge-div");

const noRewardPledgeContinueBtn = document.querySelector(".no-reward-pledge-continue-btn");
const bambooStandPledgeContinueBtn = document.querySelector(".bamboo-stand-pledge-continue-btn");
const blackEditionStandPledgeContinueBtn = document.querySelector(".black-edition-stand-pledge-continue-btn");
const mahoganySpecialPledgeContinueBtn = document.querySelector(".mahogany-special-pledge-continue-btn");

const noRewardH4 = document.querySelector(".h4-pledge-no-reward");
const bambooStandH4 = document.querySelector(".h4-pledge-bamboo-stand");
const blackEditionStandH4 = document.querySelector(".h4-pledge-black-edition-stand");
const mahoganySpecialH4 = document.querySelector(".h4-pledge-mahogany-special");

const bambooStandHr = document.querySelector(".hr-pledge-bamboo-stand")
const blackEditionStandHr = document.querySelector(".hr-pledge-black-edition-stand")
const mahoganySpecialHr = document.querySelector(".hr-pledge-mahogany-special")


function mobileNavbar() {
    openMenuIconNav.addEventListener("click", ()=> {
        mobileNav.classList.remove("hidden");
        openMenuIconNav.classList.add("hidden");
        closeMenuIconNav.classList.remove("hidden");
        darkBackground.style.display = "block";
    })
    closeMenuIconNav.addEventListener("click", ()=> {
        mobileNav.classList.add("hidden");
        closeMenuIconNav.classList.add("hidden");
        openMenuIconNav.classList.remove("hidden");
        darkBackground.style.display = "none";
    })
}

function bookmark() {
    bookmarkIcon.addEventListener("click",()=> {
        bookmarkIcon.classList.add("hidden");
        bookmarkedIcon.classList.remove("hidden");
        bookmarkSpan.innerHTML = "Bookmarked";
        bookmarkSpan.classList.add("bookmarked");
    })
}

function unbookmark() {
    bookmarkedIcon.addEventListener("click",()=> {
        bookmarkedIcon.classList.add("hidden");
        bookmarkIcon.classList.remove("hidden");
        bookmarkSpan.innerHTML = "Bookmark";
        bookmarkSpan.classList.remove("bookmarked");
    })
}

function toggleSelectionModal() {
    backThisProjectBtn.addEventListener("click", ()=> {
        selectionModal.classList.remove("hidden");
        darkBackground.style.display = "block";
    })
    closeSelectionModalIcon.addEventListener("click", ()=> {
        selectionModal.classList.add("hidden");
        darkBackground.style.display = "none";
    })
    selectRewardBtns.forEach(btn => {
        btn.addEventListener("click", ()=> {
            selectionModal.classList.remove("hidden");
            darkBackground.style.display = "block";
        })
    });
}

function selectReward() {
    noRewardPledgeInputRadio.addEventListener("click", ()=> {
        noRewardPledgeContinueBtn.classList.remove("hidden");
        noRewardModal.classList.add("selection-modal-option-selected");

        if(blackEditionStandPledgeInputRadio.checked) {
            blackEditionStandModal.classList.remove("selection-modal-option-selected");
            blackEditionStandPledgeDiv.classList.add("hidden");
            blackEditionStandPledgeInputRadio.checked = false;
        } else if (bambooStandPledgeInputRadio.checked) {
            bambooStandModal.classList.remove("selection-modal-option-selected");
            bambooStandPledgeDiv.classList.add("hidden");
            bambooStandPledgeInputRadio.checked = false;
        }
    })

    bambooStandPledgeInputRadio.addEventListener("click", ()=> {
        bambooStandModal.classList.add("selection-modal-option-selected");
        bambooStandPledgeDiv.classList.remove("hidden");
        bambooStandHr.classList.remove("hidden");

        if(blackEditionStandPledgeInputRadio.checked) {
            blackEditionStandModal.classList.remove("selection-modal-option-selected");
            blackEditionStandPledgeDiv.classList.add("hidden");
            blackEditionStandPledgeInputRadio.checked = false;
            blackEditionStandHr.classList.add("hidden");
        } else if (noRewardPledgeInputRadio.checked) {
            noRewardModal.classList.remove("selection-modal-option-selected");
            noRewardPledgeContinueBtn.classList.add("hidden");
            noRewardPledgeInputRadio.checked = false;
        }
    })

    blackEditionStandPledgeInputRadio.addEventListener("click", ()=> {
        blackEditionStandModal.classList.add("selection-modal-option-selected");
        blackEditionStandPledgeDiv.classList.remove("hidden");
        blackEditionStandHr.classList.remove("hidden");

        if(bambooStandPledgeInputRadio.checked) {
            bambooStandModal.classList.remove("selection-modal-option-selected");
            bambooStandPledgeDiv.classList.add("hidden");
            bambooStandPledgeInputRadio.checked = false;
            bambooStandHr.classList.add("hidden");
        } else if (noRewardPledgeInputRadio.checked) {
            noRewardModal.classList.remove("selection-modal-option-selected");
            noRewardPledgeContinueBtn.classList.add("hidden");
            noRewardPledgeInputRadio.checked = false;
        }
    })

    // mahoganySpecialPledgeInputRadio.addEventListener("click", ()=> {
    //     mahoganySpecialModal.classList.add("selection-modal-option-selected");
    //     mahoganySpecialPledgeDiv.classList.remove("hidden");
    // })

    noRewardH4.addEventListener("click",()=>{
        noRewardPledgeInputRadio.checked = true;
        noRewardPledgeContinueBtn.classList.remove("hidden");
        noRewardModal.classList.add("selection-modal-option-selected");

        if(blackEditionStandPledgeInputRadio.checked) {
            blackEditionStandModal.classList.remove("selection-modal-option-selected");
            blackEditionStandPledgeDiv.classList.add("hidden");
            blackEditionStandPledgeInputRadio.checked = false;
            blackEditionStandHr.classList.add("hidden");
        } else if (bambooStandPledgeInputRadio.checked) {
            bambooStandModal.classList.remove("selection-modal-option-selected");
            bambooStandPledgeDiv.classList.add("hidden");
            bambooStandPledgeInputRadio.checked = false;
            bambooStandHr.classList.add("hidden");
        }
    })

    bambooStandH4.addEventListener("click",()=>{
        bambooStandPledgeInputRadio.checked = true;
        bambooStandModal.classList.add("selection-modal-option-selected");
        bambooStandPledgeDiv.classList.remove("hidden");
        bambooStandHr.classList.remove("hidden");

        if(blackEditionStandPledgeInputRadio.checked) {
            blackEditionStandModal.classList.remove("selection-modal-option-selected");
            blackEditionStandPledgeDiv.classList.add("hidden");
            blackEditionStandPledgeInputRadio.checked = false;
            blackEditionStandHr.classList.add("hidden");
        } else if (noRewardPledgeInputRadio.checked) {
            noRewardModal.classList.remove("selection-modal-option-selected");
            noRewardPledgeContinueBtn.classList.add("hidden");
            noRewardPledgeInputRadio.checked = false;
        }
    })

    blackEditionStandH4.addEventListener("click",()=>{
        blackEditionStandPledgeInputRadio.checked = true;
        blackEditionStandModal.classList.add("selection-modal-option-selected");
        blackEditionStandPledgeDiv.classList.remove("hidden");
        blackEditionStandHr.classList.remove("hidden");


        if(bambooStandPledgeInputRadio.checked) {
            bambooStandModal.classList.remove("selection-modal-option-selected");
            bambooStandPledgeDiv.classList.add("hidden");
            bambooStandPledgeInputRadio.checked = false;
            bambooStandHr.classList.add("hidden");

        } else if (noRewardPledgeInputRadio.checked) {
            noRewardModal.classList.remove("selection-modal-option-selected");
            noRewardPledgeContinueBtn.classList.add("hidden");
            noRewardPledgeInputRadio.checked = false;
        }
    })
}

function processPledge() {
    let totalMoneyStr = totalMoneyRaised.innerHTML.slice(1);
    let stringWithoutComma = totalMoneyStr.replace(/,/g, '');
    let totalMoney = parseInt(stringWithoutComma);

    let totalBackersStr = totalBackers.innerHTML;
    let totalBackersWithoutComma = totalBackersStr.replace(/,/g, '');
    let totalBackersNum = parseInt(totalBackersWithoutComma) 
    let totalBackersSum = totalBackersNum + 1;
    
    let pledges = 0;

    noRewardPledgeContinueBtn.addEventListener("click", ()=> {
        selectionModal.classList.add("hidden");
        darkBackground.style.display = "none";
    })

    bambooStandPledgeContinueBtn.addEventListener("click", ()=> {
        let bambooPledge = parseInt(bambooStandPledgeInput.value); 
        if(bambooStandPledgeInput.value >= 25) {
            totalMoneyRaised.innerHTML = totalMoney += bambooPledge;
            totalMoneyRaised.innerHTML = "$" + totalMoney.toLocaleString();
            pledges += 1;
            if(pledges == 1) {
                totalBackers.innerHTML = totalBackersSum.toLocaleString();
            }
            
            selectionModal.classList.add("hidden");
            darkBackground.style.display = "none";
            bambooStandPledgeInput.classList.remove("error-border");
            
            updateProgressBar()
            completedPledgeModal()
        } else {
            bambooStandPledgeInput.classList.add("error-border");
        }
    })
    
    blackEditionStandPledgeContinueBtn.addEventListener("click", ()=> {
        let blackEditionPledge = parseInt(blackEditionStandPledgeInput.value);
        if(blackEditionStandPledgeInput.value >= 75) {
            totalMoneyRaised.innerHTML = totalMoney += blackEditionPledge;
            totalMoneyRaised.innerHTML = "$" + totalMoney.toLocaleString();
            pledges += 1;
            if(pledges == 1) {
                totalBackers.innerHTML = totalBackersSum.toLocaleString();
            }
            
            selectionModal.classList.add("hidden");
            darkBackground.style.display = "none";
            blackEditionStandPledgeInput.classList.remove("error-border");

            updateProgressBar()
            completedPledgeModal()
            
        } else {
            blackEditionStandPledgeInput.classList.add("error-border");
        }
        
    })
    
    // mahoganySpecialPledgeContinueBtn.addEventListener("click", ()=> {
        //     selectionModal.classList.add("hidden");
        // })
        
    }

function updateProgressBar() {
    let moneyRaisedStrWithoutDollar = totalMoneyRaised.innerHTML.slice(1);
    let moneyRaisedWithoutComma = moneyRaisedStrWithoutDollar.replace(/,/g, '');
    let moneyRaisedNum = parseInt(moneyRaisedWithoutComma);
    let moneyRaisedPercentage = moneyRaisedWithoutComma.substring(0, 2) + "%";
    
    if(moneyRaisedNum <= 100000) {
        progressBar.style.width =  moneyRaisedPercentage;
    } else {
        progressBar.style.width = "100%";
    }
}   

function completedPledgeModal() {
    successModal.classList.remove("hidden");
    darkBackground.style.display = "block";
    
    successModalBtn.addEventListener("click", ()=> {
        successModal.classList.add("hidden");
        darkBackground.style.display = "none";
        
    })
}

function rewardBtns() {
    selectRewardBtns.forEach(btn => {
        btn.addEventListener("click", ()=> {
            toggleSelectionModal()
        })
    });
}

mobileNavbar()
bookmark()
unbookmark()
toggleSelectionModal()
selectReward()
processPledge()
updateProgressBar()
// completedPledgeModal()
rewardBtns()

