
// Initialize calculator variables
let displayValue = '0';
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;
let currentExpression = '';
let history = [];

// DOM Elements
const display = document.querySelector('.calc-display');
const historyContainer = document.querySelector('.history-container');

// Update display function
const updateDisplay = () => {
  display.textContent = displayValue;
};

// Update history function
const updateHistory = () => {
  historyContainer.innerHTML = `
    <div class="history-title">History</div>
    ${history.map((item, index) => `
      <div class="history-item" key="${index}">
        <span class="history-expression">${item.expression}</span>
        <span class="history-result">${item.result}</span>
      </div>
    `).join('')}
    ${history.length > 0 ? 
      '<button class="clear-history">Clear History</button>' : ''}
  `;
  
  // Add event listener to clear history button
  const clearHistoryBtn = document.querySelector('.clear-history');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      history = [];
      updateHistory();
    });
  }
};

// Input digit function
const inputDigit = (digit) => {
  if (waitingForSecondOperand === true) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
};

// Input decimal function
const inputDecimal = () => {
  if (waitingForSecondOperand) {
    displayValue = '0.';
    waitingForSecondOperand = false;
    return;
  }
  
  if (!displayValue.includes('.')) {
    displayValue += '.';
  }
};

// Clear display function
const clearDisplay = () => {
  displayValue = '0';
  firstOperand = null;
  waitingForSecondOperand = false;
  operator = null;
  currentExpression = '';
};

// Handle operator function
const handleOperator = (nextOperator) => {
  const inputValue = parseFloat(displayValue);
  
  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }
  
  if (firstOperand === null && !isNaN(inputValue)) {
    firstOperand = inputValue;
    currentExpression = displayValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    const resultString = `${parseFloat(result.toFixed(7))}`;
    const fullExpression = `${currentExpression} ${operator} ${displayValue}`;
    
    // Add to history when equals is pressed
    if (nextOperator === '=') {
      history = [
        { expression: fullExpression, result: resultString },
        ...history.slice(0, 9) // Keep only the last 10 entries
      ];
      updateHistory();
      currentExpression = '';
    } else {
      currentExpression = resultString;
    }
    
    displayValue = resultString;
    firstOperand = result;
  }
  
  waitingForSecondOperand = true;
  operator = nextOperator === '=' ? null : nextOperator;
};

// Calculate function
const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
};

// Handle percentage function
const handlePercentage = () => {
  const currentValue = parseFloat(displayValue);
  if (!isNaN(currentValue)) {
    displayValue = (currentValue / 100).toString();
  }
};

// Toggle sign function
const toggleSign = () => {
  const currentValue = parseFloat(displayValue);
  if (!isNaN(currentValue)) {
    displayValue = (currentValue * -1).toString();
  }
};

// Event handler for button clicks
const handleButtonClick = (e) => {
  const target = e.target;
  if (!target.matches('button')) return;
  
  const button = target;
  const { value } = button.dataset;
  
  if (!value) return;
  
  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(value);
      break;
    case '.':
      inputDecimal();
      break;
    case 'clear':
      clearDisplay();
      break;
    case 'sign':
      toggleSign();
      break;
    case 'percent':
      handlePercentage();
      break;
    default:
      if (!isNaN(parseInt(value))) {
        inputDigit(value);
      }
      break;
  }
  
  updateDisplay();
};

// Add event listeners to calculator buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.calc-button');
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
  
  // Initialize display
  updateDisplay();
  
  // Initialize history display
  updateHistory();
});
