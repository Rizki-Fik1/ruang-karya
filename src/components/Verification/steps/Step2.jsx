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
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-6">
        <div className="text-start">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Terimakasih sudah <br/> melakukan <span className="text-blue-600">verifikasi!</span>
          </h2>
          <p className="text-gray-600 text-xs">
            Sebelum masuk kedalam menu website, Kami ingin <br/> melakukan survey dahulu kepada Kamu. Bentar aja :)
          </p>
        </div>
        
        <button
          onClick={handleNext}
          disabled={!answers.question1 || !answers.question2 || !answers.question3}
          style={{ background: '#5370FF' }}
          className="text-white font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {questions.map((question) => (
          <div key={question.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="text-start mb-4">
              <h3 className="font-bold text-gray-800 text-md">{question.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{question.subtitle}</p>
            </div>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(question.id, option)}
                  className="w-full px-3 py-2 text-xs rounded-lg font-medium transition-colors text-white"
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


