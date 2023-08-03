'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-05-18T21:31:17.178Z',
    '2023-06-03T07:42:02.383Z',
    '2023-06-28T09:15:04.904Z',
    '2023-07-01T10:17:24.185Z',
    '2023-07-18T14:11:59.604Z',
    '2023-07-20T17:01:17.194Z',
    '2023-07-22T23:36:17.929Z',
    '2023-07-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-05-18T21:31:17.178Z',
    '2023-06-03T07:42:02.383Z',
    '2023-06-28T09:15:04.904Z',
    '2023-07-01T10:17:24.185Z',
    '2023-07-18T14:11:59.604Z',
    '2023-07-20T17:01:17.194Z',
    '2023-07-22T23:36:17.929Z',
    '2023-07-23T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2023-05-18T21:31:17.178Z',
    '2023-06-03T07:42:02.383Z',
    '2023-06-28T09:15:04.904Z',
    '2023-07-01T10:17:24.185Z',
    '2023-07-18T14:11:59.604Z',
    '2023-07-20T17:01:17.194Z',
    '2023-07-22T23:36:17.929Z',
    '2023-07-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-GB',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2023-07-01T10:17:24.185Z',
    '2023-07-18T14:11:59.604Z',
    '2023-07-20T17:01:17.194Z',
    '2023-07-22T23:36:17.929Z',
    '2023-07-23T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account5 = {
  owner: 'Daniel Agbeni',
  movements: [430, 1000, 7700, 500, 90, 2000, -20],
  interestRate: 1.7,
  pin: 2003,

  movementsDates: [
    '2023-06-03T07:42:02.383Z',
    '2023-06-28T09:15:04.904Z',
    '2023-07-01T10:17:24.185Z',
    '2023-07-18T14:11:59.604Z',
    '2023-07-20T17:01:17.194Z',
    '2023-07-22T23:36:17.929Z',
    '2023-07-23T10:51:36.790Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};
const youtuber = {
  owner: 'Arun Maini',
  movements: [10000, -5000, -300, 20000, 300, -400, -20, 15000],
  interestRate: 2,
  pin: 1212,

  movementsDates: [
    '2023-05-18T21:31:17.178Z',
    '2023-06-03T07:42:02.383Z',
    '2023-06-28T09:15:04.904Z',
    '2023-07-01T10:17:24.185Z',
    '2023-07-18T14:11:59.604Z',
    '2023-07-20T17:01:17.194Z',
    '2023-07-22T23:36:17.929Z',
    '2023-07-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-GB',
};

// let accont = account;
const accounts = [account1, account2, account3, account4, account5, youtuber];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const createAcc = document.querySelector('.create__account');
const overlay = document.querySelector('.overlay');
const createBtn = document.querySelector('.createBtn');
const newName = document.querySelector('.name');
const newPin = document.querySelector('.pin');
const errorMessage = document.querySelector('.error_message');
const created = document.querySelector('.created');
const createName = document.querySelector('.createName');
const createPin = document.querySelector('.createPin');
const createUser = document.querySelector('.createUser');
const now = new Date();
const local = navigator.language;

errorMessage.classList.add('show');
// Create New Account
let account;

createBtn.addEventListener('click', e => {
  e.preventDefault();
  if (newPin.value > 0) {
    createAcc.classList.add('hidden');
    created.classList.remove('hidden');
    let owner = newName.value;
    let pin = +newPin.value;
    let movements = [200, -4, -2];
    let interest = 1.5;
    let username = owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    let movementsDates = [
      '2023-07-20T17:01:17.194Z',
      '2023-07-22T23:36:17.929Z',
      '2023-07-23T10:51:36.790Z',
    ];
    let currency = 'NGN';
    let locale = local;
    containerApp.style.opacity = 0;
    // console.log(owner, pin, username, interest, movements, updated);

    const account = createNewAcc(
      owner,
      pin,
      username,
      interest,
      movements,
      movementsDates,
      currency,
      locale
    );
    accounts.push(account);
    createName.textContent = `Name: ${owner}`;
    createPin.textContent = `Pin: ${pin}`;
    createUser.textContent = `Your Username: ${username}`;
  }
});

const createNewAcc = function (
  owner,
  pin,
  username,
  interest,
  movements,
  movementsDates,
  currency,
  locale
) {
  return {
    owner,
    pin,
    username,
    interest,
    movements,
    movementsDates,
    currency,
    locale,
  };
};
// End of create New Account

const welcome = function () {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
};

const createUsernames = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};
createUsernames(accounts);
const formartCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const moves = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  const pastdays = (a, b) =>
    Math.round(Math.abs(b - a) / (1000 * 60 * 60 * 24));
  moves.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const locale = acc.locale;
    const displayDate = date.toLocaleDateString(locale);
    const daysPassed = pastdays(now, date);

    const showDate = function () {
      if (daysPassed === 0) return 'Today';
      if (daysPassed === 1) return 'Yesterday';
      if (daysPassed <= 7) return `${daysPassed} days ago`;
      else return displayDate;
    };

    const realMov = formartCurr(mov, acc.locale, acc.currency);

    const update = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${showDate()}</div>
          <div class="movements__value">${realMov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', update);
  });
};

const calcDIsplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((mov, i) => mov + i, 0);
  labelBalance.textContent = formartCurr(acc.balance, acc.locale, acc.currency);
  labelDate.textContent = `${now.toLocaleDateString(
    currentAccount.locale
  )}, ${now.toLocaleTimeString(currentAccount.locale)}`;
};
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formartCurr(incomes, acc.locale, acc.currency);

  const outgoings = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formartCurr(
    Math.abs(outgoings),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formartCurr(
    interest,
    acc.locale,
    acc.currency
  );
};

function updateUi(acc) {
  // Display Movement
  displayMovements(acc);
  //Display balance
  calcDIsplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
}

const startLogOutTimer = () => {
  //Set time to 5 minute
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // At 0 remove UI
    if (time === 0) {
      clearInterval(timer);
      welcome();
    }
    time--;
  };
  let time = 120;
  tick();
  // Call the timer every seconds
  const timer = setInterval(tick, 1000);
  return timer;
};
// Event Handlers
let currentAccount, timer;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // restore color
    inputLoginUsername.style.border = inputLoginPin.style.border =
      '1px solid #fff';

    // Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUi(currentAccount);
  } else {
    inputLoginPin.style.border = '1px solid #e52a5a';
    welcome();
    errorMessage.classList.remove('hidden');
    setTimeout(function () {
      errorMessage.classList.add('hidden');
    }, 4000);
  }
  if (currentAccount === undefined) {
    inputLoginUsername.style.border = '1px solid #e52a5a';
    welcome();
    createAcc.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // Making transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());
    resetTimer();
    // Update UI
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const loan = Math.floor(inputLoanAmount.value);
  setTimeout(() => {
    if (currentAccount.movements.some(mov => mov >= loan * 0.1) && loan > 0) {
      currentAccount.movements.push(loan);
      currentAccount.movementsDates.push(new Date().toISOString());
      resetTimer();
      updateUi(currentAccount);
    }
  }, 10000);
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    console.log('Delete');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Hide UI
    welcome();
    // Delete Account
    accounts.splice(index, 1);

    updateUi(currentAccount);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

overlay.addEventListener('click', () => {
  createAcc.classList.add('hidden');
  overlay.classList.add('hidden');
  created.classList.add('hidden');
});
function resetTimer() {
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
}
