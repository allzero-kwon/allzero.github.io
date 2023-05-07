//E0 I1 S2 N3 T4 F5 J6 P7

const qnaList = [
  {
    q: "1. 나는 코딩할 때 가끔 희열을 느낀다",
    a: [
      { answer: "a. 응. 버그는 화나지만, 그래도 재밌어.", type: [0] },
      { answer: "b. 아니 나는.. 코딩에 재능이 없어..", type: [1] },
    ],
  },
  {
    q: "2. 로또 1등에 당첨된 당신, 어떤 걸 선택할까? ",
    a: [
      { answer: "a. 인생은 한번뿐! 포르쉐 지르러 가자!!", type: [0] },
      {
        answer: "b. 평소와 똑같이. 어떻게 쓸지 일단 계획을 세워보자.",
        type: [1],
      },
    ],
  },
  {
    q: "3. 어떤 개발/과목을 선호하나요?",
    a: [
      { answer: "a. 신기술 개쩔어! 인공지능 chatGPT 최고!", type: [2] },
      { answer: "b. 나는 수학이나 알고리즘이 좋아. ", type: [3] },
      {
        answer: "c. 앱이나 웹처럼 어떤 결과물을 만들어내는게 좋더라. ",
        type: [3],
      },
    ],
  },
  {
    q: "4. 입사한 당신, 모르고 중요한 데이터를 날려버렸다. 하지만 오늘은 여자친구와 1주년...당신은?",
    a: [
      {
        answer: "a. 자기야 미안해.. 나 사고쳐서 오늘 못갈 것 같애..",
        type: [0],
      },
      { answer: "b. 사수님 죄송해요 ㅠㅠ 내일와서 수습하겠습니다!", type: [1] },
    ],
  },
  {
    q: "5. 당신은 어떤 칭찬을 받고 싶다?",
    a: [
      { answer: "a. 너와 같은 팀이어서 너무 좋아!", type: [5] },
      {
        answer: "b. 너의 정보처리 능력을 통해 이 일정을 줄인 것이 대단해!",
        type: [4],
      },
    ],
  },
  {
    q: "6. 당신은 조별과제에서 주로 어떤 포지션 인가요?",
    a: [
      { answer: "a. 딴건 못해도 발표랑 리딩은 잘해. 리더형", type: [3] },
      {
        answer: "b. 다들 내 버스에 타라구! 운전수형",
        type: [2],
      },
      {
        answer: "c. 시키는 건 다 잘해. 멤버형",
        type: [2],
      },
      {
        answer: "d. 실력은 없으니 커피라도 살게ㅠ 물주형",
        type: [2],
      },
    ],
  },
  {
    q: "7. 당신에게 가장 중요한 가치는?",
    a: [
      { answer: "a. Money. 돈이 최고야! ", type: [3] },
      {
        answer: "b. Love. 사랑과 가족 그리고 나의 삶이 가장 중요해",
        type: [2],
      },
      {
        answer: "c. Honor. 대한민국을 뒤흔드는 사나이가 되겠어. ",
        type: [2],
      },
      {
        answer: "d. Knowledge. 지식이 깊고, 똑똑한 사람이 되고 싶어.",
        type: [2],
      },
    ],
  },
];

const infoList = [
  {
    name: "학자의 냄새가 나는 당신은, <대학원생>",
    desc: '<span class="half_HL">○ 성격은?</span><br> 당신은 현재보다 아직은 더 성장하고 싶은 연구자형!<br> 랩실에서 코딩하는 너의 모습<br> 당장은 가난할지언정, 미래의 나의 가치를 높이자. <br> 주의! 김박사넷으로 교수님을 잘 선택하세요 !!',
  },
  {
    name: "나는야 대한민국의 중심에서 일하는 <대기업맨>",
    desc: '<span class="half_HL">○ 성격은?</span><br> 당신은 고액연봉자! 왜 근데 세금만 많이 내고 통장엔... <br> 행동적이고 진취적이면서 사교적인 당신 <br> 웹과 앱은 당신의 필수덕목 입니다. <br> 소프트웨어 엔지니어링, 데이터베이스 어느 하나 놓치지 말고 꼭! 열심히 듣고 졸업해요. <br> 주의! 기죽지마 취준! 야 너두 할수있어!',
  },
  {
    name: "워라밸이 좋아요 <공기업맨>",
    desc: '<span class="half_HL">○ 성격은?</span><br> 나는 적당히 벌고, 내 삶의 여유가 가장 중요해. <br> 당신은 책임감이 강하고 절차를 중요시하는 사람이에요 <br> 기사시험과 보안공부를 열심히 하세요. (요즘은 AI도 굿) <br> 혹시 너.. IXXJ 니?',
  },
  {
    name: "인생은 나의 것! 난 사장이 될거야. <스타트업>",
    desc: '<span class="half_HL">○ 성격은?</span><br> 진취적이고 도전적인 당신은 천상 CEO. <br> 내가 곧 일론머스크다. <br> 스타트업은 개발력 + 기획력 모두 필요해요. <br> 학생 때 학교벤처지원 찬스를 꼭꼭! 활용해보세요. <br> ',
  },
];