$(document).ready(function () {
  let finalExpression = "";
  let operator = "";

  $(".number-button, .number-lastbutton").click(getNumber);

  $(".operator-button, .operator-lastbutton, .modulus-button").click(
    getOperator
  );

  $(".operator-equals").click(evaluateExpression);

  $("#reset-button").click(() => {
    $(".result-input").val("");
    finalExpression = "";
    operator = "";
  });

  function getNumber() {
    const value = parseInt($(this).val());
    finalExpression += value;
    $(".result-input").val(finalExpression);
  }

  function getOperator() {
    operator = $(this).val();
    finalExpression += operator;
    checkInput();
  }

  function evaluateExpression() {
    const result = eval(finalExpression);
    $(".result-input").val(result);
  }

  function checkInput() {
    let inputExpression = $(".result-input").val();
    if (finalExpression !== inputExpression) {
        inputExpression += operator;
        finalExpression = inputExpression;
      $(".result-input").val(inputExpression);
    } else {
      $(".result-input").val(finalExpression);
    }
  }
});
