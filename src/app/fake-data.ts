import { Survey } from '../app/survey-page/survey/survey.model';
import { Question } from './survey-page/survey/questions/question.model';
import { Answer } from './survey-page/survey/questions/answer.model';


export const fakeSurveyList: Survey[] = [
    {
        id: '1',
        title: 'What is your favorite brand?',
        description: 'Choose between most valueble brands',
        createDate: new Date(2021,12,31,17,23,42,0),
        startDate: new Date(2022,1,1,17,23,42,0),
        endDate: new Date(2022,1,31,23,59,59,0),
        activated: true,
        imageURL: '',
        questions: ['1', '2', '3']

    }
]

export const fakeQuestionList: Question[] = [
    {
        id: '1',
        question: 'Which one tastes better?',
        answer: ['1', '2'],
        surveyId: '1'
    },
    {
        id: '2',
        question: 'Which one you buy most?',
        answer: ['3', '4', '5'],
        surveyId: '1'
    },
    {
        id: '3',
        question: 'Do you drink pop every week?',
        answer: ['6', '7'],
        surveyId: '1'
    }
    
]

export const fakeAnswerlist: Answer[] = [
    {
        id: '1',
        answer: 'Coke',
        questionId: '1',
        isCorrect: false,
    },
    {
        id: '2',
        answer: 'Pepsi',
        questionId: '1',
        isCorrect: false,
    },
    {
        id: '3',
        answer: 'Diet pop',
        questionId: '2',
        isCorrect: false,
    },
    {
        id: '4',
        answer: 'Zero pop',
        questionId: '2',
        isCorrect: false,
    },
    {
        id: '5',
        answer: 'Regular pop',
        questionId: '2',
        isCorrect: false,
    },
    {
        id: '6',
        answer: 'Yes',
        questionId: '3',
        isCorrect: false,
    },{
        id: '7',
        answer: 'No',
        questionId: '3',
        isCorrect: false,
    }
]