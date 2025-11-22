const quizData = [
    {
      question: "Как долго мы вместе?",
      options: ["5 месяцев", "6 месяцев", "7 месяцев"],
      answer: "6 месяцев"
    },
    {
      question: "Где мы познакомились?",
      options: ["ЦСКА на Сатпаева", "Абая Байтурсынова", "ЦАТЭК"],
      answer: "ЦСКА на Сатпаева"
    },
    {
      question: "Когда мы впервые поцеловались?",
      options: ["20.05.25", "21.05.25", "22.05.25"],
      answer: "20.05.25"
    },
    {
      question: "А когда начали встречаться?))",
      options: ["20.05.25", "21.05.25", "22.05.25"],
      answer: "21.05.25"
    },
    {
      question: "Когда у нас будет свадьба?)",
      options: ["Никогда", "Завтра", "27.07.2027"],
      answer: "27.07.2027"
    }
  ];

  let currentStep = 0;

  function showQuestion() {
    const quiz = document.getElementById('quiz-container');
    const q = quizData[currentStep];
    quiz.innerHTML = `<p>${q.question}</p>`;
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      quiz.appendChild(btn);
    });
  }

  function checkAnswer(choice) {
    const q = quizData[currentStep];
    if(choice === q.answer) {
      currentStep++;
      if(currentStep < quizData.length) {
        showQuestion();
      } else {
        showInvitation();
      }
    } else {
      alert("Попробуй ещё раз 😉");
    }
  }

  function showInvitation() {
    document.getElementById('quiz-container').classList.add('hidden');
    const invite = document.getElementById('invite-container');
    invite.classList.remove('hidden');

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('falling-heart');
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';
      heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 300);
  }

  // Запуск викторины
  showQuestion();