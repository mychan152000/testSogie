const quiz = [
  {
    question: "Q1: Gioi tinh sinh hoc cua ban la?",
    choices: {
      "Liên giới tính": 0,
      Nam: 1,
      Nữ: 2,
    },
  },
  {
    question: "Q2: Ban dang gioi cua ban la?",
    choices: {
      Nam: 3,
      Nữ: 4,
      // "trung tinh": -1,
    },
  },
  {
    question: "Q3: Ban cam thay co tinh cam voi?",
    choices: {
      "khong co tinh cam voi gioi nao": 5,
      Nam: 6,
      "nam va gioi khac (2 gioi)": 7,
      "nam va nu": 8,
      "nhieu hon hai gioi": 9,
      Nu: 10,
      "nu va gioi khac (2 gioi)": 11,
    },
  },
  {
    question: "Q4: ban co hap dan ve tinh duc voi gioi nao?",
    choices: {
      "khong gioi nao": 12,
      nam: 13,
      "nam va gioi khac": 14,
      "nam va nu": 15,
      "nhieu hon hai gioi": 16,
      nu: 17,
      "nu va gioi khac (2 gioi)": 18,
    },
  },
];
const ignore_secondary_indices = [0, 3, 7, 10, 13, 16, 19, 23, 26, 29];

// NOT FINAL QUIZ LIST !!!!!!
const secondary_quiz = [
  {
    question: "Bạn có muốn xác định rõ thêm cho xu hướng tình cảm không?",
    choices: {
      có: 1,
      không: 2,
    },
  },
  {
    question:
      "Bạn có thể bắt đầu mối quan hệ tình cảm với người chưa quen biết nhiều hay không?",
    choices: {
      Có: 4,
      Không: 5,
      "Không hẳn": 6,
    },
  },
  {
    question:
      "Bạn có thể lâu lâu có hứng bắt đầu một mối quan hệ tình cảm một lần không? ",
    choices: {
      Có: 8,
      Không: 9,
    },
  },
  {
    question: "Bạn nghĩ bạn được hấp dẫn tình cảm bởi bao nhiêu giới?",
    choices: {
      "Nhiều hơn hai giới": 11,
      "Tất cả các giới": 12,
    },
  },
  {
    question:
      "Bạn có 'mù giới' (tức không để ý giới và giới tính của đối phương) khi bắt đầu một mối quan hệ hay không?",
    choices: {
      Có: 14,
      Không: 15,
    },
  },
  {
    question: "Bạn có muốn xác định rõ thêm cho xu hướng tình dục?",
    choices: {
      Có: 17,
      Không: 18,
    },
  },
  {
    question:
      "Bạn có thể quan hệ tình dục với người chưa quen biết nhiều hay không?",
    choices: {
      Có: 20,
      Không: 21,
      "Không hẳn": 22,
    },
  },
  {
    question: "Bạn có thể lâu lâu có hứng quan hệ tình dục một lần không?",
    choices: {
      Có: 24,
      Không: 25,
    },
  },
  {
    question: "Bạn nghĩ bạn được hấp dẫn tình dục bởi bao nhiêu giới?",
    choices: {
      "Nhiều hơn hai giới": 27,
      "Tất cả các giới": 28,
    },
  },
  {
    question:
      "Bạn có 'mù giới' (tức không để ý giới và giới tính của đối phương) khi quan hệ tình dục hay không?",
    choices: {
      "Nhiều hơn hai giới": 30,
      "Tất cả các giới": 31,
    },
  },
];
//final quiz
secondary_quiz.forEach((quest, index) => {
  quest["ignored"] = ignore_secondary_indices[index];
});
