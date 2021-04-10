//test
// briggs: EI, SN, TF, JP
var quizQuestions = [
  // test #1
  {
    question: "In front of an esoteric but yet eye-catching painting, you will...",
    answers: [
      {
        type: 'J',
        content: "Take notes of the artist and title of the painting, and move on to the next painting. (J)"
      },
      {
        type: 'J, No',
        content: "Stand there for a moment to appreciate the painting. (P)"
      }
    ]
  },
  // test #2
  {
    question: "Photography is not allowed inside the exhibition space. But the person next to you is clearly taking pictures!",
    answers: [
      {
        type: 'T',
        content: "The staff will take care of it. I will just go my way. (T)"
      },
      {
        type: 'T, No',
        content: "I will politely stop them and say taking pictures is prohibited. (F)"
      }
    ]
  },
  // test #3
  {
    question: "If someone asks you about the exhibition, you will answer",
    answers: [
      {
        type: 'S',
        content: "based on the specific facts, like what artist is featured, how many artworks are displayed, or how crowded the museum was. (S)"
      },

      {
        type: 'S, No',
        content: "based on my impressions on specific things, like the way I felt in front of the painting. (N)"
      }
    ]
  },
  // test #4
  {
    question: "Your friends say it's the best exhibition ever. But what if you didn't like it at all?",
    answers: [
      {
        type: 'I',
        content: "I will proudly say that I didn't enjoy the exhibition and tell them why. (I)"
      },
      {
        type: 'I, No',
        content: "Just say it was good so I don't have to go against my friends. (E)"
      }
    ]
  }
]

export default quizQuestions

// // briggs: EI, SN, TF, JP
// var quizQuestions = [
//   // question #1
//   {
//     question: 'How often do you visit art exhibitions?',
//     answers: [
//       {
//         type: 'S',
//         content: "Whenever I have a chance. (S)"
//       },
//       {
//         type: 'S, No',
//         content: "Hmm.. I don't really care about art. (N)"
//       }
//     ]
//   },
//   // question #2
//   {
//     question: "A close friend of yours has sent you a painting as a housewarming gift. You want that painting to be ...",
//     answers: [
//       {
//         type: 'F',
//         content: "Something intense, whether its appearance or subject matter. So it can offer me something to think about (F)"
//       },
//       {
//         type: 'F, No',
//         content: "Something pretty, so I can hang it anywhere (T)"
//       }
//     ]
//   },
//   // question #3
//   {
//     question: "You heard there is an exhibition of the artist you like. When are you going to visit the exhibition?",
//     answers: [
//       {
//         type: 'J',
//         content: "Check the exhibition schedule right away and visit there as soon as possible. (J)"
//       },

//       {
//         type: 'J, No',
//         content: "The exhibition won't end that soon. For now, I will just try to remember it's happening. (P)"
//       }
//     ]
//   },
//   // question #4
//   {
//     question: "Before you go to the exhibition ...",
//     answers: [
//       {
//         type: 'T',
//         content: "Google the artist's brief history and their famous works in advance. (T)"
//       },
//       {
//         type: 'T, No',
//         content: "I want fresh impressions! I will try not to look for anything to avoid being biased. (F)"
//       }
//     ]
//   },
//   // question #5
//   {
//     question: "At the very last minute, your friend canceled the exhibition visit with you. What will you do?",
//     answers: [
//       {
//         type: 'E',
//         content: "Everything is always better with friends! I'll reschedule our date (E)"
//       },

//       {
//         type: 'E, No',
//         content: "Even better! I prefer going to the exhibition alone anyway. I will visit there as planned but minus the friend. (I)"
//       }
//     ]
//   },
//   // question #6
//   {
//     question: "It turned out the exhibition can be viewed through VR as well.",
//     answers: [
//       {
//         type: 'N',
//         content: "Amazing! I've always interested in VR and other new technologies. I'll try it right away (N)"
//       },

//       {
//         type: 'N, No',
//         content: "Can it really replace reality? I'd rather go there and see it for myself. (S)"
//       }
//     ]
//   },
//   // question #7
//   {
//     question: "You are on the way to the art museum. The weather is so nice and sunny, perfect for a walk.",
//     answers: [
//       {
//         type: 'P',
//         content: "Walking around isn't on my to-do list. I will go straight to the art museum. (P)"
//       },

//       {
//         type: 'P, No',
//         content: "I still have time to spare. I will look around and take a different route. (J)"
//       }
//     ]
//   },
//   // question #8
//   {
//     question: "You've just entered the exhibition space. Oh, the docent tour is about to begin!",
//     answers: [
//       {
//         type: 'E',
//         content: "What a good timing! I will blend in with the group and go with the flow. (E)"
//       },

//       {
//         type: 'E, No',
//         content: "I hate being around people. I will try my best to stay far away from the tour group. (I)"
//       }
//     ]
//   },
//   // question #9
//   {
//     question: "In front of an esoteric but yet eye-catching painting, you will...",
//     answers: [
//       {
//         type: 'J',
//         content: "Take notes of the artist and title of the painting, and move on to the next painting. (J)"
//       },
//       {
//         type: 'J, No',
//         content: "Stand there for a moment to appreciate the painting. (P)"
//       }
//     ]
//   },
//   // question #10
//   {
//     question: "Photography is not allowed inside the exhibition space. But the person next to you is clearly taking pictures!",
//     answers: [
//       {
//         type: 'T',
//         content: "The staff will take care of it. I will just go my way. (T)"
//       },
//       {
//         type: 'T, No',
//         content: "I will politely stop them and say taking pictures is prohibited. (F)"
//       }
//     ]
//   },
//   // question #11
//   {
//     question: "If someone asks you about the exhibition, you will answer",
//     answers: [
//       {
//         type: 'S',
//         content: "based on the specific facts, like what artist is featured, how many artworks are displayed, or how crowded the museum was. (S)"
//       },

//       {
//         type: 'S, No',
//         content: "based on my impressions on specific things, like the way I felt in front of the painting. (N)"
//       }
//     ]
//   },
//   // question #12
//   {
//     question: "Your friends say it's the best exhibition ever. But what if you didn't like it at all?",
//     answers: [
//       {
//         type: 'I',
//         content: "I will proudly say that I didn't enjoy the exhibition and tell them why. (I)"
//       },
//       {
//         type: 'I, No',
//         content: "Just say it was good so I don't have to go against my friends. (E)"
//       }
//     ]
//   }
// ]

// export default quizQuestions