const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", calculate);

function calculate(e) {
  e.preventDefault();
  document.getElementById("result").scrollIntoView();

  const annualSalary = parseInt(document.getElementById("salary").value);
  const annualBonus = parseInt(document.getElementById("bonus").value);
  const bonus = (isNaN(annualBonus) ? 0 : annualBonus) / 100 + 1;
  const NI = document.getElementById("national-insurance");
  const takeHome = document.getElementById("take-home");
  const taxFree = document.getElementById("tax-free");
  const taxPaid = document.getElementById("tax-paid");

  //CALCULATE NATIONAL INSURANCE
  const noNI = 166 * 52.143;
  const NI12 = 962 * 52.143;
  let NIVal;

  if (annualSalary <= noNI) {
    // NoNI contribution
    NIVal = 0;
  } else {
    if (annualSalary <= NI12) {
      // 12% on your weekly earnings between £166 and £796
      NIVal = Math.floor((annualSalary - noNI) * 0.12 * bonus);
    } else {
      // MAX - 12% on your weekly earnings between £166 and £796
      let maxTwelvePercent = (NI12 - noNI) * 0.12;

      // 2% on any weekly earnings over £796
      let twoPercent = (annualSalary - NI12) * 0.02;
      NIVal = Math.floor((maxTwelvePercent + twoPercent) * bonus);
    }
  }
  NI.innerHTML = `&#163; ${NIVal}`;

  //CALCULATE INCOME TAX
  const lowBracket = 12500;
  const midBracket = 50000;
  const highBracket = 150000;
  let takeHomeVal;
  let taxPaidVal = 0;

  if (annualSalary <= lowBracket) {
    takeHomeVal = (annualSalary - NIVal) * bonus;
    taxPaidVal = 0;
  } else {
    if (annualSalary <= midBracket) {
      taxPaidVal = Math.floor((annualSalary - lowBracket) * 0.2 * bonus);
      takeHomeVal = (annualSalary - taxPaidVal - NIVal) * bonus;
    } else if (annualSalary > midBracket && annualSalary <= highBracket) {
      // MAX - 20% on your weekly earnings between £12501 and £50000
      let maxTwentyPercent = (midBracket - lowBracket) * 0.2;

      // 40% on any weekly earnings over £796
      let fourtyPercent = (annualSalary - midBracket) * 0.4;

      taxPaidVal = Math.floor((maxTwentyPercent + fourtyPercent) * bonus);
      takeHomeVal = (annualSalary - taxPaidVal - NIVal) * bonus;
    } else {
      // MAX - 20% on your weekly earnings between £12501 and £50000
      let maxTwentyPercent = (midBracket - lowBracket) * 0.2;

      // 40% on any weekly earnings between £50000 and £150000
      let fourtyPercent = (highBracket - midBracket) * 0.4;

      // 45% on any weekly earnings over £150000
      let fourtyFivePercent = (annualSalary - highBracket) * 0.45;

      taxPaidVal = Math.floor(
        (maxTwentyPercent + fourtyPercent + fourtyFivePercent) * bonus
      );
      takeHomeVal = (annualSalary - taxPaidVal - NIVal) * bonus;
    }
  }

  document.getElementById("result-text").innerHTML = `<h4>
                Earn <span>£${parseInt(
                  annualSalary * bonus
                )}</span> and you'll take home <span
                  >£${parseInt(takeHomeVal)}</span
                >
                in 2019/2020.
              </h4>`;

  takeHome.innerHTML = `&#163; ${parseInt(takeHomeVal)}`;
  taxPaid.innerHTML = `&#163; ${taxPaidVal}`;
  taxFree.innerHTML = `&#163; ${lowBracket}`;

  // DISPLAY CHART
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    backgroundColor: "transparent",
    animationEnabled: true,
    title: {
      text: "Salary Breakdown"
    },
    data: [
      {
        type: "pie",
        startAngle: 0,
        toolTipContent: "<b>{label}</b>: £{y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 18,
        indexLabel: "{label} - £{y}",
        dataPoints: [
          { y: parseInt(takeHomeVal), label: "Take Home Pay" },
          { y: NIVal, label: "National Insurance" },
          { y: taxPaidVal, label: "Income Tax Paid" }
        ]
      }
    ]
  });
  chart.render();
}

$(document).ready(function() {
  $(".facts-class").slick({
    dots: true,
    //arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: "linear"
  });
});
