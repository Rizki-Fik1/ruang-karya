import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });

  const handleOptionSelect = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  };

  const handleNext = () => {
    console.log('Survey answers:', answers);
    navigate('/verification/step-3');
  };

  const questions = [
    {
      id: 'question1',
      title: 'Pertanyaan 1',
      subtitle: 'Apa tujuan Kamu gabung di RuangKarya?',
      options: [
        'Mengembangkan bakat dan minat',
        'Mencari pengalaman berkolaborasi',
        'Ingin dikenal lewat karya',
        'Cuma pengen seru-seruan aja'
      ]
    },
    {
      id: 'question2',
      title: 'Pertanyaan 2',
      subtitle: 'Konten seperti apa yang paling kamu suka?',
      options: [
        'Video Kreatif',
        'Video Edukasi',
        'Musik dan Audio',
        'Animasi dan Hiburan'
      ]
    },
    {
      id: 'question3',
      title: 'Pertanyaan 3',
      subtitle: 'Kamu tahu website RuangKarya dari mana?',
      options: [
        'Teman/kelompok sekolah',
        'Guru atau pembimbing',
        'Event atau lomba',
        'Internet / artikel / rekomendasi web'
      ]
    }
  ];

  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2 sm:mb-3 space-y-2 sm:space-y-0">
        <div className="text-start">
          <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
            Terimakasih sudah <br/> melakukan <span className="text-blue-600">verifikasi!</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Sebelum masuk kedalam menu website, Kami ingin <br className="hidden sm:block" /> melakukan survey dahulu kepada Kamu. Bentar aja :)
          </p>
        </div>
        
        <button
          onClick={handleNext}
          disabled={!answers.question1 || !answers.question2 || !answers.question3}
          style={{ background: '#5370FF' }}
          className="text-white font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm w-full sm:w-auto"
        >
          Next Step
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        {questions.map((question) => (
          <div key={question.id} className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3 shadow-sm">
            <div className="text-start mb-2 sm:mb-3">
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm">{question.title}</h3>
              <p className="text-xs text-gray-600 mt-0.5">{question.subtitle}</p>
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(question.id, option)}
                  className="w-full px-2 py-1 sm:py-1.5 text-xs rounded-md font-medium transition-colors text-white"
                  style={{ 
                    background: answers[question.id] === option ? '#2C42B5' : '#5370FF'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;




