

function $(id) {
    "use strict";
    return document.getElementById(id);
}

var startButton = $("start-button");
    
var totalBox = $("total-box"),
    introText = $("intro-text"),
    mainSection = $("main");

function showSection() {
    "use strict";
    totalBox.style.display = "block";
    mainSection.style.display = "block";
    startButton.style.display = "none";
    introText.style.display = "none";
}

startButton.addEventListener("click", showSection, false);



var addressType = $("address-type");


function addressTypeOther() {
    "use strict";
    var otherBox = $("other-box");
    if (addressType.value === "other") {
        otherBox.style.display = "block";
    } else {
        otherBox.style.display = "hidden";
    }
}

addressType.addEventListener("change", addressTypeOther, false);


var sameAsDelivery = $("bill_info_same");

function fillBilling() {
    "use strict";
    if (sameAsDelivery.checked === true) {
        document.form.bill_name.value = document.form.name.value;
        document.form.bill_street_address.value = document.form.delivery_street_address.value;
        document.form.bill_optional_apt.value = document.form.delivery_optional_apt.value;
        document.form.bill_city.value = document.form.delivery_city.value;
        document.form.bill_state.value = document.form.delivery_state.value;
        document.form.bill_zip.value = document.form.delivery_zip.value;
    }
    
    if (sameAsDelivery.checked === false) {
        document.form.bill_name.value = "";
        document.form.bill_street_address.value = "";
        document.form.bill_optional_apt.value = "";
        document.form.bill_city.value = "";
        document.form.bill_state.value = "";
        document.form.bill_zip.value = "";
    }
}

sameAsDelivery.addEventListener("change", fillBilling, false);



var doughType = document.getElementById("dough");


var handTossedPrices = {
    Small: 5.99,
    Medium: 8.99,
    Large: 10.99
};

var thinCrustPrices = {
    Medium: 4.99,
    Large: 9.99
};

var newYorkPrices = {
    Large: 6.99,
    XL: 15.99
};

var panpizzaPrices = {
    Small: 7.99
};


function doughSelections() {
    "use strict";
    var pizzaSelectionBox = $("pizza_selection"),
        pizzaSelectionDiv = $("dough_box"),
        property,
        elemento,
        opt,
        cheeseBox = $("cheese_box"),
        sauceBox = $("sauce_box"),
        toppingsBox = $("toppings_box");
    pizzaSelectionDiv.style.display = "block";
    
    function showCheeseSauceToppings() {
        cheeseBox.style.display = "block";
        sauceBox.style.display = "block";
        toppingsBox.style.display = "block";
    }
    
    pizzaSelectionBox.addEventListener("click", showCheeseSauceToppings, false);

    if (pizzaSelectionBox.childElementCount === 1) {
        if (document.form.dough.value === "hand tossed") {

            Object.getOwnPropertyNames(handTossedPrices).forEach(function (val, obj) {
                elemento = document.createElement("option");
                elemento.textContent = val + " ($" + handTossedPrices[val] + ")";
                elemento.value = handTossedPrices[val];
                pizzaSelectionBox.appendChild(elemento);
            });

        } else if (document.form.dough.value === "thin crust") {
            Object.getOwnPropertyNames(thinCrustPrices).forEach(function (val, obj) {
                elemento = document.createElement("option");
                elemento.textContent = val + " ($" + thinCrustPrices[val] + ")";
                elemento.value = thinCrustPrices[val];
                pizzaSelectionBox.appendChild(elemento);
            });

        } else if (document.form.dough.value === "new york style") {
            Object.getOwnPropertyNames(newYorkPrices).forEach(function (val, obj) {
                elemento = document.createElement("option");
                elemento.textContent = val + " ($" + newYorkPrices[val] + ")";
                elemento.value = newYorkPrices[val];
                pizzaSelectionBox.appendChild(elemento);
            });

        } else if (document.form.dough.value === "pan pizza") {
            Object.getOwnPropertyNames(panpizzaPrices).forEach(function (val, obj) {
                elemento = document.createElement("option");
                elemento.textContent = val + " ($" + panpizzaPrices[val] + ")";
                elemento.value = panpizzaPrices[val];
                pizzaSelectionBox.appendChild(elemento);
            });
        }
    } else {
        pizzaSelectionBox.removeChild(pizzaSelectionBox.childNodes[2]);
        doughSelections();
    }
        
}

doughType.addEventListener("click", doughSelections, false);


function formValidation() {
    "use strict";

    var regName = /^[0-9]/g,
        regState = /^([a-zA-Z]){2}$/,
        regZip = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
        regPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
        regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        i,
        validDough = false,
        doughRadios = document.getElementsByName("dough");

    if (document.form.name.value.length === 0 || regName.test(document.form.name.value) === true) {
        window.console.log("Error in name!");
        document.form.name.focus();
        document.form.name.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.name.style.backgroundColor = "#FFFFFF";
    }
    
    if (document.form.addtype.value === "other" && document.form.other.value.length === 0) {
        window.console.log("Error in Address Type!");
        document.form.addtype.focus();
        document.form.other.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.other.style.backgroundColor = "#FFFFFF";
    }

    if (document.form.delivery_street_address.value.length === 0) {
        window.console.log("Error in Street Address!");
        document.form.delivery_street_address.focus();
        document.form.delivery_street_address.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.delivery_street_address.style.backgroundColor = "#FFFFFF";
    }
    
    if (document.form.delivery_city.value.length === 0) {
        window.console.log("Error in City");
        document.form.delivery_city.focus();
        document.form.delivery_city.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.delivery_city.style.backgroundColor = "#FFFFFF";
    }
   
    if (document.form.delivery_state.value.length === 0 || regState.test(document.form.delivery_state.value) === false) {
        window.console.log(document.form.delivery_state.value);
        window.console.log("Error in State");
        document.form.delivery_state.focus();
        document.form.delivery_state.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.delivery_state.style.backgroundColor = "#FFFFFF";
    }
    
    if (document.form.delivery_zip.value.length === 0 || regZip.test(document.form.delivery_zip.value) === false) {
        window.console.log("Error in Zip");
        document.form.delivery_zip.focus();
        document.form.delivery_zip.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.delivery_zip.style.backgroundColor = "#FFFFFF";
    }
   
    if (document.form.phone.value.length === 0 || regPhone.test(document.form.phone.value) === false) {
        window.console.log("Error in Phone");
        document.form.phone.focus();
        document.form.phone.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.phone.style.backgroundColor = "#FFFFFF";
    }
     
    if (document.form.email.value.length === 0 || regEmail.test(document.form.email.value) === false) {
        window.console.log("Error in Email");
        document.form.email.focus();
        document.form.email.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.email.style.backgroundColor = "#FFFFFF";
    }
    
    for (i = 0; i < doughRadios.length; i++) {
        if (doughRadios[i].checked === true && !validDough) {
            validDough = true;
        }
    }
    
    if (!validDough) {
        window.alert("Please pick a dough option");
        return false;
    }

    return true;
}


var finalButton = $("form-submit");

function billingValidation() {
    "use strict";
    var regName = /^[0-9]/g,
        regState = /^([a-zA-Z]){2}$/,
        regZip = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
        regCVC = /^[0-9]{3,4}$/,
        elemento,
        cCNum,
        cCDiv = $("cc_number_div"),
        currentDate,
        currentMonth,
        expirationMonth,
        currentYear,
        expirationYear,
        endText;
    
    if (sameAsDelivery.checked !== true) {
        if (document.form.bill_name.value.length === 0 || regName.test(document.form.bill_name.value) === true) {
            window.console.log("Error in billing name!");
            document.form.bill_name.style.backgroundColor = "#FF9999";
            return false;
        } else {
            document.form.bill_name.style.backgroundColor = "#FFFFFF";
        }
        
        if (document.form.bill_street_address.value.length === 0) {
            window.console.log("Error in billing street address!");
            document.form.bill_street_address.style.backgroundColor = "#FF9999";
            return false;
        } else {
            document.form.bill_street_address.style.backgroundColor = "#FFFFFF";
        }

        if (document.form.bill_city.value.length === 0) {
            window.console.log("Error in billing city");
            document.form.bill_city.style.backgroundColor = "#FF9999";
            return false;
        } else {
            document.form.bill_city.style.backgroundColor = "#FFFFFF";
        }

        if (document.form.bill_state.value.length === 0 || regState.test(document.form.bill_state.value) === false) {
            window.console.log("Error in billing state");
            document.form.bill_state.focus();
            document.form.bill_state.style.backgroundColor = "#FF9999";
            return false;
        } else {
            document.form.bill_state.style.backgroundColor = "#FFFFFF";
        }

        if (document.form.bill_zip.value.length === 0 || regZip.test(document.form.bill_zip.value) === false) {
            window.console.log("Error in billing zip");
            document.form.bill_zip.focus();
            document.form.bill_zip.style.backgroundColor = "#FF9999";
            return false;
        } else {
            document.form.bill_zip.style.backgroundColor = "#FFFFFF";
        }
    }
    

        
    if (document.form.cc_number.value.length === 0) {
        elemento = document.createElement("option");
        elemento.textContent = "Please enter a CC Number";
        elemento.value = "error";
        cCDiv.appendChild(elemento);
        document.form.cc_number.focus();
        document.form.cc_number.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.cc_number.style.backgroundColor = "#FFFFFF";
    }
    
    cCNum = document.form.cc_number.value;
        
    

    if (document.form.cvc.value.length === 0 || regCVC.test(document.form.cvc.value) === false) {
        window.console.log("Error in CVC code");
        document.form.cvc.focus();
        document.form.cvc.style.backgroundColor = "#FF9999";
        return false;
    } else {
        document.form.cvc.style.backgroundColor = "#FFFFFF";
    }

   
    
    currentDate = new Date();
    currentMonth = currentDate.getMonth() + 1;
    expirationMonth = parseInt(document.form.bill_month.value, 10);
    currentYear = currentDate.getFullYear();
    expirationYear = parseInt(document.form.bill_year.value, 10);

    if (expirationYear === currentYear || expirationYear <= currentYear) {
        if (expirationMonth <= currentMonth) {
            window.alert("Your card is expired. Please put in another card.");
            return false;
        } else if (expirationMonth > currentMonth) {
            window.console.log("Card expiration is valid");
        }
    } else if (expirationYear >= currentYear) {
        window.console.log("Card expiration is valid");
    }

    mainSection.style.display = "none";
    endText = $("end");
    endText.style.display = "block";
    window.alert("Your order is complete!");
}

finalButton.addEventListener("click", billingValidation, false);

function creditCardValidation() {
    "use strict";
    var cCNum = document.form.cc_number.value,
        splitCCNum = cCNum.split(""),
        cC = $("cc_number"),
        checksummed,
        elemento,
        newContent,
        regCC = /^\d+$/,
        cCDiv = $("cc_number_div");
    
    function cCError(text) {
        if (cCDiv.childElementCount === 1) {
            elemento = document.createElement("div");
            elemento.value = "error";
            elemento.setAttribute("class", "error");
            newContent = document.createTextNode(text);
            elemento.appendChild(newContent);
            cCDiv.insertBefore(elemento, cC.nextSibling);
            
            document.form.cc_number.focus();
            document.form.cc_number.style.backgroundColor = "#FF9999";
        } else {
            console.log("Child Element Count: " + cCDiv.childElementCount);
            console.log("elemento is typeof: " + typeof elemento);
            cCDiv.removeChild(cCDiv.childNodes[2]);
            cCError(text);
        }
    }
    
    function luhnFormula() {
        var reversedCCNum, i, doubledCCNum, totaledCCNum, intermediate;
        
        reversedCCNum = splitCCNum.reverse();

        for (i = 1; i < reversedCCNum.length; i = i + 2) {
            reversedCCNum[i] = reversedCCNum[i] * 2;
        }

        doubledCCNum = reversedCCNum.join("");
        doubledCCNum = doubledCCNum.split("");
        totaledCCNum = 0;

        for (i = 0; i < doubledCCNum.length; i++) {
            intermediate = parseInt(doubledCCNum[i], 10);
            totaledCCNum += intermediate;
        }

        checksummed = totaledCCNum / 10;

        if (totaledCCNum % 10 !== 0) {
            cCError("Invalid CC Number");
        } else if (totaledCCNum % 10 === 0) {
            window.console.log("valid");
            return true;
        }
    }

    function displayCCType(text) {
        if (cCDiv.childElementCount === 1) {
            elemento = document.createElement("div");
            elemento.setAttribute("class", "cardDisplay");
            newContent = document.createTextNode(text);
            elemento.appendChild(newContent);
            cCDiv.insertBefore(elemento, cC.nextSibling);
        } else {
            cCDiv.removeChild(elemento);
            displayCCType(text);
        }
    }
    
    if (cCNum.length === 0) {
        cCError("Credit Card Required");
        return false;
    } else if (regCC.test(cCNum) === false) {
        cCError("Numbers only");
        return false;
    } else if (splitCCNum.length !== 13 && splitCCNum.length !== 15 && splitCCNum.length !== 16) {
        cCError("Invalid CC Number Length");
        return false;
    } else if (regCC.test(cCNum) === true && (splitCCNum.length === 13 || splitCCNum.length === 15 || splitCCNum.length === 16)) {
        if ((splitCCNum.length === 16 || splitCCNum.length === 13) && splitCCNum[0] === "4") {
            cCDiv.removeChild(cCDiv.childNodes[2]);
            displayCCType("Visa");
            luhnFormula();
            document.form.cc_number.style.backgroundColor = "#FFFFFF";
        } else if (splitCCNum.length === 16 && splitCCNum[0] === "5" && splitCCNum[1] >= "1" && splitCCNum[1] <= "5") {
            cCDiv.removeChild(cCDiv.childNodes[2]);
            displayCCType("Mastercard");
            luhnFormula();
            document.form.cc_number.style.backgroundColor = "#FFFFFF";
        } else if (splitCCNum.length === 15 && splitCCNum[0] === "3" && splitCCNum[1] === "7") {
            cCDiv.removeChild(cCDiv.childNodes[2]);
            displayCCType("American Express");
            luhnFormula();
            document.form.cc_number.style.backgroundColor = "#FFFFFF";
        } else {
            cCError("Unrecognized Credit Card");
            return false;
        }
    }

}

var creditCard = $("cc_number");
creditCard.addEventListener("blur", creditCardValidation, false);


var finishedBuildingPizzaBtn = $("fin-build-btn");

function finishedBuildingPizza() {
    "use strict";
    var billingInfoDiv = $("billing_info_div"),
        finPizzaBtnDiv = $("fin-pizza-btn"),
        result,
        conBox = window.confirm('Press "OK" if you\'re finished building your pizza');
    
    if (conBox === false) {
        formValidation();
    } else if (conBox === true) {
        result = formValidation();
        if (result === true) {
            billingInfoDiv.style.display = "block";
            finalButton.style.display = "block";
            finPizzaBtnDiv.setAttribute("class", "mainhide");
        }
    }
}

finishedBuildingPizzaBtn.addEventListener("click", finishedBuildingPizza, false);


var buildPizzaSection = $("build-order-section");

function calTotal() {
    "use strict";
    var toppingChecks = document.getElementsByName("toppings"),
        i,
        doughType = document.form.pizza_selection.value,
        total = $("total"),
        totalCalc = 0.00;

    totalCalc += parseFloat(doughType);
    
    if (document.form.cheese.value === "cheese-extra") {totalCalc += 2.99; }
    if (document.form.cheese.value === "cheese-double") {totalCalc += 3.99; }
    if (document.form.sauce.value === "sauce-hearty") {totalCalc += 0.99; }
    if (document.form.sauce.value === "sauce-bbq") {totalCalc += 1.99; }
    
    for (i = 0; i < toppingChecks.length; i++) {
        if (toppingChecks[i].checked === true) {
            totalCalc += 0.99;
        }
    }

    total.value = totalCalc.toFixed(2).toString();
}


buildPizzaSection.addEventListener("change", calTotal, false);
