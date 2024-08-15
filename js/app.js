const currency_converter_form = document.querySelector(".currency_converter_form");
const currency_amount_input = document.querySelector(".currency_amount_input");
const origin_currency_select_option = document.querySelector(".origin_currency_select_option");
const convert_currency_select_option = document.querySelector(".convert_currency_select_option");
const converted_currency_value_output = document.querySelector(".converted_currency_value_output");


origin_currency_select_option.addEventListener("change", ()=>{
    converted_currency_value_output.textContent = origin_currency_select_option.value;
})

convert_currency_select_option.addEventListener("change", ()=>{
    converted_currency_value_output.textContent = convert_currency_select_option.value;
})


