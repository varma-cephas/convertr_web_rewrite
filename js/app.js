const currency_converter_form = document.querySelector(".currency_converter_form");
const currency_amount_input = document.querySelector(".currency_amount_input");
const origin_currency_select_option = document.querySelector(".origin_currency_select_option");
const convert_currency_select_option = document.querySelector(".convert_currency_select_option");
const converted_currency_value_output = document.querySelector(".converted_currency_value_output");

const origin_currency_conversion_rate = document.querySelector(".origin_currency_conversion_rate");
const converted_currency_conversion_rate = document.querySelector(".converted_currency_conversion_rate");

const _0x1dd5a7=_0x22d0;function _0x22d0(_0x1a75ea,_0x475155){const _0x24a4ea=_0x24a4();return _0x22d0=function(_0x22d0fa,_0x3501f8){_0x22d0fa=_0x22d0fa-0xb8;let _0x21f3d3=_0x24a4ea[_0x22d0fa];return _0x21f3d3;},_0x22d0(_0x1a75ea,_0x475155);}(function(_0x5a884b,_0x34ef21){const _0x3b5d3b=_0x22d0,_0x2f1ea0=_0x5a884b();while(!![]){try{const _0x3f256a=-parseInt(_0x3b5d3b(0xbd))/0x1+-parseInt(_0x3b5d3b(0xb8))/0x2*(-parseInt(_0x3b5d3b(0xc0))/0x3)+parseInt(_0x3b5d3b(0xbe))/0x4+-parseInt(_0x3b5d3b(0xb9))/0x5+parseInt(_0x3b5d3b(0xbb))/0x6+-parseInt(_0x3b5d3b(0xbc))/0x7+parseInt(_0x3b5d3b(0xbf))/0x8;if(_0x3f256a===_0x34ef21)break;else _0x2f1ea0['push'](_0x2f1ea0['shift']());}catch(_0x4d4859){_0x2f1ea0['push'](_0x2f1ea0['shift']());}}}(_0x24a4,0x1c064));function _0x24a4(){const _0x71c0be=['812xDxnhf','1696688OBAJkp','15xowcHT','71986uZwUUb','588940gZhAfQ','jcKGTcMWAkvwFccF5Czf7pZkJzR0DKAwRphhm6NE','112764oVsWtc','885948ZdUEOP','51908ziilqS'];_0x24a4=function(){return _0x71c0be;};return _0x24a4();}const api_key=_0x1dd5a7(0xba);

async function getCurrencyData(){
    const request = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_${api_key}`);
    const response = await request.json()

    for(let x in response.data){
        let origin_currency_option = document.createElement("option");
        let converted_currency_option = document.createElement("option");

        origin_currency_option.textContent = response.data[x].code;
        origin_currency_option.setAttribute("value", response.data[x].value.toFixed(3));

        origin_currency_option.setAttribute("class", `origin_currency_${response.data[x].code.toLowerCase()}`);
        origin_currency_select_option.appendChild(origin_currency_option);


        converted_currency_option.textContent = response.data[x].code;
        converted_currency_option.setAttribute("value", response.data[x].value.toFixed(3));

        convert_currency_select_option.setAttribute("class", `origin_currency_${response.data[x].code.toLowerCase()}`);
        convert_currency_select_option.appendChild(converted_currency_option);
    }
}

getCurrencyData();


origin_currency_select_option.addEventListener("change", ()=>{
    origin_currency_conversion_rate.textContent = origin_currency_select_option.value;
})

convert_currency_select_option.addEventListener("change", ()=>{
    converted_currency_conversion_rate.textContent = convert_currency_select_option.value;
})

